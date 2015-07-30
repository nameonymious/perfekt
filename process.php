<?php
	header('Access-Control-Allow-Origin: *');
	$parameters = "";
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
	$req_dump = print_r( $_REQUEST, true );
	$fp = file_put_contents( 'request.log', $parameters, FILE_APPEND );

    $to = "stefan@nathaniel.at";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
	$headers =  "From: $from" . "Content-Type: text/html; charset=UTF-8";
		$mail_header = 'From:' . $from . "n";
		$mail_header .= 'Content-type: text/plain; charset=UTF-8' . "rn";
    $subject = "You have a message sent from your site";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"phone"} = "phone";
    $fields{"message"} = "message";

    $body = "ПЕРФЕКТ центр развития:\n\n" . $parameters; //foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail_utf8($to, $from,'zentrumperfekt.at', 'Nachricht von zentrumperfekt.at', $body	);

function mail_utf8($to, $from_user, $from_email, $subject = '(No subject)', $message = '') {
	$from_user = "=?UTF-8?B?" . base64_encode ( $from_user ) . "?=";
	$subject = "=?UTF-8?B?" . base64_encode ( $subject ) . "?=";

	$headers = "From: $from_user <$from_email>\r\n" . "MIME-Version:
1.0" . "\r\n" . "Content-type: text; charset=UTF-8" . "\r\n";

	return mail ( $to, $subject, $message, $headers ); }

?>