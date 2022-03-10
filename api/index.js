const ogs = require('open-graph-scraper')

module.exports = async (req, res) => {
  const options = {
    url: req.query['url'],
    timeout: 4000,
  }
  if (req.query['url'].includes('twitter.com')) {
    options.headers = {
      'user-agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)',
    }
  }

  ogs(options).then((data) => {
    const { error, result, response } = data
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.json(result)
    console.log('error:', error) // This returns true or false. True if there was an error. The error itself is inside the results object.
    console.log('result:', result) // This contains all of the Open Graph results
    console.log('response:', response) // This contains the HTML of page
  })
}
