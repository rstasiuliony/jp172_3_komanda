class PagedBookList{
	
	_compare (a, b, fieldName){
		let result = 0;
		if (fieldName !== "name") result = b[fieldName] - a[fieldName];
		if (result != 0) return result;
		return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0;
	}

	constructor(newBookList, newPageSize = 10){
		this._bookList = newBookList;
		this._filter = { key : "", value : ""};
		this.pageSize = newPageSize;
	}

	sortByYear(){
		this._bookList.sort((a,b)=> this._compare(a, b, "year"));
	}

	sortByRating(){
		this._bookList.sort((a,b)=> this._compare(a, b, "rating"));
	}

	sortByName(){
		this._bookList.sort((a,b)=> this._compare(a, b, "name"));
	}

	setFilter(key = "", value = ""){
		this._filter = {
			key    : key,
			value  : value
		}
	}

	set pageSize(newPageSize){
		this._pageSize = newPageSize;
		this.pageNo = 0;
	}
	set pageNo(newPageNo){
		this._pageNo = newPageNo;
		this._lower =  this._pageNo * this._pageSize;
		this._upper = ( this._pageNo + 1) * this._pageSize;
	}

	page(newPageNo = 0){
		this.pageNo = newPageNo;
		let filteredList =  this._bookList.slice(0, this._bookList.length);
		if (this._filter.key !== "" || this._filter.value !== "") {
			filteredList = this._bookList.filter((a)=> a[this._filter.key] === this._filter.value);
		}
		return filteredList.slice(this._lower, this._upper);
	}
}

var pagedBookList = new PagedBookList(bookListData, 10);

var bookList = pagedBookList.page();

bookListRun(bookList);
//menuListRun(topMenuList, "topmenu");

document.getElementById("allBooks").onclick=function(){
	pagedBookList.setFilter()
	pagedBookList.sortByName();
	bookList = pagedBookList.page(0);
	bookListRun(bookList);
};

document.getElementById("recentBooks").onclick=function(){
	pagedBookList.setFilter()
	pagedBookList.sortByYear();
	bookList = pagedBookList.page(0);
	bookListRun(bookList);
};

document.getElementById("popularBooks").onclick=function(){
	pagedBookList.setFilter()
	pagedBookList.sortByRating();
	bookList = pagedBookList.page(0);
	bookListRun(bookList);
};

document.getElementById("freeBooks").onclick=function(){
	pagedBookList.sortByName();
	pagedBookList.setFilter("price", 0)
	bookList = pagedBookList.page(0);
	bookListRun(bookList);
};
document.getElementById("favourite").onclick=function(){
	pagedBookList.setFilter("check", true)
	pagedBookList.sortByName();
	bookList = pagedBookList.page(0);
	bookListRun(bookList);
};

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
