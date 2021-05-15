/*let urlSearch = new URLSearchParams(window.location.search);
let selectedCam = urlSearch.get('id');*/





let urlSearch1 = new URLSearchParams(window.location.search);
let confirmationNumber = urlSearch1.get('id');
console.log(confirmationNumber);
document.getElementById("order_id").innerHTML = confirmationNumber;

let urlSearch2 = new URLSearchParams(window.location.search);
let firstname = urlSearch2.get('param2');
console.log(firstname);


//document.getElementById("main_block").innerHTML = d.getUTCDate();


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log(today);
document.getElementById("today_date").innerHTML = today;