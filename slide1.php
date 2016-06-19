<html>
<head>

<link rel="stylesheet" href="http://nego.altervista.org/generale.css">
<title>SlideShow</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script type="text/javascript" src="slide.js" ></script>

</head>
<body style="background-color: #f4f4f4;"  leftmargin="0" topmargin="0" rightmargin="0" bottommargin="0">


<div style="position: absolute; z-index: 200px; left: 50%; top: 50%; width: 748px; height: 450px; margin-left: -374px; margin-top: -225px; border: 2px solid #eaeaea; background-color: #FFFFFF;">

<table cellpadding="0" cellspacing="0" style="width: 100%; height: 100%;">
<tr><td rowspan="5" style="height: 450px; width: 600px; position: relative;">
<div id="main"></div>
</td>
<? 
for ($i=1; $i<=5; $i++) {
  if ($i != 1) echo "<tr>";
  echo "<td style=\"border-left: 1px solid #eaeaea; width: 147px; height: 90px;\" id=\"$i\"></td></tr>";
}
?>
</table>
</div>


<div style="position: absolute; z-index: 200px; right: 10px; bottom: 10px; width: auto; height: auto; padding: 5px; color: #444; font-size: 11px;"><a href="http://nego.altervista.org/UP/slideshow.rar">Downalod</a>
</div>

<div style="position: absolute; z-index: 200px; left: 10px; bottom: 10px; width: auto; height: auto; padding: 5px; color: #444; font-size: 11px;"><a href="http://nego.altervista.org/" target="top">#NegoExpo</a>
</div>

</body>
</html>