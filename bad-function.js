function renderContent({element, attributes, content, root}) {
  if (element.toLowerCase() === 'script') {
    throw new Error('Invalid element.');
  }
  
  let attributesStr = '';
  for (const {name, value} of attributes) {
    attributesStr += ` ${name}="${value}"`;
  }

  const openingTag = `<${element} ${attributesStr}>`;
  const closingTag = `</${element}>`;
  
  root.innerHTML = openingTag + content + closingTag;
}
