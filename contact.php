<?php

	if(isset($_POST['url']) && $_POST['url'] == ''){ // if the url field is empty they're not a robot

		$sendTo = 'andrew@iacco.us';
	
		$body = "iacco.us web contact form:
		Name:  $_POST[name]
		Contact: $_POST[email]
		Message: $_POST[message]";

		if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
		  $headers = "From: $_POST[email]";
		} else {
		  $headers = "From: $sendTo";
		}
	
		mail($sendTo, 'Iacco.us Contact Form', $body, $headers );

	}

?>
<!DOCTYPE HTML>
<html>
<head>
	<title>Thank you!</title>
	<link href="/stylesheets/style.css" media="screen" rel="stylesheet" type="text/css" />
</head>
<body class="background-texture">
	<div class="container padbox">
		<h1>Thanks</h1>
		<p>We'll get back to you as soon as possible.</p>
		<p><a href="/" class="default-link">&larr; Go back</a></p>
	</div>
</body>
</html>