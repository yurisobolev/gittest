<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <style>
        body {
            background: linear-gradient(-45deg, #6a6a6a, #545454, #000059, #3f3f3f, #2c2c2c, #191919, #000000);
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
        .box input[type="email"] {
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
    <meta charset="utf-8">
    <title>َ Registration </title>
</head>

<body>

</body>

</html>

<?php 
  require 'db.php';

  $data = $_POST;

  //если кликнули на button
  if ( isset($data['do_signup']) )
  {
    // проверка формы на пустоту полей
    $errors = array();
    if ( trim($data['login']) == '' )
    {
      $errors[] = 'Введите логин';
    }

    if ( trim($data['email']) == '' )
    {
      $errors[] = 'Введите Email';
    }

    if ( $data['password'] == '' )
    {
      $errors[] = 'Введите пароль';
    }

    if ( R::count('users', "login = ?", array($data['login'])) > 0)
    {
      $errors[] = 'Пользователь с таким логином уже существует!';
    }

    if ( R::count('users', "email = ?", array($data['email'])) > 0)
    {
      $errors[] = 'Пользователь с таким Email уже существует!';
    }

    if ( empty($errors) )
    {

      $user = R::dispense('users');
      $user->login = $data['login'];
      $user->email = $data['email'];
      $user->password = password_hash($data['password'], PASSWORD_DEFAULT); //пароль 
      R::store($user);
      echo '<div style="color:dreen;">Вы успешно зарегистрированы!</div><hr>';
    }else
    {
      echo '<div id="errors" style="color:red;">' .array_shift($errors). '</div><hr>';
    }

  }

?>

    <form class="box" action="signup.php" method="POST">

        <input type="text" name="login" value="<?php echo @$data['login']; ?>" placeholder="Логин">

        <input type="email" name="email" value="<?php echo @$data['email']; ?>" placeholder="Email">

        <input type="password" name="password" value="<?php echo @$data['password']; ?>" placeholder="Пароль">

        <input type="submit" name="do_signup" value="Отправить">

    </form>