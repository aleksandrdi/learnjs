

let mainHead = document.getElementById("mainHead");
mainHead.innerHTML = "Замена заголовка";

let testNull = document.getElementById("testId");
console.log(testNull);

let imgChange = document.getElementById("image_1");
let paragraphs = document.getElementsByClassName("btext");
console.log(paragraphs);
console.log(paragraphs[0]);
paragraphs[0].innerHTML = "Содержимое изменилось";
paragraphs[1].innerHTML = "<b>Содержалка</b>";
let imgChange2 = document.querySelector("div");
console.log(imgChange2);


function init(){
    let content = document.querySelector("#mainHead");
        content.innerHTML = "ещё больше инфы";
}

window.onload = init;

var p = document.createElement("div");
document.body.appendChild(p);

setTimeout(changeTitle, 3000);
function changeTitle(){
    mainHead.setAttribute("title", "Привет!");
    mainHead.style.color = "red";
    mainHead.style.borderLeft = "2px solid #CCC";
    mainHead.style.paddingLeft = "20px";
    mainHead.innerText = "Добавился тайтл!";
    console.log(mainHead.getAttribute("title"));
}


//let testLink = document.querySelector("body > ul > li:nth-child(2) > a");
let testLink = document.querySelector(".testLink");
console.log(testLink + "999");

testLink.addEventListener("click", testLinkPrepare);
 function testLinkPrepare(){
     alert("Вы действительно хотите перейти по ссылке?");
 }


/**
let parentDesc = document.getElementsByClassName("btest")[0];
parentDesc.appendChild(div);


let newLi = document.createElement("li");
newLi.innerHTML = "Привет, мир!";
let lastUI = document.querySelectorAll("body ul:last-child");
lastUI.insertBefore(newLi, lastUI.children[1]);



var image = document.getElementById("image_1");
image.onclick = changeBigPicture;

var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
    images[i].onclick = changeBigPicture;
}
*/