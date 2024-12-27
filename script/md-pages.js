(function() {

let mdElement = document.getElementsByClassName('md-pages')[0];
let historyLength = history.length;

fetchPath(standardizePath(readPath()), mdElement);

function readPath() {
  return document.location.hash.split("#")[1] || '';
}

function standardizePath(path) {
  path ||= "index";
  if (path == '') path = "index";
  if (path[path.length - 1] === "/") path += "index";
  return path;
}

function fetchPath(path, element, wentBack = false) {
  element ||= document.body;
  if (path.substr(-3, 3) !== '.md') path += '.md'
  if (path[0] === '/') path = path.substr(1, path.length-1);
  fetch(path,{
    cache: 'no-cache',
    // mode: 'cors', // no-cors, *cors, same-origin
    mode: 'cors'
  })
    .then((response) => {
      if (!response.ok) {
        return "Page not found."
      }
      return response.text()
    })
    .then((text) => {
      displayText(text, element);
      // scroll to top only if we went forwards
      console.log('rewind to top',!wentBack)
      if (!wentBack) window.scrollTo(0,0);
    });
}

function displayText(text, element) {
  text = fixHeadings(text);
  console.log(fetchFrontMatter(text));
  text = wrapFrontMatter(text);
  output = marked.parse(text);
  // figure raw markdown address
  var markdownFile = document.location.href.split('#').join("") + ".md"
  output = "<p style='float:right;padding-left:5px;'> | <a href='" + markdownFile + "'>Raw markdown</a></p>" + output;
  output = parseIncludes(output);
  element.innerHTML = output;
  let root = document.location.href.split('#')[0];
  let current_path = document.location.href.split('#')[1];
  current_path = current_path || "";
  // distinguish current directory from current path
  let current_directory = current_path;
  if (current_path !== "" && current_path.substr(current_path.length - 1) !== "/") {
    let path_array = current_path.split("/");
    // drop last item, which should be an item within the directory
    current_directory = path_array.slice(0, path_array.length - 1).join("/")
  }
  // identify relative paths like [link](posts/4.md) & prefix as #posts/4.md
  let links = Array.from(element.getElementsByTagName('a'));
  links.forEach(function parseUrl(link) {
    let href = link.attributes['href'].value;
    if (href === "/") link.attributes['href'].value = current_path;
    else if (href.substr(0, 3) === "../") {
      href = absolutize_path(href, current_path);
      link.attributes['href'].value = "#" + href;
    } else if (href[0] !== "h") link.attributes['href'].value = "#" + href;
  });
  let images = Array.from(element.getElementsByTagName('img'));
  images.forEach(function parseUrl(image) {
    fetchImagePaths(image.attributes['src'].value, image);
    image.attributes['src'].value = adjustPaths(image.attributes['src'].value);
    let src = image.attributes['src'].value;
    if (src.substr(0, 3) === "../") {
      src = absolutize_path(src, current_path);
      image.attributes['src'].value = root + src;
    } else if (src[0] !== "h") image.attributes['src'].value = root + current_directory + "/" + src;
  });
}

// ID and format front matter in format ---\nSTUFF\n---\n at start of document;
// https://jekyllrb.com/docs/front-matter/
function wrapFrontMatter(text) {
  return text.replace(/^\-\-\-\n(.+)\n\-\-\-\n(.+)/s,"<details><summary><i>Metadata</i></summary>\n$1\n</details>\n$2")
}

// fetch front matter in format ---\nSTUFF\n---\n at start of document, return as key value pairs;
function fetchFrontMatter(text) {
  var metadata = text.match(/^\-\-\-\n(.+)\n\-\-\-\n(.+)/s)[1];
  metadata = metadata.split("\n")
  var items = [];
  metadata.forEach(function(item) {
    if (item.match(':')) {
      items[item.split(':')[0].trim()] = item.split(':')[1].trim();
    } 
  });
  return items;
}

// correct old-style headings like ###Heading and ###Heading###
function fixHeadings(text) {
  // before and after:
  if (text.match(/^\#\#\#[\w\s]+\#\#\#\#/) != null) {
    text = text.replace(/^(\#\#\#)(\w)\#\#\#\#/g,"$1 $2")
  }
  if (text.match(/^\#\#\#[\w\s]+\#\#\#/) != null) {
    text = text.replace(/^(\#\#\#)([\w\s]+)\#\#\#/g,"$1 $2")
  }
  if (text.match(/^\#\#[\w\s]+\#\#/) != null) {
    text = text.replace(/^(\#\#)([\w\s]+)\#\#/g,"$1 $2")
  }
  if (text.match(/^\#[\w\s]+\#/) != null) {
    text = text.replace(/^(\#)([\w\s]+)\#/g,"$1 $2")
  }
  // just before:
  if (text.match(/^\#\#\#\#\w/m) != null) {
    text = text.replace(/^(\#\#\#\#)(\w)/gm,"$1 $2")
  }
  if (text.match(/^\#\#\#\w/m) != null) {
    text = text.replace(/^(\#\#\#)(\w)/gm,"$1 $2")
  }
  if (text.match(/^\#\#\w/m) != null) {
    text = text.replace(/^(\#\#)(\w)/gm,"$1 $2")
  }
  if (text.match(/^\#\w/m) != null) {
    text = text.replace(/^(\#)(\w)/gm,"$1 $2")
  }
  return text;
}

// customized:
// https://publiclab.org/system => https://publiclab.org/public/system
function adjustPaths(path) {
  if (path.substr(0,8) == '/system/') {
    path = path.replace('/system/','https://publiclab.org/public/system/');
  }
  if (path.includes('https://publiclab.org/system')) {
    path = path.replace('https://publiclab.org/system','https://publiclab.org/public/system');
  }
  if (path.includes('https://i.publiclab.org/system')) {
    path = path.replace('https://i.publiclab.org/system','https://publiclab.org/public/system');
  }
  return path;
}

function fetchImagePaths(path, image) {
  if (path.includes('/i/')) {
    var pathWithoutParams = path.split('?')[0]; // bc many include ?s=o for size prefs, which we ignore
    fetch(path + ".md",{
      cache: 'no-cache',
      mode: 'cors'
    })
      .then((response) => {
        if (!response.ok) {
          return "Page not found."
        }
        return response.text()
      })
      .then((text) => {
        // text includes front matter like:
        /*
        ---
        id: 30599
        path: /public/system/images/photos/000/030/599/medium/IMG_20190323_151705_2.jpg
        created_at: March 23, 2019 19:29
        ---
        */
        // use: "---\npath:/path/to/img.jpg\n---Hello world".match(/path\:(.+)/)[1]
        var newPath = text.match(/path\: (.+)/)[1];
        // replace URLs with fetched URL
        image.src = "https://publiclab.org"+newPath;
      });

  }
}

// convert paths starting with 1 or more  "../" to an absolute path
function absolutize_path(path, current_path) {
  if (path.substr(0, 3) === "../") {
    // remove "../"
    path = path.slice(3, path.length);
    // drop trailing "/"
    if (current_path.substr(current_path.length - 1) == "/") current_path = current_path.substr(0, current_path.length - 2);
    let absolute_path_array = current_path.split("/");
    // drop last path directory
    absolute_path_array.pop();
    absolute_path_array.pop();
    path = absolute_path_array.join("/") + path;
    return absolutize_path(path, current_path);
  } else return path;
}

window.onhashchange = function() {
  let path = readPath();
  let wentBack = (history.state != null && history.state.inHistory == true);
//console.log('scroll',window.pageYOffset)
//history.state.scroll = window.pageYOffset;
// maybe use: https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration

// problem is we need to record state of PREVIOUS page
  history.replaceState({ inHistory: true }, path, "#"+path);
  fetchPath(standardizePath(path), mdElement, wentBack);
  console.log(path, history.length, 'in history', wentBack)
}
window.onpopstate = function() {
  console.log('popstate, hist', history.length)
  if (history.state && history.state.scroll) window.scrollTo(0, history.state.scroll);
}

// include another page within this one
function parseIncludes(text) {
  // will need to be fixed for unique ids, to allow includes twice per page
  function replaceIncludes(match, p1, p2) {
    setTimeout(function insertCollections() {
      fetchPath(p2, document.getElementById('include-' + p2), mdElement);
    },0);
    return "<div id='include-" + p2 + "'></div>";
  }
  return text.replace(/(?:[\>`])(\<p\>)?\[include\:(\S+)\]/, replaceIncludes)
}

})()
