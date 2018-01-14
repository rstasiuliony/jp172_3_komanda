R(function (require) {
    var attrToProp = require("hyperscript-attribute-to-property/index");

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
});