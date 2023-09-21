window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

let div = document.createElement("div")
div.id = "root"
document.body.appendChild(div)

var css1 = document.createElement("link")
var css2 = document.createElement("link")
css1.rel = "stylesheet"
css2.rel = "stylesheet"
css1.href = "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
css2.href = "https://bypassrui.tmct.repl.co/style.css"
document.head.appendChild(css1)
document.head.appendChild(css2)

var scriptNames = [
  "https://unpkg.com/react@17/umd/react.development.js",
  "https://unpkg.com/react-dom@17/umd/react-dom.development.js",
  "https://unpkg.com/browse/@types/react@16.4.14/index.d.ts",
  "https://unpkg.com/browse/@types/react-dom@17.0.2/index.d.ts",
  "https://cdnjs.cloudflare.com/ajax/libs/classnames/2.3.1/index.min.js",
  "https://kit.fontawesome.com/1ee8f271b9.js",
  "https://bypassrui.tmct.repl.co/script.js/"
];
for (var i = 0; i < scriptNames.length; i++) {
  var script = document.createElement('script');
  script.src = scriptNames[i];
  script.async = false;
  script.onload = function() {alert("loaded!")}
  document.head.appendChild(script);
}

alert("<html>"+document.documentElement.innerHTML+"<\/html>")