$(document).ready(function() {


$img1 = "slide_i/IMG_3218.jpg"; 
$link1 = "";
$desc1 = "Prova 1"; 


// Slide 2
$img2 = "slide_i/IMG_3219.jpg";
$link2 = ""; 
$desc2 = "Lunga descrizione"; 

// Slide 3
$img3 = "slide_i/IMG_3241.jpg";
$link3 = ""; 
$desc3 = "Prova 3<br>Prova Altezza";

// Slide 4
$img4 = "slide_i/IMG_3230.jpg"; 
$link4 = ""; 
$desc4 = "Descrizione 4"; 

// Slide 5
$img5 = "slide_i/IMG_3220.jpg"; 
$link5 = ""; 
$desc5 = "Descrizione 5"; 


array = [$img1 , $link1 , $desc1,$img2,$link2,$desc2,$img3,$link3,$desc3,$img4,$link4,$desc4,$img5,$link5,$desc5];

  function change(nums) {
  $("#main").fadeOut(1000, function() {
  $("#main").html("<img src=\""+array[nums*3-3]+"\" width=\"600px\" height=\"450px\"><div style=\"text-align: center; width: 600px; padding-top: 10px; padding-bottom: 10px; background-image: url(http://nego.altervista.org/images/black_s.png); position: absolute; left: 0; bottom: 0;\"><a style=\"font-weight: bold; font-size: 18px; color: #FFF;\" href=\""+array[nums*3-2]+"\" target=\"_top\">"+array[nums*3-1]+"</a></div>");
  $("#main").delay(500).fadeIn(1000);
  });
  };


  $("#1").html("<img src=\""+$img1+"\" width=\"147px\" height=\"90px\">").click(function() {change(1);});
  $("#2").html("<img src=\""+$img2+"\" width=\"147px\" height=\"90px\">").click(function() {change(2);});
  $("#3").html("<img src=\""+$img3+"\" width=\"147px\" height=\"90px\">").click(function() {change(3);});
  $("#4").html("<img src=\""+$img4+"\" width=\"147px\" height=\"90px\">").click(function() {change(4);});
  $("#5").html("<img src=\""+$img5+"\" width=\"147px\" height=\"90px\">").click(function() {change(5);});


  function loop(loopn) {
    if (loopn == "5") { num = 1; } else { num = loopn+1; }
    change(num);
    setTimeout(function(){
      loop(num);
    },8000);
  }

  $("#main").html("<img src=\""+array[0]+"\" width=\"600px\" height=\"450px\"><div style=\"text-align: center; width: 600px; padding-top: 10px; padding-bottom: 10px; background-image: url(http://nego.altervista.org/images/black_s.png); position: absolute; left: 0; bottom: 0;\"><a style=\"font-weight: bold; font-size: 18px; color: #FFF;\" href=\""+array[1]+"\" target=\"_top\">"+array[2]+"</a></div>");
  setTimeout(function() {loop(1);},8000);

});