define(
    ['require', 'hyperscript', 'helpers'], 
    function(require, h, hh) {

        const {div, header, img, h1, p, code} = hh(h);
        class App extends React.Component {
            render() {
                return div({className:"App"},[
                    header( {className:"App-header"},[
                        img( {src: "app/media/logo.svg", className:"App-logo", alt:"logo"}),
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

        const app = function(attributes={}, children=[]){
            return React.createElement(App, attributes, children);
        };
    }
);
