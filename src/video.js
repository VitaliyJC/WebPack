import video1 from "../media/video/1.mp4";
import video2 from "../media/video/2.mp4";


const media = [
    {id: 1, title: 'Never Gonna Give You Up', video: `${video1}`},
    {id: 2, title: 'Морской прибой', video: `${video2}`}
];

const renderAudio = (title, video) => {

    return `<div class="gallary-item">                
                    <video class="gallary-item__object" src="${video}" controls></video>                              
                    <span class="gallary-item__title">${title}</span>
            </div>`;
};

const renderVideoPage = (list) => {
    const renderMap = list.map(object => renderAudio(object.title, object.video)).join("");
    document.querySelector('.gallery__items').insertAdjacentHTML('beforeend', renderMap);
};

renderVideoPage(media);