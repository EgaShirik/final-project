/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {

    var dropdowns1 = document.getElementsByClassName("dropdown-content1");
    var j;
    for (j = 0; j < dropdowns1.length; j++) {
      var openDropdown1 = dropdowns1[j];
      if (openDropdown1.classList.contains('show1')) {
        openDropdown1.classList.remove('show1');
      }
    }
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {

    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var h;
    for (h = 0; h < dropdowns2.length; h++) {
      var openDropdown2 = dropdowns2[h];
      if (openDropdown2.classList.contains('show2')) {
        openDropdown2.classList.remove('show');
      }
    }
  }
}





var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function(){
    modal.style.display = "block";

}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function(){
    modal1.style.display = "block";

}
span1.onclick = function(){
    modal1.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal1){
        modal1.style.display = "none";
    }
}

var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function(){
    modal2.style.display = "block";

}
span2.onclick = function(){
    modal2.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal2){
        modal2.style.display = "none";
    }
}
