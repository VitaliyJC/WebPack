import audio1 from "../media/audio/1.mp3";
import audio2 from "../media/audio/2.mp3";
import audio3 from "../media/audio/3.mp3";


const media = [
    {id: 1, title: 'Пение птиц', audio: `${audio1}`},
    {id: 2, title: 'Шум реки', audio: `${audio2}`},
    {id: 3, title: 'Пение сверчка', audio: `${audio3}`}
];

const renderAudio = (title, audio) => {

    return `<div class="gallary-item">                
                    <audio class="gallary-item__object" src="${audio}" controls></audio>                              
                    <span class="gallary-item__title">${title}<span>
            </div>`;
};

const renderAudioItems = (item) => {
    const renderMap = item.map(object => renderAudio(object.title, object.audio)).join("");
    document.querySelector('.gallery__items').insertAdjacentHTML('beforeend', renderMap);
};

renderAudioItems(media);