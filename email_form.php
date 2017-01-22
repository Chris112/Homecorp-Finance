
<?php /*




// The message
$name = $_POST['name'];
$email = $_POST['email'];
$contactNumber = $_POST['contactNumber'];
$message = $_POST['message'];


$query = "Name: " . $name . "\nEmail: " . $email . "\nContact Number: " . $contactNumber . "\nMessage: \n" . $message;

// In case any of our lines are larger than 70 characters, we should use wordwrap()
$query = wordwrap($query, 70, "\r\n");

// Headers
$from = "Homecorp-website";
$headers = "" .
$headers .= "From: Homecorp Website <admin@homecorpfinance.com>\r\n";

// Send
mail('ltmp69@hotmail.com', 'Contact Us Form', $query, $headers);



header('Location: contact-us.html');  


*/
?>





<?php

	if ('POST' === $_SERVER['REQUEST_METHOD'])   {
	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['contactNumber']) || empty($_POST['message'])) {
		echo "Error";
		
	} else {
	
		$to = "ltmp69@hotmail.com";
		$name = trim($_POST['name']);
		$email = trim($_POST['email']);
		$message = trim($_POST['message']);
		
		$subject = "Homecorp Website Contact Form";
		
		$headers = "" .
		$headers .= "From: Homecorp Website <admin@homecorpfinance.com>\r\n";

		$query = "Name: " . $name . "\nEmail: " . $email . "\nContact Number: " . $contactNumber . "\nMessage: \n" . $message;
		$mailsent = mail($to, $subject, $query, $headers);
		
		if($mailsent) {
			echo "Mail sent successfuly";
		} else
        {
            echo "Error sending email";
        }
	}
}
?>