if (screen.width>=800){
	
	var hamb=document.querySelector(".hamburger");
	hamb.style.display="none";
}else{
	var hamb=document.querySelector(".hamburger");
	hamb.style.display="block";
	var ham=document.querySelector(".nav");
	ham.classList.remove("nav")
	ham.classList.add("hamtonav");
}

function toggle(t){

	t.childNodes[0].classList.toggle("fa-times")
	
	var ham=document.querySelector("#ham");
	ham.classList.toggle("nav")
	
   }


