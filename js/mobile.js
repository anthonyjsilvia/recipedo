  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    window.location.href = "https://nodeda.com/recipedo/download";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "https://nodeda.com/recipedo/download";
  }
  var downloadLink = document.querySelector('.header-nav ul li a');
  
  if (/Macintosh/.test(userAgent)) {
    if (/Intel/.test(userAgent) || /Apple/.test(userAgent)) {
      downloadLink.innerHTML = 'Download for Mac';
      downloadLink.href = 'https://nodeda.com/recipedo';
    }
  }
