# Connect2016inKoriyama

お知らせ：VisualStudioCode使いやすい　髙橋

2016/11/10 22:55 髙橋　詳細画面に周辺検索を追加、indexとnextでjs分けた

http://connect2016.azurewebsites.net


各ファイルとフォルダについて

Connect2016inKoriyama/

 ├ img/　…　画像ファイルを格納します。 ※まだないけど

 ├ css/　…　CSSファイルを格納します。
 
 ├ csv/　…　CSVファイルを格納します。
 
    ├ opendata.csv　…　今回使用している改変したCSV。
    
    └ opendata.csv.org …　県のHPから落としたオリジナルのCSV。
 
 ├ scripts/　…　js、phpファイルを格納します。
 
    ├　ChromePhp.php　…　ChromeLoggerでログを出力するPHPファイル。いじらない。
    
    ├ jquery-3.1.1.min.js　…　jQueryです。いじらない。
 
    ├ index.js　…　最初の画面のJavaScriptはここに書く。
    
    └ next.js　…　詳細画面ののJavaScriptはここに書く。
 
 ├ smarty-3.1.30/　…　smartyです。ここはいじらない。
 
 ├ templates/　…　ここにhtmlを格納します。
 
    ├ index.html　…　最初の画面のHTML。
    
    └ next.html　…　詳細画面のHTML。
 
 ├ templates_c/　…　コンパイルされたがテンプレートが。置かれる。ここはいじらない。
 
 ├ index.php　…　最初の画面を表示するPHPファイル。
 
 └ next.php　…　詳細画面を表示するPHPファイル。
