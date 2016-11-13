<?php
/* Smarty version 3.1.30, created on 2016-11-13 01:32:25
  from "C:\xampp\htdocs\Connect2016inKoriyama\templates\index.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5827b499e13738_62130365',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '31a48b41880fe7a74703809653a919c1b429c7ae' => 
    array (
      0 => 'C:\\xampp\\htdocs\\Connect2016inKoriyama\\templates\\index.html',
      1 => 1478997143,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5827b499e13738_62130365 (Smarty_Internal_Template $_smarty_tpl) {
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
				<div>
					<span>
						<table id="iconbox">
							<tr><th>
								<td><input type="image" id="routeicon" src="img/icon/icon1.png" title="徒歩で移動"></td>
								<td><input type="image" id="routeicon" src="img/icon/icon2.png" title="車で移動"></td>
							</th></tr>
						</table>
						<!--<span id="search"><i id="searchArea">検索エリア</i><button tyep="button" id="Searchbtn" class="button">検索</button></span>-->
					</span>
				</div>
				<div id="mapField" style="width:750px; height:590px;"></div>
				<table id="icondetail">
					<tbody>
					<tr>
						<th id="iconSet">アイコン区分
							<td id="icons"><img src="img/event/marker0.png"><text id="text0"></text></td>
							<td id="icons"><img src="img/event/marker1.png"><text id="text1"></text></td>
							<td id="icons"><img src="img/event/marker2.png"><text id="text2"></text></td>
							<td id="icons"><img src="img/event/marker3.png"><text id="text3"></text></td>
							<td id="icons"><img src="img/event/marker4.png"><text id="text4"></text></td>
						</th>
					</tr>
					<tr>
						<th class="iconSet">
							<td id="icons"><img src="img/event/marker5.png"><text id="text5"></text></td>
							<td id="icons"><img src="img/event/marker6.png"><text id="text6"></text></td>
							<td id="icons"><img src="img/event/marker7.png"><text id="text7"></text></td>
							<td id="icons"><img src="img/event/marker8.png"><text id="text8"></text></td>
							<td id="icons"><img src="img/event/marker9.png"><text id="text9"></text></td>
							<td id="icons"><img src="img/event/marker10.png"><text id="text10"></text></td>
							<!--<td id="icons"><img src="img/event/marker10.png"><text id="text10"></text></td>-->
						</th>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div id="route" style="width: 750px; height: 200px; overflow: scroll"></div>
		<table id="character"><tr><td id="gaiyou">イベント概要</td></tr><tr><td id="Descrip">アイコンを選択するとイベントの概要が表示されます。</td></tr></table>
		<button type="button" id="regist-btn">イベント登録</button>
		<!--<div id="bottom">
		<table id="character"><tr><td>ここにマスコット</td><td id="Descrip">ここに説明</td></tr></table>

		<div id="buttons">
			<button tyep="button" id="button1" class="button">ボタン</button>
			<button type="button" id="button2" class="button">ボタン</button>
		</div>
	</div>-->
	</div>
</body>

</html><?php }
}
