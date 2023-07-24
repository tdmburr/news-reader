import mock from './mock'

const acquireInfo = () => {
  const mockPromises = new Promise((resolve, reject) => {
    resolve(mock)
  })

  return mockPromises

  // return fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=6c9c24b98c67447895153f07b4cb1c58`)
  // .then(response => {
  //     if(!response.ok) {
  //       throw new Error("Failed to fetch article");
  //   }
  //   return response.json()
  //  })
}


export default acquireInfo;