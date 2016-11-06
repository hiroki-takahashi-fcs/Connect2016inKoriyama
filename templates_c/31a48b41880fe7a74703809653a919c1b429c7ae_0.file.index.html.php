<?php
/* Smarty version 3.1.30, created on 2016-11-06 13:11:47
  from "C:\xampp\htdocs\Connect2016inKoriyama\templates\index.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_581f1e03ef1a83_50253992',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '31a48b41880fe7a74703809653a919c1b429c7ae' => 
    array (
      0 => 'C:\\xampp\\htdocs\\Connect2016inKoriyama\\templates\\index.html',
      1 => 1478434305,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_581f1e03ef1a83_50253992 (Smarty_Internal_Template $_smarty_tpl) {
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
	</head>
	<body>
		<div id="mapField" style="width:500px; height:500px;"></div>
	</body>
</html><?php }
}
