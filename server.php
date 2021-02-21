<?php
    // $_POST = json_decode(file_get_contents("php://input"), true);
    // echo var_dump($_POST);

    $token = "1694430248:AAFrxwCz4UJVMs7rvS_4YjwCZOvd3sbif8I";

    $chat_id = "-585652100";

    if ($_POST['act'] == 'order') {

        $name = ($_POST['name']);
        $phone = ($_POST['phone']);
        $tarif = ($_POST['tarif']);

        $arr = array(
            'Имя:' => $name,
            'Телефон:' => $phone,
            'Тариф' => $tarif
        );

        foreach($arr as $key => $value) {
            $txt .= "<b>".$key."</b> ".$value."%0A";
        };
        
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

        if ($sendToTelegram) {
            header('Location: index.html');
        }
    }