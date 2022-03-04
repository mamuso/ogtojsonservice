const ogs = require('open-graph-scraper')

const options = { url: req.query['url'], timeout: 4000 }
ogs(options).then((data) => {
  const { error, result, response } = data
  res.json(result)
  console.log('error:', error) // This returns true or false. True if there was an error. The error itself is inside the results object.
  console.log('result:', result) // This contains all of the Open Graph results
  console.log('response:', response) // This contains the HTML of page
})
