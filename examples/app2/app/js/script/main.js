define(
    ['require', './book-list', 'data/book-data', './login'], 
    function(require, bookListRun, bookData, loginImport) 
    {

        var page = document.getElementById("page").attributes['page-name'].value;

        if (page === 'index')
        bookListRun(bookData);

        var {
            login, startloggedsession, logout, index, sign, savetostorage, checkuser
        } = loginImport;
        // if (page === 'login.html'){
        //     document.getElementById("btnLogin").onclick = login;
        // }
    }
);
