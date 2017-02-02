<?php

// reciever
$to = 'gr.a.venom@gmail.com';
$subject = 'Our People';
$error = false;
$errorText = '';

$message = '<h1>' . $_POST["caption"] . '</h1>';

$caption = $_POST['caption'];

if ($_POST["name"] && $_POST["name"] != '') {
    $message .= '<p>Имя клиента: ' . $_POST["name"] . '</p>';
}

if ($_POST["phone"] && $_POST["phone"] != '') {
    $message .= '<p>Телефон клиента: ' . $_POST["phone"] . '</p>';
} else {
    $error = true;
    $errorText .= 'Введите номер телефона';
}

if ($_POST["time"] && $_POST["time"] != '') {
    $message .= '<p>Время звонка: ' . $_POST["time"] . '</p>';
}

if ($_POST["comment"] && $_POST["comment"] != '') {
    $message .= '<p>Комментарий клиента: ' . $_POST["comment"] . '</p>';
}

$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: OurPeople\r\n";
$headers .= "Bcc: ourpeople@mail.ru\r\n";

if ($error) {
    $response = array('done' => false, 'error' => $errorText);
    echo json_encode($response);
} elseif (mail($to, $subject, $message, $headers) && !$error) {
    $response = array('done' => true);
    echo json_encode($response);
} else {
    echo 'php error';
}