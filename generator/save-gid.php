<?php 

	require '../registration/db.php';

	  $data = json_decode($_POST["upload"], true);

	  $gids = R::dispense('gids');
      $gids->name = $data['name'];
      $gids->disc = $data['discription'];
      R::store($gids);


 ?>