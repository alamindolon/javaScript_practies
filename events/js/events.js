<!--
console.log(5);
//option 2

function makered(){
    document.body.style.backgroundColor= 'red';
}

//option 3
const makebluebutton = document.getElementById('make-blue');
makebluebutton.onclick = makeblue;

function makeblue() {
    document.body.style.backgroundColor = 'blue';
}

//option 4

const makepinkbutton = document.getElementById('make-pink');
makepinkbutton.addEventListener('click', makepink);

function makepink(){
 document.body.style.backgroundColor = 'pink'
}

//option 5
document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
  })
-->