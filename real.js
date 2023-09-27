document.body.innerHTML = '<center></br><h1>Search:</h1></br></br><input type="text" id="search" placeholder="Enter URL" onkeyup="if(event.keyCode===13)popitup(document.getElementById(\'search\').value)"></center>';
function popitup(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  newwindow = window.open(url, 'name', 'height=9999,width=9999');
  if (window.focus) {
    newwindow.focus();
  }
  return false;
}
