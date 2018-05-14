<?php
header('Access-Control-Allow-Origin: '.$_GET['domain']);

if (!isset($_GET['post']) || !preg_match('/^[0-9]+$/', $_GET['post']))
  exitWithError('Wrong post ID');
if (!isset($_GET['attachment']) || !preg_match_all('/^[0-9]+$/', $_GET['attachment']))
  exitWithError('Wrong attachment ID');
if (!isset($_GET['domain']) || !preg_match('/^(https?:)\/\/(nullchan7msxi257\.onion|0chan\.(hk|xyz))/', $_GET['domain'], $matches))
  exitWithError('Wrong domain');
$https = $matches[1];

// fetch($_GET['domain'].'/api/session');

$post = json_decode(fetch($_GET['domain'].'/api/post?post='.$_GET['post']), true);
if (!$post)
  exitWithError("API returned corrupted JSON");
if ($post['error'])
  exitWithError(array($post['message'], $post['details']));
$post = $post['post'];
if (!$post['attachments'])
  exitWithError('Attachment not found');

$img_url = null;
foreach($post['attachments'] as $att) {
  if ($att['id'] == $_GET['attachment']) {
    $img_url = $att['images']['thumb_100px']['url'];
    break;
  }
}
if (!$img_url)
  exitWithError('Attachment not found');

$fetched_img = fetch($https.$img_url);

$src = imagecreatefromstring($fetched_img);
// debug_gd($src);
$w = imagesx($src);
$h = imagesy($src);
if ($w <= 50 || $h <= 50) {
  returnBase64($src);
}
else {
  $dest = ImageCreateTrueColor(50, 50);
  if ($w == $h) {
    $x = 0;
    $y = 0;
    $src_w = $src_h = $w;
  }
  elseif ($w > $h) {
    $y = 0;
    $x = round($w/2 - 25);
    $src_w = $src_h = $h;
  }
  elseif ($h > $w) {
    $x = 0;
    $y = round($h/2 - 25);
    $src_w = $src_h = $w;
  }
  imagecopyresampled($dest, $src, 0, 0, $x, $y, 50, 50, $src_w, $src_h);
  returnBase64($dest);
}

function fetch($url) {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
  // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  // curl_setopt($ch, CURLOPT_SSLVERSION, CURL_SSLVERSION_DEFAULT);
  // curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0);
  // curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, 0);
  // curl_setopt ($ch, CURLOPT_SSL_CIPHER_LIST, 'TLSv1');
  curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  curl_setopt($ch, CURLOPT_URL, $url);
  $result=curl_exec($ch);
  $respcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  switch ($respcode) {
    case 302: break;
    case 301: break;
    case 200: break;
    default:  exitWithError("Invalid response code: $respcode"); break;
  }
  curl_close($ch);
  return $result;
}

function returnBase64($res) {
  ob_start(); // Let's start output buffering.
    imagejpeg($res, NULL, 66); //This will normally output the image, but because of ob_start(), it won't.
    $contents = ob_get_contents(); //Instead, output above is saved to $contents
  ob_end_clean(); //End the output buffer.

  $dataUri = "data:image/jpeg;base64," . base64_encode($contents);
  // echo '<img src="'.$dataUri.'">';
  exitWithSUCC(array(url => $dataUri));
}

function debug_gd($res) {
  header("Content-type: image/jpeg");  
  imagejpeg($res);
  exit();
}

function exitWithError($errmsg, $code=400) {
  header('Content-Type: application/json');
  http_response_code($code);
  exit(json_encode(array(error => $errmsg)));
}

function exitWithSUCC($data=array()) {
  header('Content-Type: application/json');
  $data['error'] = false;
  exit(json_encode($data));
}