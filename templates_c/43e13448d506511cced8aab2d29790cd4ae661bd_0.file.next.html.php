<?php
/* Smarty version 3.1.30, created on 2016-11-10 14:53:11
  from "C:\xampp\htdocs\Connect2016inKoriyama\templates\next.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58247bc77b0ad8_57580525',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '43e13448d506511cced8aab2d29790cd4ae661bd' => 
    array (
      0 => 'C:\\xampp\\htdocs\\Connect2016inKoriyama\\templates\\next.html',
      1 => 1478785978,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58247bc77b0ad8_57580525 (Smarty_Internal_Template $_smarty_tpl) {
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
		<div id="Content">
			<div id="title"><?php echo $_smarty_tpl->tpl_vars['data']->value[4];?>
<div ida="kana"><?php echo $_smarty_tpl->tpl_vars['data']->value[5];?>
</div></div>
			<div id="img">ここに画像</div>
			<div id="eventdata"><?php echo $_smarty_tpl->tpl_vars['data']->value[8];?>
</div>
			<table id="eventdetail">
				<tr><td>開催地</td><td><?php echo $_smarty_tpl->tpl_vars['data']->value[11];?>
</td><td>郵便番号</td><td><?php echo $_smarty_tpl->tpl_vars['data']->value[10];?>
</td></tr>
				<tr><td>開催日</td><td><?php echo $_smarty_tpl->tpl_vars['data']->value[13];?>
</td><td>電話番号</td><td><?php echo $_smarty_tpl->tpl_vars['data']->value[9];?>
</td></tr>
				<tr><td>開催期間</td><td><?php echo $_smarty_tpl->tpl_vars['data']->value[14];?>
</td></tr>
			</table>
			<div id="location" hidden="hidden" data-lat="<?php echo $_smarty_tpl->tpl_vars['data']->value[6];?>
" data-lon="<?php echo $_smarty_tpl->tpl_vars['data']->value[7];?>
"></div>
		</div>
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

		</ul>-->
		<div id="Map-Body">
			<div id="mapField" style="width:730px; height:600px;"></div>
		</div>
		<div>
			<div>周辺情報</div>
			<div>
				<button class="placeSearch-btn" type="button" data-types="convenience_store">コンビニ</button>
				<button class="placeSearch-btn" type="button" data-types="cafe">カフェ</button>
				<button class="placeSearch-btn" type="button" data-types="bus_station">バス停</button>
			</div>
		</div>
	</body>
</html><?php }
}
