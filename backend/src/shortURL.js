const TinyURL = require('tinyurl');

TinyURL.shorten('http://7feaa9ff.ngrok.io', function(res, err) {
  if (err) console.log(err);
  console.log(res); //Returns a shorter version of http://google.com - http://tinyurl.com/2tx
});
