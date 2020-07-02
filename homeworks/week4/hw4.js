/* eslint linebreak-style: ["error", "windows"] */
const request = require('request');

request(
  {
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'tb77wd151j2pdprdv3zkeaseks9fhm',
    },
  },
  (error, response, body) => {
    let json;
    try {
      json = JSON.parse(body);
    } catch (e) {
      console.log(e);
    }
    for (let i = 0; i < json.top.length; i += 1) {
      console.log(`${json.top[i].viewers} ${json.top[i].game.name}`);
    }
  },
);
