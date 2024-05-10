 document
      .getElementById("projectinfo")
      .addEventListener("click", myFunction);
    function myFunction(){
    var a = document.getElementById("info");
    var b = document.getElementById("info-underlay");
    if (b > a) {
      b.style.height = a.style.height;
    } else {
      b.style.height = b.style.height;
    }
    }