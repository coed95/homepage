import './styles.css';

import Majima from './images/majima.jpeg';
import MajimaFooter from './images/majima-footer.png';

import Chapter1 from './images/chapter-1.png';
import Chapter2 from './images/chapter-2.png';
import Chapter3 from './images/chapter-3.png';
import Chapter4 from './images/chapter-4.png';
import Chapter5 from './images/chapter-5.png';
import Chapter6 from './images/chapter-6.png';
import Chapter7 from './images/chapter-7.png';
import Chapter8 from './images/chapter-8.png';
import Chapter9 from './images/chapter-9.png';
import Chapter10 from './images/chapter-10.png';
import Chapter11 from './images/chapter-11.png';
import Chapter12 from './images/chapter-12.png';
import Chapter13 from './images/chapter-13.png';
import Chapter14 from './images/chapter-14.png';
import Chapter15 from './images/chapter-15.png';
import Chapter16 from './images/chapter-16.png';
import Chapter17 from './images/chapter-17.png';


function setHeaderImage(src, alt) {
    const image = document.querySelector('.header img');
    image.src = src;
    image.alt = alt;
}

function setFooterImage(src, alt) {
    const image = document.querySelector('.footer img');
    image.src = src;
    image.alt = alt;
}

function setChapterImage(numberOfChapters) {
    const chapterImages = {
        1: Chapter1,
        2: Chapter2,
        3: Chapter3,
        4: Chapter4,
        5: Chapter5,
        6: Chapter6,
        7: Chapter7,
        8: Chapter8,
        9: Chapter9,
        10: Chapter10,
        11: Chapter11,
        12: Chapter12,
        13: Chapter13,
        14: Chapter14,
        15: Chapter15,
        16: Chapter16,
        17: Chapter17
    };
    const chapterDivs = document.querySelectorAll('.chapter-div');

    for (let index = 0; index < numberOfChapters; index++) {
        const image = chapterDivs[index].querySelector('img');
        image.src = chapterImages[index + 1];
    }
}

function setChapterInfo(numberOfChapters) {
    const chapterDivs = document.querySelectorAll('.chapter-div');
    const chapters = [
        'Bound by Oath',
        'The Real Estate Broker in the Shadows',
        'A Gilded Cage',
        'Proof of Resolve',
        'An Honest Living',
        'The Yakuza Way',
        'A Dark Escape',
        'Tug of War',
        'Ensnared',
        "A Man's Worth",
        'A Murky Riverbed',
        'Den of Desires',
        'Crime and Punishment',
        'Unwavering Bonds',
        'Scattered Light',
        'Proof of Love',
        'Black and White',
    ];

    for (let index = 0; index < numberOfChapters; index++) {
        const chapterInfo = chapterDivs[index].querySelector('.chapter-info');

        const title = document.createElement('div');
        title.classList.add('title');

        const titleContent = document.createElement('h3');
        titleContent.textContent = (index < 16) ? `Chapter ${index + 1}` : 'Finale';

        const externalLink = document.createElement('a');
        externalLink.classList.add('fa');
        externalLink.classList.add('fa-external-link');
        externalLink.target = '_blank';

        if (index < 16) {
            externalLink.href = `https://yakuza.fandom.com/wiki/Yakuza_0/Chapter_${index + 1}`;
        }
        else {
            externalLink.href = 'https://yakuza.fandom.com/wiki/Yakuza_0/Finale';
        }

        title.appendChild(titleContent);
        title.appendChild(externalLink);

        const subtitle = document.createElement('h4');
        subtitle.textContent = chapters[index];

        const description = document.createElement('p');
        description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id eius hic accusamus minus rerum dicta, porro fuga commodi alias?';

        chapterInfo.appendChild(title);
        chapterInfo.appendChild(subtitle);
        chapterInfo.appendChild(description);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const totalChapters = 17;

    setHeaderImage(Majima, "Goro");
    setChapterImage(totalChapters);
    setChapterInfo(totalChapters);
    setFooterImage(MajimaFooter);
});