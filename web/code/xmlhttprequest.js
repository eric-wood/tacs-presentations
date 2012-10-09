var request = new XMLHttpRequest();
request.open('GET', 'http://www.mozilla.org', false);
request.send();

if (request.status === 200) {
  console.log(request.responseText);
}
