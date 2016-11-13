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

	// リストに表示するデータを並び替える
	$temp = [];
	for ($i = 0; $i < count($data); $i++)
	{
		$temp[$i] = $data[$i][1];
	}
	$unique = array_unique($temp);
	$alignedUnique = array_values($unique);

	$result = [];

	foreach($alignedUnique as $u)
	{
		foreach($data as $d)
		{
			if (strval($d[1]) == strval($u))

			array_push($result, $d);
		}
		
	}

	$data = $result;

	ChromePhp::log($data);

	$smarty->assign('district', $alignedUnique);
	$smarty->assign('data', $data);

	// 放射線量
	$file_h = new SplFileObject('./csv/all.csv');
	foreach ($file_h as $line) {
	    $line = mb_convert_encoding($line, 'UTF-8', 'sjis-win');
	    $data_h[] = str_getcsv($line);
	}

	$smarty->assign('data_h', $data_h);

	$smarty->display('index.html');

?>

<script id="script" src="scripts\index.js"
	data-array = '<?php echo json_encode($data, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT); ?>'
></script>

<script id="script2" src="scripts\index.js"
	data_h-array = '<?php echo json_encode($data_h, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT); ?>'
></script>
