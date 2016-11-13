<?php
/* Smarty version 3.1.30, created on 2016-11-13 02:45:13
  from "C:\xampp\htdocs\Connect2016inKoriyama\templates\next.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5827c5a9a77a87_77079988',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '43e13448d506511cced8aab2d29790cd4ae661bd' => 
    array (
      0 => 'C:\\xampp\\htdocs\\Connect2016inKoriyama\\templates\\next.html',
      1 => 1479001488,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5827c5a9a77a87_77079988 (Smarty_Internal_Template $_smarty_tpl) {
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
			<div><a href="index.php?flag=false">ホーム</a> &gt; <?php echo $_smarty_tpl->tpl_vars['data']->value[4];?>
</div>
			<div id="title"><?php echo $_smarty_tpl->tpl_vars['data']->value[4];?>
</div>
			<div id="img">
				<blockquote width="250px" height="300px" class="ricoh-theta-spherical-image" >David Cafuta - <a href="https://theta360.com/spheres/samples/2bccbf6a-89ee-11e6-bbb7-064087ff3472-1" target="_blank">Spherical Image - RICOH THETA</a></blockquote>
				<?php echo '<script'; ?>
 async src="https://theta360.com/widgets.js" charset="utf-8"><?php echo '</script'; ?>
>
				<img src="img/photo/003.jpg" width="300px" height="250px">
			</div>
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
