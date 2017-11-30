<!DOCTYPE html>
<html lang="en">
    <head>
		<title>Online Form</title>
    </head>

    <!--BODY STARTS HERE-->
    <body>

    	<h1>Online Form</h1>

    	<?php
    		$name = $_GET['name'];
    		$email = $_GET['email'];
    		$p1 = $_GET['jasmine'];
            $p2 = $_GET['black'];

            $t = ((int)$p1*5) + ((int)$p2*3);
            
            print("<p>Here is your receipt</p><p>Name: $name</p><p>Email: $email</p><p>Jasmine Tea: $p1 amount</p><p>Black Tea: $p2 amount</p><p>Total: $t</p>");
    	?>

    </body>
</html>