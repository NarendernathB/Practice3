$(function(){
//(function(){
  "use strict";
  /* Start of your code */
  console.log('The script is runng.');

  // Define the elements that we're going to manipulate
  let navigationLinks = document.querySelectorAll('.nav-link'),
      navbarElement = document.querySelector('.navbar'),
      headerElement = document.querySelector('#header'),
      formElement = document.querySelector('form'),
      textElement = document.querySelector('#message'),
      validationMessageElement = document.querySelector('#messageError'),
      navButton = document.querySelector('.navbar-toggler'),
      bodyElement = document.querySelector('body');

  console.log(navigationLinks);

  function changenavbarColor(){
  	headerElement.classList.remover('bg-dark');
		headerElement.classList.add('bg-primary');
	}

/*
  for(let 1=0; i<navigationLinks.length;i++){ 
	  console.log(navigationLinks[i]);

	  navigationLinks[i].onclick=changenavbarColor;
	}
*/

  // Assign the event handler to all the links
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].onclick = function (event) {
      changeNavbarColor(i);
    }
  }

  
  navButton.onclick = function () {
    if (bodyElement.className === "with-menu") {
      bodyElement.className = "";
    } else {
      bodyElement.className = "with-menu";
    }
  };

  // Set the modal image source to the one of the clicked image
  $('.job-col').on('click', function (e) {
    let imageElement = $(e.currentTarget).find('img');
    let imageSource = imageElement.attr('src');
    $('.modal-body img').attr('src', imageSource);
  });

/*// Ajax call
  $.ajax({
  	url:'https://reqres.in/api/unknown',
  	data : '',
  	type : 'GET',
  	dataType : 'json'
  }).done(function (json) {
  	console.log(json);
  	if (json.data !== undefined) {
  		for (let i=0; i<jsone.data.length; i++){
  			let newOption = $('<option>')
  					.attr('value',jsone.data[i].color)
  					.test(json.data[i].name);

  			newOption.appendTo($('#colours'));
  		}
  	}
  });*/

  /* End of your code */
}); //();