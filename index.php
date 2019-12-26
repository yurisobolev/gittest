<!DOCTYPE>
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
      <script src="js/index.js"></script>
      <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
      <link rel="stylesheet" type="text/css" href="css/main.css">
      <link rel="stylesheet" type="text/css" href="css/socialbtns.css">
      <title>moi sait</title>
   </head>
   <body>
    <?php 
        require 'registration/db.php';
    ?>


        <?php if ( isset ($_SESSION['logged_user']) ) : ?>
          
        <?php echo "<p style='color:green'>Привет </p>" . $_SESSION['logged_user']->login; ?>!<br/>

          <a href="registration/logout.php">Выйти</a>

    <?php else : ?>
        <a href="registration/login.php">Авторизация</a>
        <a href="registration/signup.php">Регистрация</a>
    <?php endif; ?>


      <div id="footer">
         <div id="navigate">
            <ul id=top_menu>
               <li><a href="#">Главная</a></li>
               <li><a href="filter/">Каталог</a></li>
               <li><a href="generator/index.php">Создать</a></li>
            </ul>
            <ul class='social'>
               <li>
                  <a class="fa fa-facebook" href="#">    
                  <span>Facebook</span>
                  </a> 
               </li>
               <li>
                  <a class="fa fa-youtube" href="https://youtube.com/">
                  <span>Youtube</span>
                  </a>
               </li>
               <li>
                  <a class="fa fa-vk" href="https://vk.com/">
                  <span>VK</span>
                  </a>
               </li>
               <li>
                  <a class="fa fa-instagram" href="#">    
                  <span>Instagram</span>
                  </a> 
               </li>
            </ul>
         </div>
      </div>
   
      <div class="wrap-discription">
      <div class="gid">
         <p class="start_text">EASYGID</p>
         <button id=start>начать</button>
         <p class="start_text">экскурсии, легко</p>
      </div> 
    </div>
   </body>
</html>
<script type="text/javascript" href="generator/index.html">
   $(".gid").hover(
       function() {
           $('button').show('slow')
       },
       function() {
           $('button').hide('slow')
       }
   );
   $(document).ready(()=>{
         $('#start').click(()=>{
           document.location.href = "C:/Users/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C/gittest/generator/index.html"
         })
       })
</script>