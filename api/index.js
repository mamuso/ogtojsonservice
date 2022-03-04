const ogs = require('open-graph-scraper')

module.exports = async (req, res) => {
  const options = { url: req.query['url'], timeout: 4000 }
  let response = await ogs(options)
    .then(function (response) {
      console.log('Promise Resolved')
      res.json(response)
    })
    .catch(function () {
      console.log('Promise Rejected')
    })
}
