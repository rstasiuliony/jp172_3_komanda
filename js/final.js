/* bookListRun(bookList);
menuListRun(topMenuList, "topmenu");

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
 */
//const h = require('react-hyperscript');
const {div, header, img, h1, p, code} = Helpers(h);

class App extends Component {
    render() {
        return div({className:"App"},[
            header( {className:"App-header"},[
            img( {src: "", className:"App-logo", alt:"logo"}),
            h1( {className:"App-title"}, "Welcome to React")
            ]),
            p( {className:"App-intro"},[
            "To get started, edit ", 
            code("src/App.js"),
            " and save to reload."
            ])
        ]);
    }
}

ReactDOM.render(<App />, document.getElementById('"h-test'));
