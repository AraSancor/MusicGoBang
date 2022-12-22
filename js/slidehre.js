var myIndex = 0;
carousel();

function carousel() {
  var a;
  var x = document.getElementsByClassName("mySlidesone");
  for (a = 0; i < x.length; a++) {
    x[a].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);    
}