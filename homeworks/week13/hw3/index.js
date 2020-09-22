/* eslint linebreak-style: ['error', 'windows'] */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable spaced-comment */
/* eslint-disable arrow-body-style */
/* eslint-disable quote-props */

document.addEventListener('DOMContentLoaded', () => {
  const template = `
  <a href='$link' class='twitch__block-link'>
    <div class='twitch__block-block'>
      <img src='$preview' class='twitch__block-board-img'>
      <div class='twitch__block-info'>
        <div class='twitch__block-info-icon'>
          <img src='$logo' alt=''>
        </div>
        <div class='twitch__block-info-detail'>
          <h1>$title</h1>
          <h3>$channel</h3>
        </div>
      </div>
    </div>
  </a>`;
  /* 取得前五名的遊戲回傳回去 */
  /* function getGameName(cb) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5', true);
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
    request.setRequestHeader('Client-ID', 'tb77wd151j2pdprdv3zkeaseks9fhm');
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        cb(JSON.parse(request.response));
      }
    };
    request.send();
  }*/

  /* fetch 取得前五名的遊戲回傳回去 */
  function getGameName(cb) {
    return fetch('https://api.twitch.tv/kraken/games/top?limit=5', {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'tb77wd151j2pdprdv3zkeaseks9fhm',
      }),
    }).then((response) => {
      return response.json();
    }).then((json) => {
      cb(json);
    });
  }

  /* 利用遊戲名稱來取得20名線上直播主內容，回傳回去 */
  /* function getStreams(name, cb) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://api.twitch.tv/kraken/streams?game=${name}`, true);
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
    request.setRequestHeader('Client-ID', 'tb77wd151j2pdprdv3zkeaseks9fhm');
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        cb(JSON.parse(request.response));
      }
    };
    request.send();
  }*/

  /* fetch 利用遊戲名稱來取得20名線上直播主內容，回傳回去 */
  function getStreams(name, cb) {
    return fetch(`https://api.twitch.tv/kraken/streams?game=${name}`, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'tb77wd151j2pdprdv3zkeaseks9fhm',
      }),
    }).then((response) => {
      return response.json();
    }).then((json) => {
      cb(json);
    });
  }


  /* 新增空方塊 */
  function addEmpty() {
    const empty = document.createElement('div');
    empty.classList.add('empty');
    document.querySelector('.twitch__block-content').appendChild(empty);
  }

  getGameName((games) => {
    const topGames = games.top.map((game) => game.game.name);
    for (let i = 0; i < 5; i += 1) {
      const element = document.createElement('li');
      element.innerHTML = topGames[i];
      document.querySelector('.navbar__list').appendChild(element);
    }
    [document.querySelector('.twitch__block-title').innerText] = topGames;
    getStreams(topGames[0], (data) => {
      data.streams.map((stream) => {
        const element = document.createElement('div');
        element.classList.add('twitch__block-board');
        const content = template
          .replace('$link', stream.channel.url)
          .replace('$preview', stream.preview.large)
          .replace('$logo', stream.channel.logo)
          .replace('$title', stream.channel.status)
          .replace('$channel', stream.channel.name);
        document.querySelector('.twitch__block-content').appendChild(element);
        element.innerHTML = content;
      });
      addEmpty();
      addEmpty();
    });
  });

  document.querySelector('.navbar__list').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      const text = e.target.innerText;
      document.querySelector('.twitch__block-title').innerText = text;
      document.querySelector('.twitch__block-content').innerHTML = '';

      getStreams(text, (data) => {
        data.streams.map((stream) => {
          const element = document.createElement('div');
          element.classList.add('twitch__block-board');
          const content = template
            .replace('$link', stream.channel.url)
            .replace('$preview', stream.preview.large)
            .replace('$logo', stream.channel.logo)
            .replace('$title', stream.channel.status)
            .replace('$channel', stream.channel.name);
          document.querySelector('.twitch__block-content').appendChild(element);
          element.innerHTML = content;
        });
        addEmpty();
        addEmpty();
      });
    }
  });
});
