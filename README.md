# SORTING HAT

An app that initially displays a Bootstrap jumbotron asking the user to sort themselves into a Hogwarts house. Upon clicking "Let's Start Sorting," a form appears for the user to enter their name. When they submit their name, they are randomly sorted into a Hogwarts house and their name and house are displayed on a Bootstrap card below. 

## Motivation

This is an introduction to Bootstrap and a continuation of Javascript click events and for... loops. Sorting Hat uses Bootstrap cards, jumbotron, and form; the jumbotron is made in HTML while the form that opens and the cards are displayed using Javascript to write those objects to the DOM. 

## Code

E6 Javascript, CSS, HTML5, and Bootstrap 4

## Framework

Javascript + HTML

## Features

User clicks on sorting button to open a form. Upon entering name and submitting the form, user has created a card containing the entered name and a randomly assigned house. User can add multiple "student" cards and delete them as well. 

## Code Snippet

```
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
```
