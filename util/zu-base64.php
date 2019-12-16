<?php
$proxy = "socks5h://127.0.0.1:9050";

header('Access-Control-Allow-Origin: '.$_GET['domain']);

if (!isset($_GET['post']) || !preg_match('/^[0-9]+$/', $_GET['post']))
  exitWithError('Wrong post ID');
if (!isset($_GET['attachment']) || !preg_match_all('/^[0-9]+$/', $_GET['attachment']))
  exitWithError('Wrong attachment ID');
if (!isset($_GET['domain']) || !preg_match('/^(https?:)\/\/((www|p|0).)?((nullplctggmjazqcoboc2pw5anogckczzj6xo45ukrnsaxarpswu7sid)\.onion|0chan\.(pl|club)|1chan\.pl|ochan\.ru|(0pl|gd7qe2pu2jwqabz4zcf3wwablrzym7p6qswczoapkm5oa5ouuaua\.b32)\.i2p)/', $_GET['domain'], $matches))
  exitWithError('Wrong domain');

// force use Tor mirror for 0chan.pl and its non-Tor mirrors in case of Tor proxy enabled
if (preg_match('/^(9050|9150)/', $proxy, $matches)) {
  $domain = preg_replace('/^(https?:)\/\/((www|p|0).)?((0chan\.(pl|club)|1chan\.pl|(0pl|gd7qe2pu2jwqabz4zcf3wwablrzym7p6qswczoapkm5oa5ouuaua\.b32)\.i2p)/', 'http://nullplctggmjazqcoboc2pw5anogckczzj6xo45ukrnsaxarpswu7sid.onion', $_GET['domain']);
} else {
  $domain = $_GET['domain'];
}

$https = $matches[1];

// fetch($domain.'/api/session');

$post = json_decode(fetch($domain.'/api/post?post='.$_GET['post']), true);
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
    $x = round($w/2 - $h/2);
    $src_w = $src_h = $h;
  }
  elseif ($h > $w) {
    $x = 0;
    $y = round($h/2 - $w/2);
    $src_w = $src_h = $w;
  }
  imagecopyresampled($dest, $src, 0, 0, $x, $y, 50, 50, $src_w, $src_h);
  returnBase64($dest);
}

function fetch($url) {
  $ch = curl_init();
  if ($proxy) curl_setopt($ch, CURLOPT_PROXY, $proxy);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
  // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  // curl_setopt($ch, CURLOPT_SSLVERSION, CURL_SSLVERSION_DEFAULT);
  // curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0);
  // curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, 0);
  // curl_setopt ($ch, CURLOPT_SSL_CIPHER_LIST, 'TLSv1');
  curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0');
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array("Cookie: disclaimer=1"));
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
  exitWithSUCC(array('url' => $dataUri));
}

function debug_gd($res) {
  header("Content-type: image/jpeg");  
  imagejpeg($res);
  exit();
}

function exitWithError($errmsg, $code=400) {
  header('Content-Type: application/json');
  http_response_code($code);
  exit(json_encode(array('error' => $errmsg)));
}

function exitWithSUCC($data=array()) {
  header('Content-Type: application/json');
  $data['error'] = false;
  exit(json_encode($data));
}
