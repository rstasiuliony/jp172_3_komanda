requirejs(["hyperscript-attribute-to-property/index", "hyperx/index"], function(attrToProp, hyperx) {
    function test(tagName, attrs, children){
        var result = ` "${tagName}", {`;
        var text = "";
        for (let attr in attrs) {
            text += `, ${attr} : "${attrs[attr]}"`
        }
        result += text.substring(2) + `}, [`;
        var text = "";
        for(let child of children){
            text += `, "${child}"`;
        };
        result += text.substring(2) + `]`;
        return result;
    }



    var newtest = attrToProp(test);

    document.getElementById("output").innerHTML = 
        newtest("div", {class : "class", for : "for"}, ["a", "b", "c"]);

    var hyperx = require('hyperx')
    
    var convertTaggedTemplateOutputToDomBuilder = hyperx(function (tagName, attrs, children) {
        console.log(tagName, attrs, children)
    })
    
    convertTaggedTemplateOutputToDomBuilder`<h1>hello world</h1>`
    
    // Running this produces: h1 {} [ 'hello world' ]
});