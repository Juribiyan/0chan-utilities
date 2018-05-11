<?php

if (!isset($_GET['url']) || !preg_match('/^https?:\/\/[a-z0-9]+\.(nullchan7msxi257\.onion|0chan\.(hk|xyz))\/([0-9]{2}\/){3}[a-z0-9]+-200\.jpg/', $_GET['url']))
  exitWithError('Wrong URL');
if (!isset($_GET['hash']) || !preg_match('/^[0-9a-z_-]+$/i', $_GET['hash']))
  exitWithError('Wrong hash');
if (!isset($_GET['hash']) || !preg_match('/^[0-9]+$/', $_GET['exp']))
  exitWithError('Wrong exp');

$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
// curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
// curl_setopt($ch, CURLOPT_SSLVERSION, CURL_SSLVERSION_DEFAULT);
// curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0);
// curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, 0);
// curl_setopt ($ch, CURLOPT_SSL_CIPHER_LIST, 'TLSv1');
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_URL, $_GET['url'].'?hash='.$_GET['hash'].'&exp='.$_GET['exp']);
$result=curl_exec($ch);
$respcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
switch ($respcode) {
  case 302: break;
  case 301: break;
  case 200: break;
  default:  exitWithError("Invalid response code: $respcode"); break;
}
curl_close($ch);

$src = imagecreatefromstring($result);
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

function returnBase64($res) {
  ob_start(); // Let's start output buffering.
    imagejpeg($res); //This will normally output the image, but because of ob_start(), it won't.
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
  http_response_code($code);
  exit(json_encode(array(error => $errmsg)));
}

function exitWithSUCC($data=array()) {
  $data['error'] = false;
  exit(json_encode($data));
}