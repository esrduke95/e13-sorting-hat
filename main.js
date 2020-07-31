//

const onClickEvents = () => {
  document.querySelector("#start-btn").addEventListener("click", makeForm);
};
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};
const makeForm = () => {
  let domString = `<div id="form-wrapper">
                        <h5>Enter First Year's Name</h5>
                        <form class="form-inline" id="sorting-form">
                            <label class="sr-only" for="inlineFormInputName2">STUDENT NAME</label>
                            <input type="text" class="form-control mr-sm-2" id="inlineFormInputName2" placeholder="Harry Potter">    
                            <button type="submit" class="btn btn-primary">Sort!</button>
                        </form>
                    </div>`;
  printToDom("sorting-form", domString);
  studentButton();
};

const init = () => {
    makeForm();
}

init();