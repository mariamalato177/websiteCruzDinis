<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $telefone = $_POST['phone'];
    $assunto = $_POST['subject'];
    $mensagem = $_POST['message'];

    $para = "mariamalato2004@gmail.com"; // Altere para seu e-mail real
    $titulo = "Novo contato do formulário";

    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Telefone: $telefone\n";
    $corpo .= "Assunto: $assunto\n";
    $corpo .= "Mensagem:\n$mensagem\n";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($para, $titulo, $corpo, $headers)) {
        echo "success"; // Resposta para o JavaScript
    } else {
        echo "error";
    }
}
?>
