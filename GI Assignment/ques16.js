var guestListt = ["Hareez ", "Areesha", "Preena"];
for (var i = 0; i < guestListt.length; i++) {
    //console.log("respectd mdm", guestListt [i], " ", "invited you on dinner tomorrow");
}
var notPrresent = 'hareez';
var newwGuest = 'erum';
guestListt[0] = newwGuest;
for (var i = 0; i < guestListt.length; i++) {
    console.log("respectd mdm", guestListt[i], " ", "invited you on dinner tomorrow");
}
// console.log("mr" , notPrresent , "will not come");
guestListt.unshift("iqra", "hoor", "waqar");
guestListt.push("zubaida");
guestListt.splice(guestListt.length / 2, 1, "arshi");
for (var i = 0; i < guestListt.length; i++) {
    console.log("respectd mdm\n ", guestListt[i], " \n", "invited you on dinner tomorrow \n we found a big dinner table \n so we decide to invite 3 more guest");
}
