    <?php 
            require '../registration/db.php';
            R::setup(  'mysql:host=127.0.0.1;dbname=akowidget','root', '');
            if ( !R::testConnection() )
            {
                exit('Нет подключения к базе данных');
            }
    ?>
    


    <?php if ( isset ($_SESSION['logged_user']) ) : ?>

        <a href="/registration/logout.php">Выйти</a>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.es5.min.js"></script>
    <script src="libs/owlcarousel/dist/owl.carousel.min.js"></script>
    <script type="text/javascript" src="../generator/main.js"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/monolith.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/nano.min.css"/> 

    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="libs/owlcarousel/dist/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="libs/owlcarousel/dist/assets/owl.theme.default.min.css">

    <link rel="stylesheet" type="text/css" href="../css/generator.css">
    <link rel="stylesheet" type="text/css" href="../css/loader.css">
    <link rel="stylesheet" type="text/css" href="../css/socialbtns.css">

    <title>Генератор v1.0</title>

</head>

<body>

<div class="loader-overlay">
    <div class="loading-container">
        <div class="loading"></div>
        <div id="loading-text">loading</div>
    </div>
</div>


    <div id="overlay"></div>

    <div class="generator">

            <div id="add-block" title="Добавить слайд">
               +
            </div>

            <div class="slideList"></div>
            <div class="editPlace"></div>
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
                            <form action="file-handler.php" method="post" enctype="multipart/form-data">
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

<?php else : ?>
    Вы не авторизованы<br/>
    <a href="/registration/login.php">Авторизация</a>
    <a href="/registration/signup.php">Регистрация</a>
<?php endif; ?>