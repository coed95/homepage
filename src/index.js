import './styles.css';
import Majima from './images/majima.jpeg';
import MajimaFooter from './images/majima-footer.png';

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
    const chapterDivs = document.querySelectorAll('.chapter-div');

    for (let index = 0; index < numberOfChapters; index++) {
        const image = chapterDivs[index].querySelector('img');
        image.src = `../src/images/chapter-${index + 1}.png`;
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