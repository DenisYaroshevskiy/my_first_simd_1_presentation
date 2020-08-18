function addSection(parent) {
  let section = document.createElement('section');
  parent.appendChild(section);
  return section;
}

function addTitle(section, text) {
  let element = document.createElement('h3');
  let textNode = document.createTextNode(text);
  element.appendChild(textNode);
  section.appendChild(element);
  return element;
}

function addBenchmarkForSize(slide_id, title, size, parameters, filter) {
  let main = document.getElementById(slide_id);
  let section = addSection(main);
  addTitle(section, title + ' (' + size.toString() + ')');

  let div = document.createElement('div');
  const id = slide_id + '_' + size.toString();
  div.setAttribute('id', id);
  section.appendChild(div);

  let parameters_copy = JSON.parse(JSON.stringify(parameters));

  parameters_copy.size = size;
  presentationEntryPoint(id, parameters_copy, filter);
}

function allSizesBenchmark(slide_id, title, parameters, filter) {
  for (let size of [40, 1000, 10000]) {
    addBenchmarkForSize(slide_id, title, size, parameters, filter);
  }
}

function addImg(parent, img_path) {
  let img = document.createElement('img');
  img.src = img_path;
  parent.appendChild(img);
  return img;
}

function imagesSlideShow(id, img_count) {
  let main = document.getElementById(id);
  for (let i = 0; i != img_count; ++i) {
    let section = addSection(main);
    const img_path = 'img/' + id + '/img' + i.toString() + '.png';
    console.log(img_path);
    addImg(section, img_path);
  }
}

function addBloombergCopyRight() {
  let slides = document.getElementsByTagName("section");
  for (let i = 0; i < slides.length; ++i) {
    let slide = slides[i];
    slide.setAttribute("data-background-image", "img/bloomberg-logo-alpha.svg");
    slide.setAttribute("data-background-size", "auto 10%");
    slide.setAttribute("data-background-position", "bottom 20px left 35px");
  }
}
