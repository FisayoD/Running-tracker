const goal = 25;
let entries = [];
const entriesWrapper = document.querySelector('#entries');
document.querySelector('#target').innerText = goal;
function addNewEntry(newEntry) { //pushes array element into unordered list
    entriesWrapper.removeChild(entriesWrapper.firstElementChild); //because it's creating more boxes and you want 7 remove one box for each one you added 
   const listItem = document.createElement('li');
   const listValue = document.createTextNode(newEntry);
   listItem.appendChild(listValue);
   entriesWrapper.appendChild(listItem); //adds elements after the existing list items in the html
}
function reducer(total, currentValue){
    return total + currentValue;
}
function calcTotal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
}
function calcAverage() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}
function weeklyHigh() {
    const high = Math.max(...entries);
    document.getElementById('high').innerText = high;
}
function calcGoal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completedPercent = totalValue / (goal / 100);
    const progressCircle = document.querySelector('#progressCircle');
    if(completedPercent > 100) completedPercent === 100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
}
function handleSubmit(event) {
    event.preventDefault();  //  normally it reloads browser by default after submition but we want to prevent that
    const entry = Number(document.querySelector('#entry').value);
    if(!entry) return;  // break out of function if no value is entered
    document.querySelector('form').reset();  // clear form each time you want to enter another stuff
    entries.push(entry);
    addNewEntry(entry);
    calcTotal();
    calcAverage();
    weeklyHigh();
    calcGoal();
}
const form = document.querySelector('form').addEventListener('submit', handleSubmit);