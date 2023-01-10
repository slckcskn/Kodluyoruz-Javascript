// Blose butona oluşturma ve listeye öğe ekleme kısmı
var myNodelist = document.getElementsByTagName("myUL");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Close butonuna tıklayarak listedeki öğeyi kaldırma kısmı
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === "myInput") {
    ev.target.classList.toggle("checked");
  }
}, false);

// Add butonuna tıklayarak listeye öğe ekleme
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

//   if (inputValue === '') {
//     alert("Bu alanı boş bırakamazsınız!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }

//Toast bildirimi
if ( inputValue === "" ) {
    $('.error').toast("show")
    
} else {
    let myInput = document.querySelector("#myInput")
    document.getElementById("myUL").appendChild(li);
    $('.success').toast("show")
}
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//li->myUL, task->myInput, liDOM->li