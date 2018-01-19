define(
    ['require', 'react', 'react-dom', 'create-react-class', 'parse-tag', 'hyperscript', 'helpers'], 
    function(require, React, ReactDOM, createReactClass, parseTag, h, hh) 
    {
        // now you can render your React elements
        const createElement = React.createElement;

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

        ReactDOM.render(
            app({ logo : "app/media/logo.svg"}, "Labas"), 
            document.getElementById('root')
        );

        //ReactDOM.render(React.createElement(App), document.getElementById('root'));

    }
);
