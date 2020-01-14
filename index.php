
 
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
        <a href="#">Главная</a>
        <a href="#">Создать</a>
        <a href="#">Каталог</a>
    </div>

    <!--Hero & Navigation-->
    <div id="hero">
    
    <section>
        <div class="row container">
            <div id="hero-copy" class="col-2 column">
                <p class="intro-text">О проекте</p>
                <h1 class="headline-text-light">Проект GIDIT платформа для создания экскурсий</h1>
                <p class="description-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                <button class="button-to_generator">Try now</button>
                
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
                <p class="intro-text">НАЗВАНИЕ</p>
                <h2>ЙОУУУУ ТЕКСТ ТОП</h2>
                <p class="description-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </p>
               
            </div>
        </div>
    </section>
    <!--About 2 Section-->
    <section id="about2">
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
    </section>
    <!-- Testimonials -->
    
    <!--CTA Section -->
    <section id="cta-section" >
        <div  class="row container cta">
            <h2>ЙОУ ТЕКСТ ЙОУУУУУУУУУ ( скачать приложение )</h2>
            <div class="cta-buttons">
                <button class="button-light">about app</button>
                <button class="button-dark">Download Now</button>
            </div>
        </div>
    </section>
    <!--Pricing & Plans -->
    <section id="pricing">
        <div class ="row container"> 
            <p class="intro-text">НАЗВАНИЕ</p>
            <h2>Pricing & Plans</h2>
        
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
if (top < 100) $(".nav").css({top: '0', position: 'relative'});
else $(".nav").css({top: '0', position: 'fixed'});
});
});
</script>