import $ from 'jquery';

function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
  
}
console.log('whatever i want')
console.log('stuff')

$(main);
