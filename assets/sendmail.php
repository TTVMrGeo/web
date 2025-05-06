<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $to = "cocoplayz555@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $visitor_email\n\nMessage:\n$message";
    $headers = "From: $visitor_email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent.";
    }
}
?>