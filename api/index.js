const ogs = require("open-graph-scraper");

module.exports = async (req, res) => {
  const options = { url: req.query["url"], timeout: 4000 };
  let response = await ogs(options);
  console.log(response);
  console.log("ok");
  res.json(response);
};
