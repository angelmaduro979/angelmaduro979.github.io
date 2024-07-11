document.addEventListener('DOMContentLoaded', () => {
    function smoothScrolling(a, b) {
        const button = document.getElementById(a);
        const target = document.getElementById(b);
        if (button && target) {
            button.addEventListener('click', function () {
                target.scrollIntoView({ behavior: 'smooth' });
            });
        } else {
            console.error(`Element not found: ${a} or ${b}`);
        }
    }

    smoothScrolling('contactMeButton', 'contactMe');
    smoothScrolling('logo', 'mainPortfolio');
    smoothScrolling('aboutHeader', 'about');
    smoothScrolling('projectsHeader', 'projects');
    smoothScrolling('contactHeader', 'contactMe');

    //slider Functions



    function rightFunction(a, b) {
        let index = 0;
        let button = document.getElementById(a);
        let slider = document.getElementById(b);
        let slides = slider.querySelectorAll('img').length;

        button.addEventListener('click', () => {

            let percentage = index * -100;
            slider.style.transform = 'translateX(' + percentage + '%)';
            index++;
            console.log('Click')

            if (index >= slides) {
                index = 0
            }
        });

    }

    rightFunction('rightCrunchy', 'crunchySliderImages');
    rightFunction('clockRight', 'clockSlider');
    rightFunction('contactHubright', 'contactHubSlider');
    rightFunction('rightTodo', 'todoListSlider')

    function leftFunction(a, b) {
        let index = 0;
        let button = document.getElementById(a);
        let slider = document.getElementById(b);
        let slides = slider.querySelectorAll('img').length;

        button.addEventListener('click', () => {
            let percentage = index * -100;
            slider.style.transform = 'translateX(' + percentage + '%)';
            index--;
            if (index < 0) {
                return index = slides - 1;
            }
            console.log('Click left')

        })
    }

    leftFunction('leftCrunchy', 'crunchySliderImages');
    leftFunction('clockLeft', 'clockSlider');
    leftFunction('contactHubLeft', 'contactHubSlider');
    leftFunction('leftTodo', 'todoListSlider');


    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', () => highlightSearch('searchInput'));
    const searchInputToggle = document.getElementById('searchInputToggle');
    searchInputToggle.addEventListener('keyup', () => highlightSearch('searchInputToggle'))

    //Toggle function

    const menu = document.querySelector('.hamburguerMenu');
    const toggleBox = document.querySelector('.toggleBox');
    let showBox = false;

    function toggleFunction() {
        if (showBox) {
            toggleBox.style.display = 'none';
        } else {
            toggleBox.style.display = 'flex';
        }

        showBox = !showBox;
    }

    menu.addEventListener('click', toggleFunction)

    //Toggle function videos

    //Play Button

    const crunchyButtonVideo = document.getElementById('crunchyButtonVideo');
    const watchVideoButton = document.getElementById('watchVideoButton');
    const contactVideoButton = document.getElementById('contactVideoButton');
    const todoListButton = document.getElementById('todoListButton');


    //video container

    const crunchyVideo = document.getElementById('crunchyVideo');
    const smartwatchVideo = document.getElementById('smartwatchVideo');
    const contactHubVideo = document.getElementById('contactHubVideo');
    const todoListVideoContainer = document.getElementById('todoListVideoContainer');

    //close button

    const crunchyVideoClose = document.querySelector('#crunchyVideo i');
    const smartwatchVideoClose = document.querySelector('#smartwatchVideo i');
    const contactHubVideoClose = document.querySelector('#contactHubVideo i');
    const todoListVideoContainerClose = document.querySelector('#todoListVideoContainer i');

    const darkBox = document.querySelector('.darkBackground')
    


    function showVideo(a) {

        a.style.display = 'flex';
        darkBox.style.display = 'flex';

    }

    function closeVideo(a){
        a.style.display='none';
        darkBox.style.display='none';
    
    }

    crunchyVideoClose.addEventListener('click',()=> closeVideo(crunchyVideo));
    smartwatchVideoClose.addEventListener('click',()=>closeVideo(smartwatchVideo));
    contactHubVideoClose.addEventListener('click',()=>closeVideo(contactHubVideo));
    todoListVideoContainerClose.addEventListener('click',()=>closeVideo(todoListVideoContainer));


    crunchyButtonVideo.addEventListener('click',()=>showVideo(crunchyVideo))
    watchVideoButton.addEventListener('click',()=>showVideo(smartwatchVideo))
    contactVideoButton.addEventListener('click',()=>showVideo(contactHubVideo))
    todoListButton.addEventListener('click',()=>showVideo(todoListVideoContainer))




})


function highlightSearch(a) {
    const searchTerm = document.getElementById(a).value.toLowerCase();
    const content = document.getElementById('content');

    // Remove previous highlights
    removeHighlights(content);

    if (searchTerm.trim() === "") return; // Exit if search term is empty

    highlightNodes(content, searchTerm);

    // Scroll to the first highlighted element
    const firstHighlight = document.querySelector('.highlight');
    if (firstHighlight) {
        firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function highlightNodes(node, searchTerm) {
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        const regex = new RegExp(searchTerm, 'gi');
        if (regex.test(text)) {
            const span = document.createElement('span');
            span.innerHTML = text.replace(regex, match => `<span class="highlight">${match}</span>`);
            node.replaceWith(span);
        }
    } else {
        node.childNodes.forEach(child => highlightNodes(child, searchTerm));
    }
}

function removeHighlights(node) {
    const highlights = node.querySelectorAll('.highlight');
    highlights.forEach(span => {
        const parent = span.parentNode;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize(); // Merge adjacent text nodes
    });
}

