const API_URL = 'https://www.tagesschau.de/api2u/news/';
const newsContainer = document.getElementById('news-container');

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        data.news.forEach(article => {
            console.log(article.title);
        })
        
    })
    .catch(error => {
        console.error('Bei der Anfrage ist ein Fehler aufgetreten:', error);
    });