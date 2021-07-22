const fs = require('fs');
const mustache = require('mustache');

function renderBaseTemplate(viewsPath, contentName, data) {

  const template = fs.readFileSync(`${viewsPath}/base.mustache`, 'utf-8');

  /* Partials */
  const header = fs.readFileSync(`${viewsPath}/header.mustache`, 'utf-8');
  const content = fs.readFileSync(`${viewsPath}/${contentName}.mustache`, 'utf-8');
  const footer = fs.readFileSync(`${viewsPath}/footer.mustache`, 'utf-8');  
  
  const partials = {
    header,
    content,
    footer,
  }
  return mustache.render(template, data, partials);
}

module.exports = renderBaseTemplate;