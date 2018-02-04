bookListRun(bookList);
// menuListRun(topMenuList, "topmenu");

document.getElementById("allBooks").onclick = function () {
    bookListRun(bookList)
};

document.getElementById("browse").onclick = function () {
    bookListRun(bookList)
};

document.getElementById("recentBooks").onclick = function () {
    bookListRun(
        //        jmespath.search(bookList, "sort_by(&year)")
        bookList.slice().sort((a, b) => b.year > a.year)
    );
};
document.getElementById("popularBooks").onclick = function () {
    bookListRun(
        bookList.slice().sort((a, b) => b.rating > a.rating)
    )
};
document.getElementById("freeBooks").onclick = function () {
    bookListRun(
        bookList.filter((a) => a.price === 0)
    )
};
document.getElementById("favourite").onclick = function () {

    bookListRun(
        bookList.filter((a) => a.check === true)
    )
};

var modal = document.getElementById('myModal');
var modcontent = document.getElementsByClassName('about')[0];
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementsByClassName("fa-search")[0].onclick = function () {
    var key = document.getElementById("key").value.toLowerCase();
    var result = new Array();
    if (key.length < 3) {
        alert("Key word must be at least 3 characters");
    } else {
        for (var i = 0; i < bookList.length; i++) {
            if (bookList[i].name.toLowerCase().includes(key) || bookList[i].author.toLowerCase().includes(key)) {
                result.push(bookList[i]);
            }
        }
        if (result.length == 0) {
            alert("Nothing found");
        } else {
            bookListRun(result);
        }

    }
};
