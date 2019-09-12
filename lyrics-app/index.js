const express = require('express');
var unirest = require("unirest");

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


var req = unirest("GET", "https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/artist.search");

req.query({
	"s_artist_rating": "desc",
	"q_artist": "coldplay",
	"page": "1",
	"page_size": "5"
});

req.headers({
	"x-rapidapi-host": "musixmatchcom-musixmatch.p.rapidapi.com",
	"x-rapidapi-key": "a3969e291amsh843235f70b16792p1b32afjsn98eb4a0e10e8"
});

req.end(function (res) {
	if (res.error) {
        throw new Error(res.error);
    }

	console.log(res.body);
});