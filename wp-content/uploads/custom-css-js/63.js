<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 
var background_urls = ["/wp-content/uploads/2018/02/background4.jpeg",
  					   "/wp-content/uploads/2018/02/background3.jpeg",
                       "/wp-content/uploads/2018/02/background2.jpg",
                       "/wp-content/uploads/2018/02/background1.jpeg",
                       "/wp-content/uploads/2018/02/house.jpeg"
                      ];

var countDownDate = new Date("Sep 5, 2034").getTime();
var starting_picture=0;

var boxes = "";

for(var i = 0; i<background_urls.length; i++){
	boxes = boxes + "<div class='selection-box' id='selection-box" +i +"'> </div>";
}

jQuery(document).ready(function(){
    document.getElementById("selection-boxes-area").innerHTML = boxes;
  	jQuery(".site-content-contain").css('background-image', 'url(' + background_urls[starting_picture] + ')');
    jQuery("#selection-box"+starting_picture).css('background-color', "grey");

});

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = "<div class='time-text'> days </div>" + "<div> "+ days+"</div>";
  document.getElementById("hours").innerHTML = "<div class='time-text'> hours </div>" + "<div> "+ hours+"</div>";
  document.getElementById("minutes").innerHTML = "<div class='time-text'> minutes </div>" + "<div> "+ minutes+"</div>";
  document.getElementById("seconds").innerHTML = "<div class='time-text'> seconds </div>" + "<div> "+ seconds+"</div>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-slot").innerHTML = "EXPIRED";
  }
}, 1000);

var current_count = 0;

var background_change = setInterval(function(){
  	var url_link = "url('"+ background_urls[current_count] + "')";
  	var current_box = "#selection-box"+current_count;
	document.getElementById("site-content-unique").style.backgroundImage = url_link; 
    jQuery(".selection-box").css("background-color", "white");
  	jQuery(current_box).css("background-color", "grey");

	if(current_count == background_urls.length-1){
    	current_count = 0;
    }
  	else{
    	current_count+=1;
    }
}, 3000)</script>
<!-- end Simple Custom CSS and JS -->
