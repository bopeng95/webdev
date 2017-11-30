<!DOCTYPE html>
<html lang="en">
    <head>
		<title>Quiz</title>
    </head>

    <!--BODY STARTS HERE-->
    <body>

    	<h1>Quiz Score</h1>

    	<?php
    		$f = $_GET['first'];
    		$l = $_GET['last'];
    		$q1 = $_GET['one'];
            $q2 = $_GET['two'];
            $q3 = $_GET['three'];

            $t = 0;
            if($q1 == "true") {$t++;}
            if($q2 == "false") {$t++;}
            if($q3 == "true") {$t++;}

            $s = floatval((int)$t/3)*100;
            
            print("
            <p>Hello $f $l</p>
            <p>Here is your result</p>
            <p>answer 1: true, you: $q1</p>
            <p>answer 2: false, you: $q2</p>
            <p>answer 3: true, you: $q3</p>
            <p>Your score is: $s%</p>
            ");
    	?>

    </body>
</html>