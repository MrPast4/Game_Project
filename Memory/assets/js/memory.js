var obj_easy = [
    {
    name: "Norway",
    image: "https://wiki.hattrick.org/w/images/4/4d/Flag_of_Norge.PNG"
    }, {
    name: "Scotland",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Flag_of_Scotland_%28navy_blue%29.svg/2000px-Flag_of_Scotland_%28navy_blue%29.svg.png"
    }, {
    name: "Italy",
    image: "http://www.umu.se/digitalAssets/13/13177_flag_of_italy.jpg"
    }, {
    name: "USA",
    image: "http://www.firstnetsource.com/american_flag_graphic/high_quality_image/color/USA-Flag-Large.gif"
    }, {
    name: "Russia",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"
    }, {
    name: "China",
    image: "http://1.bp.blogspot.com/-UzuUsSjP9bQ/Ta5ERQOoOAI/AAAAAAAAAAQ/_653LZlNx0k/s1600/Flag_of_China.png"
    }, {
    name: "Canada",
    image: "http://www.freelarge-images.com/wp-content/uploads/2014/11/Canada_flag-5.png"
    }, {
    name: "Japan",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Japan_flag_-_variant.png"
    }, {
    name: "France",
    image: "http://ruleoflaw.eu/wp-content/uploads/2014/07/Flag_France.jpg"
    }
];


var n = document.getElementById("n");

var x = 0;

$(".square").on("click",function () {
  if($(this).hasClass("col")){
      $(this).toggleClass("col toggl", 750);  // toggleClass("ersetze durch")
    }  else {
      $(this).toggleClass("toggl col", 750);  // toggleClass("ersetze durch")

    }

});
