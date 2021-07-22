const renderBaseTemplate = require('../../helpers/renderBaseTemplate');

const viewsPath = `${__dirname}/../../views`;

const homeController = {
  home: (req, res) => {    
    const data = { name: 'Bruno', isPolite: false };    
    res.send(renderBaseTemplate(viewsPath, 'home', data));
  }
}

module.exports = homeController;