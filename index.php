<?php

	require_once './smarty-3.1.30//libs/Smarty.class.php';

	$smarty = new Smarty();
	$smarty->template_dir = 'templates/';
	$smarty->compile_dir  = 'templates_c/';

	$smarty->display('index.html');

?>