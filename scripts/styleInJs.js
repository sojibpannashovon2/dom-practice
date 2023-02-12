// console.log("Its working babe");
const styleChange = document.getElementById('first-section');
styleChange.classList.add('background-color');


const working = document.getElementById('container');
// console.log(working);
working.classList.add('second-section');
working.classList.remove('third');
const sections = document.querySelectorAll('.query')

for (const section of sections) {
    section.style.backgroundColor = '#d8b9b9a1';
    section.style.marginBottom = "2em";
    section.style.border = "2px solid orange";
    section.style.padding = "5em";
}