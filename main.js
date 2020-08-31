"use strict";

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

let students = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const onClickEvents = () => {
    document.querySelector("#start-btn").addEventListener("click", makeForm);
    document.querySelector("#start-btn").addEventListener("click", sortingEvents);
};

const sortingEvents = () => {
    document.querySelector("#sortButton").addEventListener("click", studentName);
    document.querySelector("#sortButton").addEventListener("click", buildCards);
    document.querySelector("#studentCards").addEventListener("click", expel);
};

const expel = (e) => {
    const buttonType = e.target.type;
    const expelTarget = e.target.id;
    if (buttonType === "submit") {
    students.splice(expelTarget, 1);
    buildCards();
    }
};

const makeForm = () => {
    let domString = "";
    domString += `<h5>Enter First Year's Name</h5>
                        <form class="form-inline" id="sorting-form">
                            <label class="sr-only" for="inlineFormInputName2">STUDENT NAME</label>
                            <input type="text" class="form-control mr-sm-2" id="inputStudentName" placeholder="Harry Potter">    
                            <div id="sortButtonWrapper">
                                <button type="submit" class="btn btn-primary" id="sortButton">Sort!</button>
                            </div>
                        </form>`;
    printToDom("form-wrapper", domString);
};

const assignHouse = () => {
  return Math.floor(Math.random() * 4);
};

const studentName = () => {
    const name = document.getElementById("inputStudentName").value;
  //we want to get the value of the input in the form; aka the name entered in the empty field
    if (name == "") {
    alert("Please enter a name!");
    } else {
    document.getElementById("inputStudentName");
    students.push({ name: name, house: houses[assignHouse()] });
    document.querySelector("#sorting-form").reset();
    //and we want to build a student object that has name and house
    //and then we want to push it into the empty students array.
    //Shoutout to Deanna!!! she figured out the empty object setup!!
    //and when we hit the sort button, we want the form to reset.
    }
};

const buildCards = () => {
  //this will build our student cards based off of
  //the student array that is empty by default
    let domString = "";
    for (let i = 0; i < students.length; i++) {
    domString += `<div class="card">
            <div class="card-body">
                <h1 class="card-title">${students[i].name}</h1>
                <h3 class="card-title">${students[i].house}</h3>
                <button type="submit" class="btn btn-primary" id="expelButton">Expel</button>
            </div>
        </div>`;
    }
    printToDom("studentCards", domString);
};

const init = () => {
    onClickEvents();
};

//INITIALIZE FUNCTIONS

init();
