import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

const LOCAL_STORAGE_KEY = "feedback-form-state";
const UPDATE_COOLDOWN = 500; // milliseconds

var state = loadStateFromLocalStorage();

fillForm(state);

form.addEventListener("input", throttle(onFormInput, UPDATE_COOLDOWN));

form.addEventListener("submit", onFormSubmit);



function onFormInput({target: {name, value}}) {
  state[name] = value;
  saveStateToLocalStorage(state);
}

function onFormSubmit(event) {
  event.preventDefault();
  
  console.table(state);

  form.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  state = {};
}

function fillForm(state) {
  Object.keys(state).forEach(key => 
    form.elements[key].value = state[key]
  );
}

function loadStateFromLocalStorage() {
  const key = localStorage.getItem(LOCAL_STORAGE_KEY);
  return key ? JSON.parse(key) : {};
}

function saveStateToLocalStorage(state) {
  const key = JSON.stringify(state);
  localStorage.setItem(LOCAL_STORAGE_KEY, key);
}
