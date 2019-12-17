<!DOCTYPE>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>
    <script type="text/javascript" src="../generator/main.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <link rel="stylesheet" type="text/css" href="../css/generator.css">
    <link rel="stylesheet" type="text/css" href="../css/socialbtns.css">

    <title>Генератор v1.0</title>

</head>

<body>
    <div id="overlay"></div>

    <div id="footer">
        <ul id=top_menu>
            <li><a href="../index.html">Главная</a></li>
            <li><a href="catalog.html">Каталог</a></li>

            <li><a href="#">Сделать экскурсию</a></li>

            <li><a href="reg.php">Регистрация</a></li>
        </ul>
    </div>

    <div class="generator">

            <div id="add-block" title="Добавить слайд">
               +
            </div>

            <div class="slideList"></div>
    </div>

</body>

</html>

<script type="text/javascript">
    function overlayOn() {
      document.getElementById("overlay").style.display = "block";
    }

    function overlayOff() {
      document.getElementById("overlay").style.display = "none";
    }
</script>

        <!-- Шаблон блока для клонирования  -->
        <div class="gid-block templateGid" data-number="1" style="display: none">
                
                <p class="slide_number" style="display: inline-block;">Слайд</p>
                <input class="pick_slide" data-slide="" name="edit" type="button" value="Редактировать" name="" style="display: inline-block;">

        </div>


        <!--                         <div class="image-form">
                            <form action="generator/file-handler.php" method="post" enctype="multipart/form-data">
                                <div class="file-wrapper">
                                    <input type="file" name="upload" class="input-file">
                                    <label for="">Выберите файл</label>
                                </div>
                            </form>

                            <ul class="uploadImagesList">
                                <li class="item template">
                                    <span class="img-wrap">
                                    <img src="" alt="" class="preview-image">
                                </span>
                                </li>
                            </ul>
                        </div> -->