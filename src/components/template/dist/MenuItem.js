"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function MenuItem(props) {
    return (React.createElement("li", { className: "hover:bg-gray-100 cursor-pointer" },
        React.createElement(link_1["default"], { href: props.url },
            React.createElement("a", { className: "\n                    flex flex-col justif\n                " },
                props.icon,
                React.createElement("span", null, props.text)))));
}
exports["default"] = MenuItem;
