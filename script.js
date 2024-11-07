const rollBtn = document.getElementById("roll");
const NumberRoll = document.querySelector('.roll-display');
const input = document.getElementById("min");

rollBtn.addEventListener("click", function(){
    let min = parseInt(input.value);
    let max = 6;
    let number = Math.floor(Math.random()*max)+min;
    NumberRoll.innerHTML = `${number}`;
})