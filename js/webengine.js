var xmlDoc;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			displayData(this);
		}
	};
	xhttp.open("GET", "https://a.adxstudios.com/recipedo/recipes.xml", true);
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
				var etad = books[i].getElementsByTagName("etad")[0].childNodes[0].nodeValue;
				var rdisc = books[i].getElementsByTagName("rdisc")[0].childNodes[0].nodeValue;
				var text = books[i].getElementsByTagName("text")[0].childNodes[0].nodeValue;
				var rating = books[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue;
				var image = books[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;

				//document.getElementById("content").innerHTML += "<h2>ID: " + id + "</h2>";
				document.getElementById("content").innerHTML += "<h3>" + title + "</h3>";
				document.getElementById("content").innerHTML += "<p>Cook Time: " + etad + "</p>";
				document.getElementById("content").innerHTML += "<img src='" + image + "'><br><br>";
				document.getElementById("content").innerHTML += "<p>Rating Description: " + rdisc + rating +"/5</p>" ;
				document.getElementById("content").innerHTML += "<p>Description: " + text + "</p>";
				//document.getElementById("content").innerHTML += "<p>Rating: " + rating + "</p>";
				
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

