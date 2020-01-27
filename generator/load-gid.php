	
	<?php 

		require '../registration/db.php';

		$id = 5;

		$gid = R::findOne('gids',
        ' id = ? ',array($id));

        echo $gid['name'];

	



	 ?>