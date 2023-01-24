// const btn = document.querySelector('button');

// function random(number) {
//     return Math.floor(Math.random() * number + 1);
// }

// function bgChange(e) {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     e.target.style.backgroundColor = rndCol;
//     console.log(e);
// }

// btn.addEventListener('click', bgChange)

// const textBox = document.querySelector('#textBox');
// const output = document.querySelector('#output');

// textBox.addEventListener('keydown', (e) => {
//     output.textContent = `You pressed ${e.key}.`;
// })

// const form = document.querySelector('form');
// const fname = document.querySelector('#fname');
// const lname = document.querySelector('#lname');
// const para = document.querySelector('p');

// form.addEventListener('submit', (e) => {
//     if (fname.value === '' || lname.value === '') {
//         e.preventDefault();
//         para.textContent = 'You need to fill both names';
//     }
// })

const output = document.querySelector('#output');
const container = document.querySelector('#container');
function handleClick(e) {
    output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

container.addEventListener('click', handleClick);