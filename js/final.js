bookListRun(bookList);
// menuListRun(topMenuList, "topmenu");

document.getElementById("allBooks").onclick=function(){
    bookListRun(bookList)
};
document.getElementById("recentBooks").onclick=function(){
    bookListRun(
        jmespath.search(bookList, "sort_by(&year)")
        //bookList.slice().sort((a,b)=> b.year>a.year)
    )
};
document.getElementById("popularBooks").onclick=function(){bookListRun(
    bookList.slice().sort((a,b)=> b.rating>a.rating)
)};
document.getElementById("freeBooks").onclick=function(){bookListRun(
    bookList.filter((a)=> a.price === 0)
)};
document.getElementById("favourite").onclick=function(){
    
    bookListRun(
    bookList.filter((a)=> a.check === true)
)};
var modal = document.getElementById('myModal');
var modcontent = document.getElementsByClassName('about')[0];
var span = document.getElementsByClassName("close")[0];


document.getElementById("book1").onclick = function () {

	bookList[0].check = true;
	modal.style.display = "block";
	modcontent.innerHTML="First book is the best";
}
document.getElementById("book2").onclick = function () {

	bookList[1].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}

document.getElementById("book3").onclick = function () {

	bookList[2].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I recommend you this book";
}
document.getElementById("book4").onclick = function () {

	bookList[3].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}

document.getElementById("book5").onclick = function () {

	bookList[4].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}
document.getElementById("book6").onclick = function () {

	bookList[5].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}

document.getElementById("book7").onclick = function () {

	bookList[6].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}
document.getElementById("book8").onclick = function () {

	bookList[7].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}
document.getElementById("book9").onclick = function () {

	bookList[8].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}
document.getElementById("book10").onclick = function () {

	bookList[9].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}

document.getElementById("book11").onclick = function () {

	bookList[10].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}
document.getElementById("book12").onclick = function () {

	bookList[11].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}

document.getElementById("book13").onclick = function () {

	bookList[12].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}
document.getElementById("book14").onclick = function () {

	bookList[13].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}

document.getElementById("book15").onclick = function () {

	bookList[14].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}
document.getElementById("book16").onclick = function () {

	bookList[15].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}
document.getElementById("book17").onclick = function () {

	bookList[16].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}
document.getElementById("book18").onclick = function () {

	bookList[17].check = true;
	modal.style.display = "block";
	modcontent.innerHTML=" I like this book";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

