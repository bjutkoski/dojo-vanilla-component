const renderBaseTemplate = require('../../helpers/renderBaseTemplate');

const viewsPath = `${__dirname}/../../views`;

const contactController = {
  home: (req, res) => {    
    const data = { name: 'Bruno', isPolite: false };    
    res.send(renderBaseTemplate(viewsPath, 'contact', data));
  }
}

module.exports = contactController;
