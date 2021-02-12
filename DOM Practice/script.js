const container = document.querySelector('#container');
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const p = document.createElement('p');
p.classList.add('content');
p.textContent = 'Hey I am red!';
p.setAttribute('style', 'color: red');
container.appendChild(p);

const header = document.createElement('h3');
header.textContent = 'I\'m a blue h3!';
header.setAttribute('style', 'color: blue');
container.appendChild(header);

const div = document.createElement('div');
div.setAttribute('style', 'background: pink; border-color: black');
div.borderColor = 'black';
div.borderWidth = '100px';


const subhead = document.createElement('h1');
subhead.textContent = 'I\'m in a div';
div.appendChild(subhead);

const p2 = document.createElement('p');
p2.textContent = 'ME TOO!';
div.appendChild(p2);

container.appendChild(div);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

