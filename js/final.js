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

<<<<<<< HEAD
document.getElementById("book1").onclick = function () {
=======

>>>>>>> 9efc3ce0f7cac2d776f7570529409f05ecec6361



span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
