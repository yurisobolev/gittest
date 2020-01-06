<<<<<<< HEAD

		

=======
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>َ Login </title>
    <link rel="stylesheet" href="sty.css">
</head>

<body>

    <form action="login.php" method="POST" class="box">
        <h1>Login</h1>
        <input type="text" name="login" value="<?php echo @$data['login']; ?>" placeholder="Username">
        <input type="password" name="password" value="<?php echo @$data['password']; ?>" placeholder="Password">
        <input type="submit" name="do_login" value="Login">
    </form>

</body>

</html>
>>>>>>> 0ebac0b532cec60553bb360e1664c16529ba38ac

<?php 
  require 'db.php';

  $data = $_POST;
  if ( isset($data['do_login']) )
  {
    $user = R::findOne('users', 'login = ?', array($data['login']));
    if ( $user )
    {
      //логин существует
      if ( password_verify($data['password'], $user->password) )
      {
        //если пароль совпадает, то нужно авторизовать пользователя
        $_SESSION['logged_user'] = $user;
        echo '<div style="color:green;">Вы авторизованы!<br/> Можете перейти на <a href="/">главную</a> страницу.</div><hr>';
      }else
      {
        $errors[] = 'Неверно введен пароль!';
      }

    }else
    {
      $errors[] = 'Пользователь с таким логином не найден!';
    }

    if ( ! empty($errors) )
    {
      //выводим ошибки авторизации
      echo '<div id="errors" style="color:red;">' .array_shift($errors). '</div><hr>';
    }

  }

?>

<style>
        html {
            background: linear-gradient(-45deg, #6a6a6a, #545454, #000059, #3f3f3f, #2c2c2c, #191919, #000000);
            background-size: 400% 400%;
            -webkit-animation: Gradient 20s ease infinite;
            -moz-animation: Gradient 20s ease infinite;
            animation: Gradient 20s ease infinite;
        }
        
        @-webkit-keyframes Gradient {
            0% {
                background-position: 0% 50%
            }
            50% {
                background-position: 100% 50%
            }
            100% {
                background-position: 0% 50%
            }
        }
        
        @-moz-keyframes Gradient {
            0% {
                background-position: 0% 50%
            }
            50% {
                background-position: 100% 50%
            }
            100% {
                background-position: 0% 50%
            }
            @keyframes Gradient {
                0% {
                    background-position: 0% 50%
                }
                50% {
                    background-position: 100% 50%
                }
                100% {
                    background-position: 0% 50%
                }
            }
        }
        
        .box {
            width: 300px;
            padding: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #191919;
            text-align: center;
        }
        
        .box h1 {
            color: white;
            text-transform: uppercase;
            font-weight: 500;
        }
        
        .box input[type="text"],
        .box input[type="password"] {
            border: 0;
            background: none;
            display: block;
            margin: 20px auto;
            text-align: center;
            border: 2px solid #3498db;
            padding: 14px 10px;
            width: 200px;
            outline: none;
            color: white;
            border-radius: 24px;
            transition: 0.25s;
        }
        
        .box input[type="text"]:focus,
        .box input[type="password"]:focus {
            width: 280px;
            border-color: #2ecc71;
        }
        
        .box input[type="submit"] {
            border: 0;
            background: none;
            display: block;
            margin: 20px auto;
            text-align: center;
            border: 2px solid #2ecc71;
            padding: 14px 40px;
            outline: none;
            color: white;
            border-radius: 24px;
            transition: 0.25s;
            cursor: pointer;
        }
        
        .box input[type="submit"]:hover {
            background: #2ecc71;
        }
    </style>