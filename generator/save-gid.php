<?php 

	require '../registration/db.php';

	  $main = json_decode($_POST["main"], true);
	  $data = $_POST["data"];

	  if ($main['name'] != "" && $main['discription'] != "" && strlen($main['name']) <  30 && strlen($main['discription']) < 120) {
	  	  $gids = R::dispense('gids');
	      $gids->name = $main['name'];
	      $gids->disc = $main['discription'];
	      $gids->user = $_SESSION['logged_user']->login;
	      $gids->gid_data = $data;
	      R::store($gids);
	      die('code: 4');
	  }
	  else{
	  	if ($main['name'] == "") {
	  		die('code: 0');
	  	}
	  	elseif ($main['discription'] == "") {
	  		die('code: 1');
	  	}
	  	elseif (strlen($main['name']) >  30) {
	  		die('code: 2');
	  	}
	  	elseif (strlen($main['discription']) > 120) {
	  		die('code: 3');
	  	}
	  }


 ?>
