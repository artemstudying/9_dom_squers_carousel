
// синий->зеленый->желтый
let elems = document.querySelectorAll('.square');
let els = document.querySelectorAll('.queue');

function changeBackground(){
  if(this.style.backgroundColor === ''){
    this.style.backgroundColor = 'blue';
  }else if(this.style.backgroundColor === 'blue'){
    this.style.backgroundColor = 'green';
  }else if(this.style.backgroundColor === 'green'){
    this.style.backgroundColor = 'yellow';
  }else {
    this.style.backgroundColor = '';
  }
};

for (let i = 0; i < elems.length; i++) {
  elems[i].addEventListener('click', changeBackground);
};

function changeQueue(){
  this.parentNode.appendChild(this);
};
for(let i = 0; i < els.length; i++){
  els[i].addEventListener('click', changeQueue);
};




