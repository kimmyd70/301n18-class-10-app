'use strict';

function renderThings(list) {
  const template = $('#thingsToDoTemplate').html();
  const container = $('#things');
  list.forEach(item => {
    let newItemHTML = Mustache.render(template,item)
    container.append(newItemHTML);
  });
}

function showThingsToDo() {

  //ajax call here:
  $.ajax('http://localhost3000/todo')
    .then (stuff => {
      renderThings(stuff)
    });

  // let things = [
  //   { task: 'watch tv' },
  //   { task: 'take a nap' },
  // ];

}

$(document).ready(function () {
  showThingsToDo();
});
