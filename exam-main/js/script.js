$(function () {
	"use strict";
  
	// menu part start

	const openNavMenu = document.querySelector(".open-nav-menu"),
	closeNavMenu = document.querySelector(".close-nav-menu"),
	navMenu = document.querySelector(".nav-menu"),
	menuOverlay = document.querySelector(".menu-overlay"),
	mediaSize = 991;
  
	openNavMenu.addEventListener("click", toggleNav);
	closeNavMenu.addEventListener("click", toggleNav);
	// close the navMenu by clicking outside
	menuOverlay.addEventListener("click", toggleNav);
  
	function toggleNav() {
		navMenu.classList.toggle("open");
		menuOverlay.classList.toggle("active");
		document.body.classList.toggle("hidden-scrolling");
	}
  
	navMenu.addEventListener("click", (event) =>{
		if(event.target.hasAttribute("data-toggle") && 
			window.innerWidth <= mediaSize){
			// prevent default anchor click behavior
			event.preventDefault();
			const menuItemHasChildren = event.target.parentElement;
		  // if menuItemHasChildren is already expanded, collapse it
		  if(menuItemHasChildren.classList.contains("active")){
			  collapseSubMenu();
		  }
		  else{
			// collapse existing expanded menuItemHasChildren
			if(navMenu.querySelector(".menu-item-has-children.active")){
			  collapseSubMenu();
			}
			// expand new menuItemHasChildren
			menuItemHasChildren.classList.add("active");
			const subMenu = menuItemHasChildren.querySelector(".sub-menu");
			subMenu.style.maxHeight = subMenu.scrollHeight + "px";
		  }
		}
	});
	function collapseSubMenu(){
		navMenu.querySelector(".menu-item-has-children.active .sub-menu")
		.removeAttribute("style");
		navMenu.querySelector(".menu-item-has-children.active")
		.classList.remove("active");
	}
	function resizeFix(){
		 // if navMenu is open ,close it
		 if(navMenu.classList.contains("open")){
			 toggleNav();
		 }
		 // if menuItemHasChildren is expanded , collapse it
		 if(navMenu.querySelector(".menu-item-has-children.active")){
			  collapseSubMenu();
	   }
	}
  
	window.addEventListener("resize", function(){
	   if(this.innerWidth > mediaSize){
		   resizeFix();
	   }
	});

	// menu part End

	  // search bar js
	  var search_bar = $('.search-bar');
	  var close = $('.close');
	  var search_box = $('.search_box');
	  search_bar.on("click", function () {
		  $(".search_box").slideDown(1000)
	  })
  
	  close.on("click", function () {
		  search_box.slideUp(1000)
	  })
  
	// Nav cart 
	  var cart_item = $('.nav-cart-item');
	  $(".nav-cart > i, .nav-cart > span").on("click", function () {
		  cart_item.slideToggle(600)
	  })

	//   Logo Slider Part

		$('.logo-slider').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows:false,
			speed: 300,
			autoplay:true,
	  	});

    


});    
