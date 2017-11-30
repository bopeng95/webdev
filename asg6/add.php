<!DOCTYPE html>
<html lang="en">
    <head>
		<title>Calculator</title>
    </head>

    <!--BODY STARTS HERE-->
    <body>

    	<h1>Calculator</h1>

    	<?php
    		$f = $_GET['firstnum'];
    		$s = $_GET['secondnum'];
    		$o = $_GET['opt'];
            
            if($o == '+') {
                $x = (int)$f+(int)$s;
    	        print("$f $o $s = $x");
            }
            else if($o == '-') {
                $x = (int)$f-(int)$s;
                print("$f $o $s = $x");
            }
            else if($o == '/') {
                $x = floatval((int)$f/(int)$s);
                print("$f $o $s = $x");
            }
            else {
                $x = (int)$f*(int)$s;
                print("$f $o $s = $x");
            }
    	?>

    </body>
</html>