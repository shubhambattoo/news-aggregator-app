import '../styles/index.scss';
import { getData } from './request';

const apiKey = process.env.APIKEY;
const headlinesURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

// elements
const loader = document.querySelector('#loading');
const newsContainer = document.querySelector('#news-articles');

// data

init();

async function getHeadlines(page = 1, pageSize = 10, q = '') {
  try {
    const url = `${headlinesURL}&page=${page}&pageSize=${pageSize}&q=${q}`;
    const data = await getData(url);

    if (data.status !== 'ok') {
      alert('could not fetch data');
      return;
    }

    // show data on screen
    loader.style.display = 'none';
    newsContainer.style.display = 'grid';
  } catch (error) {
    console.log(error);
  }
}

function init() {
  loader.style.display = 'flex';
  getHeadlines();
}
