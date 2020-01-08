const fetchData = () => {
    console.log('fetchData mocked');
    return Promise.resolve({title: 'delectus aut autem'})
  };
  
  exports.fetchData = fetchData;