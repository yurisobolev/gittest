
 
 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>GIDIT</title>


<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>

<header class="header">


</header>

<body>
 <!--  <div class="img_logo"></div> -->
    <div class="nav">

        <a href="profile/index.html">Личный кабинет</a>
        <a href="generator/index.php">Создать</a>
        <a href="filter/index.html">Каталог</a>
    </div>

   

       

    <!-- Navigation-->

    <div id="hero">
    
    <section>
        <div class="row container">
            <div id="hero-copy" class="col-2 column">
                <p class="intro-text">О проекте</p>
                <h1 class="headline-text-light">Проект GIDIT платформа для создания экскурсий</h1>
                <p class="description-text">Каждый кто хотя бы раз приезжал в Москву или слышал о ней знает о Красной площади, Парке Горького, Большом театре и тп. Если ты недавно приехал в Москву, то в большинсте случаев твои знания о городе ограничиваются выше перечисленным, но я думаю каждый хотел бы иметь возможность бесплатно узнать побольше о столице.
                    <p class="description-text">Даже люди которые сами живут в Москве не всегда знают чем себя развлечь на выходных, а если уж проявляет любопытсво это занимает у него много времени. Если вы также сталкиваетесь с такой проблемой или просто имеете возможность поделиться своими знаниями о столице наш сайт может почомь вам.</p>
                  </p>
                <p class="description-text"> Данный сайт позволяет не только легко и быстро находить интересные места по Москве, но и самому создавать интерактивные онлайн "экскурсии". Под словом "экскурсии" подразумевается формат, в котором человек имеет возможность самому создать небольшое описания какой-либо достопримечательности или локации. Всё осуществляется при помощи интерфейса с различными функциями.
                Заинтересованы?</p>
                <a href="../generator/index.php"  class="button-to_generator">Try now</a>
                
            </div>
            <div id="hero-phone" class="col-2 column">
                <img src="">
            </div>
        </div>
    </section>
    </div>
    <!--Features Section-->
    
    <!--About 1 Section-->
    <section id="about">
        <div class="row container">
            <div id="about-phone" class="col-2 colummn">
                <img src="">
            </div>
            <div id="about-text" class="col-2 column">
                <p class="intro-text">Помощь в использовании</p>
                <h2>Как это работает?</h2>
                <p class="description-text">На самом деле всё довольно просто, человек имеет возможность создавать слайды к которым можно прикреплять фото-видео файлы, давать описание и при желании добавлять музыкальное сопровождение. Стиль, фон, размер почерка фотографий и тд всё можно менять под себя, дайте свободу мыслям. Чем-то это может напоминать "PowerPoint" и подобные приложения.
                Если всё таки возникнут трудности вы можете воспользоваться видеоуроком.</p>
                <a href="#">Как работать на GIDIT</a>
               
            </div>
        </div>
    </section>
    <!--About 2 Section-->
   <!-- <section id="about2">
        <div  class="row container">
            <div id="about2-text" class="col-2 column">
                <p class="intro-text">НАЗВАНИЕ</p>
                <h2>ЙОУУУУ ТЕКСТ ТОП</h2>
                <p class="description-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </p>
            </div>
            <div class="col-2 colummn">
                <img src="">
            </div>
        </div>
    </section> -->
   
    <section id="cta-section" >
        <div  class="row container cta">
            <h2>Также вы можете воспользоваться нашим мобильным приложением.<Sh2>
            <div class="cta-buttons">
                <button class="button-light">about app</button>
                <button class="button-dark">Download Now</button>
            </div>
        </div>
    </section>
    
   
<!-- Contact Us -->
 
      
          </form>
      </div>
      
 </section>
<!--Footer -->
    <footer id="footer-info">
        <div class="row container">
        <div class="footer-icons">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-vk"></i>
        <p class="footer-copyright">copyright © 2019 </p>
        </div>
        </div>
    </footer>
<body>
</html>
<script type="text/javascript">
$(function(){
$(window).scroll(function() {
var top = $(document).scrollTop();
if (top < 100) $(".nav").css({top: '0', position: 'relative',background-color:black});
else $(".nav").css({top: '0', position: 'fixed'});
});
});
</script>