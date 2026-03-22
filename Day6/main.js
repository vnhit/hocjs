var productsListElement = document.querySelector('.products-list');
 var firstProductElement = document.querySelector('.product');
 var buttonElements = document.querySelectorAll('button');
 //-------------------------------------------------
var heading = document.querySelector('h1');
var a = document.querySelector('a');
heading.title = "F8 - Học lập trình để đi làm";
heading.setAttribute('data-title',"F8 - Học lập trình để đi làm");
a.href = "https://fullstack.edu.vn/";
a.setAttribute('target','_blank')
//------------------------------------------
var heading = document.querySelector('h1');
heading.innerText = 'F8 - Học lập trình để đi làm';
//-----------------------------
function render(html) {
    var renderelement = document.querySelector('ul');
    renderelement.innerHTML=html;
    
}
 render(`
     <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
<li>Khóa học PHP</li>
`);
//---------------------------------------
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var htmlcourse = courses.map(function(course){
        return `<li>${course}</li>`;
    }).join(',');
    var ulelement = document.querySelector('.courses-list');
    ulelement.innerHTML = htmlcourse;
}
 render(courses)
//---------------------------------\
 var divelemnt = document.querySelector('.red');
divelemnt.style.background = '#f00';
var pelemnt = document.querySelector('p');
pelemnt.style.color = '#f05123';
//---------------------------
var helement = document.querySelector('h1');
helement.classList.add('title');
var pelement = document.querySelector('p');
pelement.classList.replace('sub-title','content');
//-------------------------------
var divelemnt = document.querySelectorAll('div');
divelemnt.forEach(function(classelement){
    return classelement.classList.add('box');
})
//----------------------------
var buttonelement = document.querySelector('button');
buttonelement.onclick = function(){
    this.style.color = '#fff';
}

