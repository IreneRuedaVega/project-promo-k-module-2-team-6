"use strict";

/* var submitButton = document.querySelector("#submit");
var responseURL = document.querySelector(".response");
var form = document.querySelector("form");
var fr = new FileReader(); */

/* submitButton.addEventListener("click", loadPhoto); */

/* function sendData() {
  var inputs = Array.from(form.elements);
  var json = getJSONFromInputs(inputs);
  json.skills = ["JavaScript", "React"];
  json.photo = fr.result;
  sendRequest(json);
}

function loadPhoto() {
  var myFile = document.querySelector("#img-selector").files[0];
  fr.addEventListener("load", sendData);
  fr.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs) {
  return inputs.reduce(function (acc, val) {
    if (val.nodeName !== "BUTTON") acc[val.name] = val.value;
    return acc;
  }, {});
} */

const twitterUrl = document.querySelector(
  ".collapsableShare__createLink--twitterLink"
);

/* function sendData() {
  sendRequest(form);
} */

function sendRequest() {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    twitterUrl.innerHTML =
      "<a href=" + result.cardURL + ">" + result.cardURL + "</a>";
  } else {
    twitterUrl.innerHTML = "ERROR:" + result.error;
  }
  createCard();
}
