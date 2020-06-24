const path = "/users/download/index.html"

const htmlExtention = 'html';

function isHtml(path) {
  var extention = path.substring(path.length - 4, path.length);
  if (extention === htmlExtention) {
    return true;
  } else {
    return false;
  }
}

console.log(isHtml(path))