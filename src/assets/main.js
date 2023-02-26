const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCByOQJjav0CUDwxCk-jVNRQ&part=snippet%2Cid&order=date&maxResults=9'

const content = null || document.getElementById('content');
const content2 = null || document.getElementById('content2')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dfabe927dfmsh3521e330fc5513ap1d0969jsnb4022a3730e6',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
   const response = await fetch(urlApi, options);
   const data = await response.json();
   return data;
}

// ------------------Content-------------------------

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        
        <div class="cards-containerr group relative">
          <div class="product-card">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
            <div class="infocard">
                <h3>
                    ${video.snippet.title}
                </h3>
            </div>
          </div>
        </div>
        `).slice(0,4).join('')}

        `;
        content.innerHTML = view; //Aqui le decimos a nuestro codigo js en que parte del html ponerse
    } catch(error) {
        console.log(error);
    }
})();

//-------------Content2

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        
        <div class="cards-containerr group relative">
          <div class="product-card">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
            <div class="infocard">
                <h3>
                    ${video.snippet.title}
                </h3>
            </div>
          </div>
        </div>
        `).slice(5,9).join('')}

        `;
        content2.innerHTML = view; //Aqui le decimos a nuestro codigo js en que parte del html ponerse
    } catch(error) {
        console.log(error);
    }
})();


