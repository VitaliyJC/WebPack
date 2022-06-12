import image1 from '../media/images/1.jpg';
import image2 from '../media/images/2.jpg';
import image3 from '../media/images/3.jpg';
import image4 from '../media/images/4.gif';

const media = [
    {id: 1, title: 'Мельница у реки', image: `${image1}`},
    {id: 2, title: 'Горы осенью', image: `${image2}`},
    {id: 3, title: 'Деревня летом', image: `${image3}`},
    {id: 4, title: 'Анимированный котлованичк', image: `${image4}`}
];

const renderImg = (title, image) => {

    return `<div class="gallary-item">                
                    <img class="gallary-item__object" src="${image}" alt="${title}">                                
                    <span class="gallary-item__title">${title}</span>
            </div>`;
};

const renderImages = (item) => {
    const renderMap = item.map(object => renderImg(object.title, object.image)).join("");
    document.querySelector('.gallery__items').insertAdjacentHTML('beforeend', renderMap);
};

renderImages(media);