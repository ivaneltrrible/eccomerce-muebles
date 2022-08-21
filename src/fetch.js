//import Compressor from "../../node_modules/compressorjs/dist/compressor.esm.js";
/* ######### SE REALIZA PETICION FETCH SOLO PARA PRACTICAR PERO NO ES RECOMENDABLE OBTENER IMG VIA API ES MEJOR DE MANERA LOCAL ####### */
const API_KEY = "MWzFiiifrN5rFbNftQKoJDZlKkVW8j5Oyo0SzAKwvV0";
const params = {
  method: 'GET',
  headers: {
    "Content-type": "application/json",
  }
  //"key": API_KEY,
  //"query": "canada",
}
const randomNumber = Math.floor(Math.random() * 10)
const img = document.querySelector('#img-api')
const loading = document.querySelector('#loading')

async function fetchImg() {
  const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=gamer`, params)
  const data = await response.json()
  //console.log(data)
  const url = data.results[randomNumber].urls.raw;
  return url
}
fetchImg()
  .then(urlImg => {
    // const imgCompress = new Compressor(urlImg)
    img.src = urlImg;
    img.onload = function () {
      loading.style.display = 'none';
      img.style.display = 'block';

      //console.log('cargada la img')
    }


  })