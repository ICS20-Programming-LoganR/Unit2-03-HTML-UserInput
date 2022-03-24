// Created by: Logan Rodriguez
// Created on: Mar 2022
// This file contains the JS functions for index.html

function buttonClicked () {
  //function for finding the users home address for no particular reason

  //get their street number from the text field
  let streetNumber = document.getElementById("street-name").value
	// get their street name from the text field
  let streetName = parseInt(document.getElementById("street-number").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "Haha, I now know that you live at " + streetName  + ", " + streetNumber + ". I will now steal your soap!"
}
