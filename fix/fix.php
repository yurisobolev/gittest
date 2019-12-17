<!DOCTYPE>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <link rel="stylesheet" type="text/css" href="fix.css">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
    <script src="js/index.js"></script>
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
   
    <link rel="stylesheet" type="text/css" href="css/socialbtns.css">
    <title>moi sait</title>
</head>

<body>
<?php 
        require 'registration/db.php';
    ?>

        <?php if ( isset ($_SESSION['logged_user']) ) : ?>

            <?php echo "<p style='color:green'>Привет </p>" . $_SESSION['logged_user']->login; ?>!
                <br/>

                <a href="registration/logout.php">Выйти</a>

                <?php else : ?>
                    <a href="registration/login.php">Авторизация</a>
                    <a href="registration/signup.php">Регистрация</a>
                    <?php endif; ?>

	
<div class="menu">
  <div class="slider">
    <ul>
      <li class="category active"><a href="#home">HOME</a></li>
      <li class="category"><a href="#search">SEARCH</a></li>
      <li class="category"><a href="#about">ABOUT US</a></li>
      <li class="category"><a href="#contact">CONTACT US</a></li>
    </ul>
    
  </div>
</div>
<div id="home" class="container red">
  <h1>Home</h1>
</div>
<div id="search" class="container blue">
  <h1>Search</h1>
</div>
<div id="about" class="container green">
  <h1>About Us</h1>
</div>
<div id="contact" class="container orange">
  <h1>Contact Us</h1>
</div>
</body>
</html>
<script type="text/javascript">// Slider functionality
  
    // slide knob to position function
    (function( $ ){
     $.fn.slideToPos = function() {
       var left = $(this).position().left + ($(this).width() / 2) - ($(".menu a.knob").width() / 2) - 2;
       $(".menu a.knob").css("left", left);
       var before = $(this).parent().parent().parent().children(".bar").first().children(".before").first();
       before.css("width", left + 20).css("backgroundColor", $($(this).attr("href")).css("backgroundColor"));
       return this;
     };
  })( jQuery );
      
    $(".menu ul li.active a").slideToPos();    
$(".menu ul li a").click(function(e) {
  e.preventDefault();
  $(this).slideToPos();
  $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 400);
});
// Scroll Spy
$(window).scroll(function() {
  var top = $(window).scrollTop() + 100; // Take into account height of fixed menu
  $(".container").each(function() {
    var c_top = $(this).offset().top;
    var c_bot = c_top + $(this).height();
    var hash = $(this).attr("id");
    var li_tag = $('a[href$="' + hash + '"]').parent();
    if ((top > c_top) && (top < c_bot)) {
      
      if (li_tag.hasClass("active")) {
        return false;
      }
      else {
        li_tag.siblings().andSelf().removeClass("active");
        li_tag.addClass("active");
        $(".menu ul li.active a").slideToPos(); 
        }
    }
  });
});</script>