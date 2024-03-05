var fstname = "azMeEna";
var middlename = "abdUl";
var lastname = "jabbBar";
var fullname = fstname + "  " + middlename + "  " + lastname;
console.log(fullname);
console.log(fullname.toLowerCase());
console.log(fullname.toUpperCase());
console.log(fullname.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
