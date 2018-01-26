pagedBookList.sortByName();
pagedBookList.view = 0;
var bookList = pagedBookList.page;

//sideMenuRun(sideMenu);
bookListRun(bookList, 0);

//menuListRun(topMenuList, "topmenu");

function bookSet(){

	var name = this.id;
    
    switch(name){
    case "allBooks": 
        pagedBookList.setFilter()
        pagedBookList.sortByName();
        break;
    case "recentBooks":
        pagedBookList.setFilter()
        pagedBookList.sortByYear();
        break;
    case "popularBooks":
        pagedBookList.setFilter()
        pagedBookList.sortByRating();
        break;
    case "freeBooks":
    	pagedBookList.sortByName();
        pagedBookList.setFilter("price", 0)
        break;
    case "mnu-0":
    	pagedBookList.setFilter()
        pagedBookList.sortByName();
        pagedBookList.pageNo = 0;
        pagedBookList.view = 0;
		break;
    case "mnu-1":
    	pagedBookList.setFilter()
        pagedBookList.sortByName();
        pagedBookList.pageNo = 0;
        pagedBookList.view = 1;
		break;
    case "mnu-2":
    	pagedBookList.setFilter()
        pagedBookList.sortByName();
        pagedBookList.pageNo = 0;
        pagedBookList.view = 2;
		break;
    case "mnu-3":
    	pagedBookList.setFilter("whishList", true)
        pagedBookList.sortByName();
        pagedBookList.view = 3;
        pagedBookList.pageNo = 0;
        break;
    case "p0":
        pagedBookList.first();
        break;
    case "p-1":
        pagedBookList.last();
        break;
default:
        if (/^p[0-9]+$/.test(name)){
            pagedBookList.pageNo = parseInt(name.substring(1));
        } else {
            console.log("final.bookSet: switch(name) is unknown!");
        }
    }

    bookList = pagedBookList.page;
	bookListRun(bookList, pagedBookList.view);
};

document.getElementById("mnu-0").onclick=bookSet;
document.getElementById("mnu-1").onclick=bookSet;
document.getElementById("mnu-2").onclick=bookSet;
document.getElementById("mnu-3").onclick=bookSet;
document.getElementById("allBooks").onclick=bookSet;
document.getElementById("recentBooks").onclick=bookSet;
document.getElementById("popularBooks").onclick=bookSet;
document.getElementById("freeBooks").onclick=bookSet;
document.getElementById("p0").onclick=bookSet;
document.getElementById("p-1").onclick=bookSet;
// const noOfPages = pagedBookList.noOfPages;
// for (let i = 1; i < noOfPages - 1; i++){
//     var node = document.getElementById("container").childNodes[i];
//     node.onclick=bookSet;
//     node.style.display = "inline-block";
// }
// forEach(document.getElementById("container").childNodes

// const noOfPages = pagedBookList.noOfPages - 2;
// const nums = Array.apply(null, {length: noOfPages}).map(
//     (x, y) => y + 1
// );
// var firstItem = document.getElementById("p0")
// var buttons = nums.map((number)=>{
//     var div = document.createElement('div');
//     div.innerHTML = `<button id='p${number.toString()}' class="nav-button" onclick=bookSet></button>`;
//         // Change this to div.childNodes to support multiple top-level nodes
//     insertAfter(div.firstChild, firstItem);
//});

var modal = document.getElementById('myModal');
var modcontent = document.getElementsByClassName('about')[0];
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
