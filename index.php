<?php

	require_once './smarty-3.1.30/libs/Smarty.class.php';
	require_once './scripts/ChromePhp.php';

	$smarty = new Smarty();
	$smarty->template_dir = 'templates/';
	$smarty->compile_dir  = 'templates_c/';

	$flag = $_GET["flag"];

	if($flag == "true")
	{
		$file = new SplFileObject('./csv/opendata_after.csv');
		foreach ($file as $line) {
			$line = mb_convert_encoding($line, 'UTF-8', 'sjis-win');
			$data[] = str_getcsv($line);
		}
	}
	else
	{
		$file = new SplFileObject('./csv/opendata_before.csv');
		foreach ($file as $line) {
			$line = mb_convert_encoding($line, 'UTF-8', 'sjis-win');
			$data[] = str_getcsv($line);
		}
	}

	ChromePhp::log($data);


	$smarty->assign('data', $data);

	$smarty->display('index.html');

?>

<script id="script" src="scripts\index.js"
	data-array = '<?php echo json_encode($data, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT); ?>'
></script>
