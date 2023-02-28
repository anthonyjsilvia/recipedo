var xmlDoc;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    displayData(this);
  }
};
xhttp.open("GET", "https://recipedo.nodeda.com/gallery/recipes.xml", true);
xhttp.send();

function displayData(xml) {
  xmlDoc = xml.responseXML;
}

document.getElementById("searchButton").addEventListener("click", function() {
  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var books = xmlDoc.getElementsByTagName("book");
  document.getElementById("content").innerHTML = "";
  for (var i = 0; i < books.length; i++) {
    var title = books[i].getElementsByTagName("title")[0].childNodes[0].nodeValue.toLowerCase();
    if (title.includes(searchInput)) {
      var id = books[i].getAttribute("id");
      var image = books[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
      var prep = books[i].getElementsByTagName("prep")[0].childNodes[0].nodeValue;
      var cook = books[i].getElementsByTagName("cook")[0].childNodes[0].nodeValue;
      var level = books[i].getElementsByTagName("level")[0].childNodes[0].nodeValue;
      var servings = books[i].getElementsByTagName("Servings")[0].childNodes[0].nodeValue;
      var rating = books[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue;
      var about = books[i].getElementsByTagName("about")[0].childNodes[0].nodeValue;
      var ingredients = books[i].getElementsByTagName("ingredients");
      var directions = books[i].getElementsByTagName("directions")[0].childNodes[0].nodeValue;

      document.getElementById("content").innerHTML += "<h3>" + title + "</h3>";
      document.getElementById("content").innerHTML += "<img src='" + image + "'><br><br>";
      document.getElementById("content").innerHTML += "<p>Prep Time: " + prep + "</p>";
      document.getElementById("content").innerHTML += "<p>Cook Time: " + cook + "</p>";
      document.getElementById("content").innerHTML += "<p>Level: " + level + "</p>";
      document.getElementById("content").innerHTML += "<p>Servings: " + servings + "</p>";
      document.getElementById("content").innerHTML += "<p>Rating: " + rating + "</p>";
      document.getElementById("content").innerHTML += "<p>About: " + about + "</p>";
      document.getElementById("content").innerHTML += "<p>Ingredients:</p><ul>";
      for (var j = 0; j < ingredients.length; j++) {
        var ingredient = ingredients[j].childNodes[0].nodeValue;
        document.getElementById("content").innerHTML += "<li>" + ingredient + "</li>";
      }
      document.getElementById("content").innerHTML += "</ul><p>Directions: " + directions + "</p>";
    }
  }
});


  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      document.body.classList.add("scrolling");
    } else {
      document.body.classList.remove("scrolling");
    }
  });

