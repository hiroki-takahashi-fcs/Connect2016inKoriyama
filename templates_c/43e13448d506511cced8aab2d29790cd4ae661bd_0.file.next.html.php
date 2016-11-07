<?php
/* Smarty version 3.1.30, created on 2016-11-07 15:59:28
  from "C:\xampp\htdocs\Connect2016inKoriyama\templates\next.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_582096d09a9f96_52920363',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '43e13448d506511cced8aab2d29790cd4ae661bd' => 
    array (
      0 => 'C:\\xampp\\htdocs\\Connect2016inKoriyama\\templates\\next.html',
      1 => 1478530767,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_582096d09a9f96_52920363 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<title>hello</title>
		<?php echo '<script'; ?>
 type="text/javascript" src="./scripts/jquery-3.1.1.min.js"><?php echo '</script'; ?>
>
	</head>
	<body>
		<ul>
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

		</ul>
	</body>
</html><?php }
}
