<?php
$to_email = "office@studentguide.at";

if ($_POST) {
	header('Access-Control-Allow-Origin: *'); 
	$parameters = "" ;
	foreach ($_REQUEST as $key => $value)  
	{  		
		if(strlen($key) > 3) {
			if ((is_array($value)) or ($value instanceof Traversable)) {
				$parameters = $parameters . $key. " - ";
				foreach ($value as $arrayvalue) {
					$parameters = $parameters . $arrayvalue."     \n";
				}  
			}
			else{

				$parameters = $parameters . $key. " - ".$value."\n";
			}				
		}
	}  
	

	$send_mail = mail_utf8 ( $to_email, 'studentguide.at', $_POST .
		email, 'Kontaktanfrage', $parameters );


}
function mail_utf8($to, $from_user, $from_email, $subject = '(No subject)', $message = '') {
	$from_user = "=?UTF-8?B?" . base64_encode ( $from_user ) . "?=";
	$subject = "=?UTF-8?B?" . base64_encode ( $subject ) . "?=";

	$headers = "From: $from_user <$from_email>\r\n" . "MIME-Version: 1.0" . "\r\n" . "Content-type: text; charset=UTF-8" . "\r\n";

	return mail ( $to, $subject, $message, $headers ); }

?>
