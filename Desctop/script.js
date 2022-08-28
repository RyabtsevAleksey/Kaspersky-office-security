

const question = document.querySelector('#optional__info');
const tip = document.querySelector('#tip');

console.log(question);
console.log(tip);

function showTip() {
  // console.log('its works');
  tip.style.display = "block"
}

function hideTip() {
  tip.style.display = "none"
}

question.addEventListener('mouseover', showTip)
question.addEventListener('mouseout', hideTip)


