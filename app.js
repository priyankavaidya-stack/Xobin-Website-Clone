
const contactBtn=document.querySelector(".callbtn");
const mobileBtn=document.querySelector(".sub-contacts");
const navToggleBtn=document.querySelector(".navbar-nav-toggle");
const navbarNav=document.querySelector(".navbar-nav");
const subMenuToggleBtn=document.querySelector(".sub-menu-toggle");
const drop=document.querySelector(".sub-menu");

contactBtn.addEventListener("click", function () {
     if(mobileBtn.classList.contains("open")){
     	mobileBtn.classList.remove("open")
     }
     else{
     	mobileBtn.classList.add("open")
     }
});


navToggleBtn.addEventListener("click", function () {
	if(navbarNav.classList.contains("open")){
        navbarNav.classList.remove("open")
	}
	else{
		navbarNav.classList.add("open")
	}
});


 subMenuToggleBtn.addEventListener("click", function () {
 	if (drop.classList.contains("opened")){
 		drop.classList.remove("opened")
 	}
 	else{
 		drop.classList.add("opened")
 	}
 });


$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 250) {
                    $(".sub-container").css('background-color', '#EDF8FF');
                } else {
                    $(".sub-container").css('background-color', '#F7FCFF');
                }
            });
        }); 