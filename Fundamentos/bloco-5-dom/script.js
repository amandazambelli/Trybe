let header = document.getElementById('header-container');
header.style.backgroundColor = 'red';

let textoh3 = document.getElementsByTagName('h3');
textoh3[0].style.backgroundColor = 'blue';
textoh3[1].style.backgroundColor = 'blue';

for (let index = 2; index < 4; index += 1) {
    textoh3[index].style.backgroundColor = 'green';
}

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'yellow';

let sectioncolor = document.getElementsByClassName('emergency-tasks');
sectioncolor[0].style.backgroundColor = 'orange';

let sectioncolor2 = document.getElementsByClassName('no-emergency-tasks');
sectioncolor2[0].style.backgroundColor = 'orange';

