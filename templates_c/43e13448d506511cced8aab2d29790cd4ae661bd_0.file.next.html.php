<?php
<<<<<<< HEAD
/* Smarty version 3.1.30, created on 2016-11-12 14:03:49
=======
/* Smarty version 3.1.30, created on 2016-11-12 14:10:22
>>>>>>> 524b35b3ce2989fa2d65caf27515493a579f68d6
  from "C:\xampp\htdocs\Connect2016inKoriyama\templates\next.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
<<<<<<< HEAD
  'unifunc' => 'content_582713351c7365_70088009',
=======
  'unifunc' => 'content_582714be734486_70309330',
>>>>>>> 524b35b3ce2989fa2d65caf27515493a579f68d6
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '43e13448d506511cced8aab2d29790cd4ae661bd' => 
    array (
      0 => 'C:\\xampp\\htdocs\\Connect2016inKoriyama\\templates\\next.html',
<<<<<<< HEAD
      1 => 1478955827,
=======
      1 => 1478956172,
>>>>>>> 524b35b3ce2989fa2d65caf27515493a579f68d6
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
<<<<<<< HEAD
function content_582713351c7365_70088009 (Smarty_Internal_Template $_smarty_tpl) {
=======
function content_582714be734486_70309330 (Smarty_Internal_Template $_smarty_tpl) {
>>>>>>> 524b35b3ce2989fa2d65caf27515493a579f68d6
?>
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<title>イベント詳細画面</title>
		<?php echo '<script'; ?>
 type="text/javascript" src="./scripts/jquery-3.1.1.min.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDS5ci0gvRtGTuR54rtdo7fJ0HtP6lYWJM"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="./scripts/next.js"><?php echo '</script'; ?>
>
		<link rel="stylesheet" href="css\detail.css" type="text/css" media="screen">
	</head>
	<body>
		<br><br>
		<div id="Content">
			<div id="title"><?php echo $_smarty_tpl->tpl_vars['data']->value[4];?>
</div>
			<!--<div id="buttons">
				<button tyep="button" id="button1" class="button">ボタン</button>
				<button type="button" id="button2" class="button">ボタン</button>
			</div>-->
			<div id="img">ここに画像</div>
			<div id="eventdata"><?php echo $_smarty_tpl->tpl_vars['data']->value[8];?>
</div>
			<table id="evedetail">
				<tr><td id="head">開催地</td><td><?php echo $_smarty_tpl->tpl_vars['data']->value[11];?>
</td><td id="head">郵便番号</td><td><?php echo $_smarty_tpl->tpl_vars['data']->value[10];?>
</td></tr>
				<tr><td id="head">開催日</td><td><?php echo $_smarty_tpl->tpl_vars['data']->value[13];?>
</td><td id="head">電話番号</td><td><?php echo $_smarty_tpl->tpl_vars['data']->value[9];?>
</td></tr>
				<tr><td id="head">開催期間</td><td><?php echo $_smarty_tpl->tpl_vars['data']->value[14];?>
</td></tr>
			</table>
			<div id="location" hidden="hidden" data-lat="<?php echo $_smarty_tpl->tpl_vars['data']->value[6];?>
" data-lon="<?php echo $_smarty_tpl->tpl_vars['data']->value[7];?>
"></div>
			<div id="Map-Body">
				<div id="mapField" style="height:410px;"></div>
			</div>
			<div id="areadata">周辺情報
				<button class="placeSearch-btn" type="button" data-types="atm">ATM</button>
				<button class="placeSearch-btn" type="button" data-types="bar">居酒屋</button>
				<button class="placeSearch-btn" type="button" data-types="cafe">カフェ</button>
				<button class="placeSearch-btn" type="button" data-types="car_rental">レンタカー</button>
				<button class="placeSearch-btn" type="button" data-types="convenience_store">コンビニ</button>
				<button class="placeSearch-btn" type="button" data-types="gas_station">ガソリンスタンド</button>
				<button class="placeSearch-btn" type="button" data-types="hospital">病院</button>
				<button class="placeSearch-btn" type="button" data-types="parking">駐車場</button>
				<button class="placeSearch-btn" type="button" data-types="restaurant">レストラン</button>
				<button class="placeSearch-btn" type="button" data-types="spa">温泉</button>
				<button class="placeSearch-btn" type="button" data-types="taxi_stand">タクシー乗り場</button>
				<button class="placeSearch-btn" type="button" data-types="train_station">駅</button>
			</div>
		</div>
	</body>
</html>

		<!--<ul> csvの中身を順に出力している
			<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['data']->value, 'd');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['d']->value) {
?>
				<li><?php echo $_smarty_tpl->tpl_vars['d']->value;?>
</li>
			<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

		</ul>--><?php }
}
