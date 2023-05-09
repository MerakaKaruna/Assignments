var colors;
(function (colors) {
    colors[colors["black"] = 0] = "black";
    colors[colors["white"] = 1] = "white";
    colors[colors["pink"] = 2] = "pink";
    colors[colors["blue"] = 3] = "blue";
})(colors || (colors = {}));
console.log(colors.black);
console.log(colors.pink);
console.log(colors[0]);
