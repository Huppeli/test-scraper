var request = require('request');
var cheerio = require('cheerio');

request('https://www.new-iihf.com/en/events/2018/wm/teams/roster/1607/finland',function (error, response ,html) {
  if(!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
  //  console.log(html);

    var results = [];

    var stuff = $(".m-statistics-table--players .js-left-table .js-table-row").each(function() {
      var playerNames = $(this).find(".s-cell--name").text().trim();
      var metadata = {
        name: playerNames
      };
      results.push(metadata);
    });
    console.log(results);
  }
})
