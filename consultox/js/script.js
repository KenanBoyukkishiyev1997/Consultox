$(document).ready(function(){
	$(".silinders .owl-carousel").owlCarousel({
		items:1,
		nav:true,
		mouseDrag:false,
		loop:true
		

	});

	
	$( ".owl-prev").html('<i style="position:absolute;top:50%;left:0px;font-size:25px; background-color:grey;" class="fa fa-chevron-left"></i>');
	$( ".owl-next").html('<i style="position:absolute;top:50%;right:0px;font-size:25px; background-color:grey;" class="fa fa-chevron-right"></i>');


$(".items-slider .owl-carousel").owlCarousel({
		items:4,
		nav:false,
		mouseDrag:true,
		loop:true,
		autoplay:true
		

	});


///goze gorunmeyen navbarin gorsenmesi basligi





$(window).scroll(function(){
	if ($(window).scrollTop()>300) {
		$('.nav-white').css("display","block")
	}else{
		$('.nav-white').css("display"," none")
	}
})


///goze gorunmeyen navbarin gorsenmesi sonu
});



//Acardionun baslangici



let divs = document.querySelectorAll(".top")

for (let div of divs) {
	div.addEventListener("click",function(){
		if (this.parentElement.querySelector(".bottom").style.height == "0px") {
			this.parentElement.querySelector(".bottom").style.height = "80px";
			this.parentElement.querySelector("i").style.height = "20px";
			this.parentElement.querySelector(".bottom").style.display = "block";
			this.parentElement.querySelector("i").classList.add("fa-minus");
			this.parentElement.querySelector("i").style.backgroundColor = "#25baa9";
			this.parentElement.querySelector("i").style.color = "#fff";
			this.parentElement.querySelector("i").classList.remove("fa-plus");
			this.style.backgroundColor = "#fff"
		}else{
			this.parentElement.querySelector(".bottom").style.height = "0px";
			this.parentElement.querySelector("i").classList.remove("fa-minus");
			this.parentElement.querySelector("i").classList.add("fa-plus");
			this.parentElement.querySelector("i").style.color = "#25baa9";
			this.parentElement.querySelector("i").style.backgroundColor = "#fff";
			this.parentElement.querySelector(".bottom").style.display = "none";
			this.style.backgroundColor = "#fff"
		}
	})
}


//Acardionun sonu





//Acardionun baslangici



let Tab = document.querySelectorAll(".tab")

for (let div of Tab) {
	div.addEventListener("click",function(){
		if (this.parentElement.querySelector(".bottom").style.height == "0px") {
			this.parentElement.querySelector(".bottom").style.height = "80px";
			this.parentElement.querySelector("i").style.height = "20px";
			this.parentElement.querySelector(".bottom").style.display = "block";
			this.parentElement.querySelector("i").classList.add("fa-minus");
			
			this.parentElement.querySelector("i").style.color = "#000";
			this.parentElement.querySelector("i").classList.remove("fa-plus");
			this.style.backgroundColor = "#fff"
		}else{
			this.parentElement.querySelector(".bottom").style.height = "0px";
			this.parentElement.querySelector("i").classList.remove("fa-minus");
			this.parentElement.querySelector("i").classList.add("fa-plus");
			this.parentElement.querySelector("i").style.color = "#000";
			this.parentElement.querySelector("i").style.backgroundColor = "#fff";
			this.parentElement.querySelector(".bottom").style.display = "none";
			this.style.backgroundColor = "#fff"
		}
	})
}


//Acardionun sonu





// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    // document.getElementById("count").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
    $(".days").html(days);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("count").innerHTML = "EXPIRED";
    }
}, 1000);