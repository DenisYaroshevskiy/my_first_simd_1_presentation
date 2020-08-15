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
