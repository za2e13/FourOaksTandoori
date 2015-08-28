<!-- <html>
	<head>
		
		
	</head>
		<title>Home Page</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
	
	<body>
		
		<h1>Thank you for visiting Four Oaks Tandoori's website</h1>
		
		<p>This website is in under construction, we will let you know when it's become a live. For that please subscribe below.</p>
		
		<h2>Thank you</h2>
		
		
		
		
		<form class="text" action="MAILTO:zia.ahmed@me.com" method="post" enctype="text/plain">
			
			<input class="text" type="text" placeholder="Your full name"></input>
			<br/><br/>
			<input class="text" type="text" placeholder="Your email address"></input>
			<br/><br/>
			
			<input type="submit" value="Send">
			<!-- <button class="text, right" type="submit">Subscribe</button>
		</form>
	</body>
</html>


-->


<?php

if($_POST["submit"]) {
    $recipient="zmdanwar_1987@yahoo.com";
    $subject="Online Subscriber";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
   // $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?><!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <title>Contact form to email</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>

    <?=$thankYou ?>
	
	<h1>Thank you for visiting Four Oaks Tandoori's website</h1>
		
		<p>This website is in under construction, we will let you know when it's become a live. For that please subscribe below.</p>
		
		<h2>Thank you</h2>

    <form method="post" class="text" action="index.php">
        <label class="text">Name:</label>
        <input class="text" name="sender">
<br/><br/>
        <label class="text">Email:</label>
        <input class="text" name="senderEmail">
<!--
        <label>Message:</label>
        <textarea rows="5" cols="20" name="message"></textarea>
--><br/><br/>
        <input class="text, right" type="submit" name="submit">
    </form>

</body>

</html>