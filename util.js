const { fetchData } = require('./http');

const loadTitle = () => {
  return fetchData().then(extractedData => {
    const title = extractedData.title;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });
};

const printTitle = () => {
  loadTitle().then(title => {
    return title;
  });
};

exports.loadTitle  = loadTitle;
exports.printTitle = printTitle;
