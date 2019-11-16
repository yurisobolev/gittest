<?php

require_once 'phar://yandex-php-library_master.phar/vendor/autoload.php';


use Yandex\Disk\DiskClient
//
$diskClient = new DiskClient('AgAAAAAMoyBoAAX6AugoGkgmiUarq08nhtrIK2s');
$diskClient->setServiceScheme(DiskClient::HTTPS_SCHEME);


//Получаем свободное и занятое место
$diskSpace = $diskClient->diskSpaceInfo();?>
Всего места: <?=$diskSpace['availableBytes']?> байт.
<br />
Использовано: <?=$diskSpace['usedBytes']?> байт.
<br />
Свободно: <?=round(($diskSpace['availableBytes'] - $diskSpace['usedBytes']) / 1024 / 1024 / 1024, 2)?> ГБ 
из <?=round($diskSpace['availableBytes'] / 1024 / 1024 / 1024, 2)?> ГБ.


?>