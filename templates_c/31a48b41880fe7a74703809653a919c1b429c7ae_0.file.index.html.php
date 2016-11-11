<?php
/* Smarty version 3.1.30, created on 2016-11-11 07:00:13
  from "C:\xampp\htdocs\Connect2016inKoriyama\templates\index.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58255e6d1382b1_44192042',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '31a48b41880fe7a74703809653a919c1b429c7ae' => 
    array (
      0 => 'C:\\xampp\\htdocs\\Connect2016inKoriyama\\templates\\index.html',
      1 => 1478844011,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58255e6d1382b1_44192042 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>hello</title>
	<?php echo '<script'; ?>
 type="text/javascript" src="./scripts/jquery-3.1.1.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="https://maps.googleapis.com/maps/api/js?&key=AIzaSyDS5ci0gvRtGTuR54rtdo7fJ0HtP6lYWJM"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="./scripts/index.js"><?php echo '</script'; ?>
>
	<link rel="stylesheet" href="css\base.css" type="text/css" media="screen">
</head>
<body>
	<br><br>
	<div id="Content">
		<div id="In-Map">
			<div id="Map-List">
				<ul>
					<?php
$_smarty_tpl->tpl_vars['i'] = new Smarty_Variable(null, $_smarty_tpl->isRenderingCache);$_smarty_tpl->tpl_vars['i']->step = 1;$_smarty_tpl->tpl_vars['i']->total = (int) ceil(($_smarty_tpl->tpl_vars['i']->step > 0 ? count($_smarty_tpl->tpl_vars['data']->value)-1+1 - (0) : 0-(count($_smarty_tpl->tpl_vars['data']->value)-1)+1)/abs($_smarty_tpl->tpl_vars['i']->step));
if ($_smarty_tpl->tpl_vars['i']->total > 0) {
for ($_smarty_tpl->tpl_vars['i']->value = 0, $_smarty_tpl->tpl_vars['i']->iteration = 1;$_smarty_tpl->tpl_vars['i']->iteration <= $_smarty_tpl->tpl_vars['i']->total;$_smarty_tpl->tpl_vars['i']->value += $_smarty_tpl->tpl_vars['i']->step, $_smarty_tpl->tpl_vars['i']->iteration++) {
$_smarty_tpl->tpl_vars['i']->first = $_smarty_tpl->tpl_vars['i']->iteration == 1;$_smarty_tpl->tpl_vars['i']->last = $_smarty_tpl->tpl_vars['i']->iteration == $_smarty_tpl->tpl_vars['i']->total;?>
						<li>
<!--							<a href="next.php?index=<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['data']->value[$_smarty_tpl->tpl_vars['i']->value][4];?>
</a> -->
							<a href="#map" onclick="fopenMarker(<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
);"><?php echo $_smarty_tpl->tpl_vars['data']->value[$_smarty_tpl->tpl_vars['i']->value][4];?>
</a>
						</li>
					<?php }
}
?>

				</ul>
			</div>
			<div id="Map-Body">
				<div id="mapField" style="width:750px; height:600px;"></div>
			</div>
		</div>
		<div id="route" style="width: 750px; height: 200px; overflow: scroll"></div>
			<div id="bottom">
		<table id="character"><tr><td>ここにマスコット</td><td id="Descrip">ここに説明</td></tr></table>

		<div id="buttons">
			<button tyep="button" id="button1" class="button">ボタン</button>
			<button type="button" id="button2" class="button">ボタン</button>
		</div>
	</div>
	</div>
</body>

</html><?php }
}
