import $ from 'jquery';

export function loadedPart(n) {
  $('.application').append($('<pre>').text(`Loaded part ${n}`));
}