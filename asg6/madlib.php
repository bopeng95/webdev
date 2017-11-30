<!DOCTYPE html>
<html lang="en">
    <head>
		<title>MadLib</title>
    </head>

    <!--BODY STARTS HERE-->
    <body>

    	<h1>MadLib</h1>

    	<?php
    		$adj1 = $_GET['adj1'];
    		$adj2 = $_GET['adj2'];
    		$noun1 = $_GET['noun1'];
    		$verb1 = $_GET['verb1'];
    		$noun2 = $_GET['noun2'];
    		$num1 = $_GET['num1'];
    		$verb2 = $_GET['verb2'];
    		$noun3 = $_GET['noun3'];

    		print("The $adj1 $noun1 $verb1 the $adj2 house. There she saw a $noun2 $verb2 with $num1 $noun3.");
    	?>

    </body>
</html>