

const form = document.querySelector('.conteiner-search');
const input = document.getElementById('input');
const divContainer = document.querySelector('.section');
const showMoreButton = document.getElementById('show-more-button');
 



const apiUrl = 'https://api.unsplash.com/search/photos';
const apiKey = '1mDQZPwLUOBaXHwfA3nbgKksrNnPkUEy7bsXG2YWBLc';

let page = 1;
let inputData = "";


const fetchImagem = async () => {
  inputData = input.value

  const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`)

  const data = await response.json();

  if(page === 1) {
         divContainer.innerHTML = ''
      }

  const imgCurrenty = data.results


  


  for(const res of imgCurrenty) {
  
    const imgWalpper = document.createElement('div');
    imgWalpper.classList.add('div-gale');
    const image = document.createElement('img');
    image.src = res.urls.small;
    image.alt = res.alt_description;
    const imgLink = document.createElement('a');
    imgLink.href = res.links.html;
    imgLink.target = '_blank';
    imgLink.textContent = res.alt_description;




    imgWalpper.appendChild(image);
    imgWalpper.appendChild(imgLink);
    divContainer.appendChild(imgWalpper);
  }

  page++;

  if(page > 1) {
    showMoreButton.style.display = "block";
  }

  
  
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  page = 1;
  fetchImagem();

})



showMoreButton.addEventListener('click', () => {
  fetchImagem();
});







