<?php

	require_once './smarty-3.1.30/libs/Smarty.class.php';
	require_once './scripts/ChromePhp.php';

	$smarty = new Smarty();
	$smarty->template_dir = 'templates/';
	$smarty->compile_dir  = 'templates_c/';


	$file = new SplFileObject('./csv/opendata.csv');
	foreach ($file as $line) {
	    $line = mb_convert_encoding($line, 'UTF-8', 'sjis-win');
	    $data[] = str_getcsv($line);
	}


	$index = $_GET["index"];

	//ChromePhp::log($data[$index][4]);

	$smarty->assign('data', $data[$index]);

	$smarty->display('next.html');

?>