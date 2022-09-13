// https://www.omnicalculator.com/conversion/knots-to-mph

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const mphRadio = document.getElementById('mphRadio');
const knotsRadio = document.getElementById('knotsRadio');

let mph;
let knots = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

mphRadio.addEventListener('click', function() {
  variable1.textContent = 'knots';
  knots = v1;
  result.textContent = '';
});

knotsRadio.addEventListener('click', function() {
  variable1.textContent = 'mph';
  mph = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(mphRadio.checked)
    result.textContent = `mph = ${computemph().toFixed(5)}`;

  else if(knotsRadio.checked)
    result.textContent = `knots = ${computeknots().toFixed(5)}`;
})

// calculation

function computemph() {
  return 1.15078 * Number(knots.value);
}

function computeknots() {
  return Number(mph.value) / 1.15078;
}