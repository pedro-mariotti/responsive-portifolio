let body = getComputedStyle(document.body);

let darkCheck = document.getElementById('darkSwitch');
let burgerCheckbox = document.getElementById('burgerCheckbox');
let burgerTab1 = document.getElementById('burgerTab1');
let burgerTab2 = document.getElementById('burgerTab2');
let burgerTab3 = document.getElementById('burgerTab3');
let burgerNav = document.getElementById('burgerNav');
let burgerButtonDiv = document.getElementById('burgerButton');

let projectButton = document.querySelectorAll('.projectsButton');
let aboutButton = document.querySelectorAll('.aboutButton');
let projectSection = document.getElementById('projectSection');
let aboutSection = document.getElementById('introSection');
let avatar = document.getElementById('avatar');
let navName = document.getElementById('navName');
let navButtons = document.querySelectorAll('.navPics');
let navButtonsMobile = document.querySelectorAll('.navPicsMobile');

var headerOffset = 45;
var elementPosition = document.body.getBoundingClientRect().top;
var offsetPosition = elementPosition + window.scrollY - headerOffset;

darkCheck.addEventListener('click', () => {
  //acrescenta dark mode no checkmark da navbar
  if (darkCheck.checked == true) {
    document.documentElement.style.setProperty('--textColor', '#FAF4E6');
    document.documentElement.style.setProperty('--bgColor', '#222222');
    document.documentElement.style.setProperty('--navColor', '#3C3B3A');
    document.documentElement.style.setProperty('--blueColor', '#FAF4E6');
    document.documentElement.style.setProperty('--buttonBg', '#3C3B3A');
    document.documentElement.style.setProperty('--activeButtonBg', '#4d4b4ac4');
    document.documentElement.style.setProperty('--checkMarkBg', '#3C3B3A');
    for (item of navButtons) item.className = 'navPicsDarkMode';
    for (item of navButtonsMobile) item.className = 'navPicsMobileDarkMode';
  } else {
    document.documentElement.style.setProperty('--textColor', 'black');
    document.documentElement.style.setProperty('--bgColor', 'white');
    document.documentElement.style.setProperty('--navColor', 'white');
    document.documentElement.style.setProperty('--blueColor', '#0065ff');
    document.documentElement.style.setProperty('--buttonBg', 'white');
    document.documentElement.style.setProperty('--activeButtonBg', '#4e8ff198');
    document.documentElement.style.setProperty('--checkMarkBg', '#f8f9fa');
    for (item of navButtons) item.className = 'navPics';
    for (item of navButtonsMobile) item.className = 'navPicsMobile';
  }
});
burgerCheckbox.addEventListener('click', () => {
  if (burgerCheckbox.checked == true) {
    burgerTab1.style.transform = 'rotate(45deg)';
    burgerTab1.style.position = 'relative';
    burgerTab1.style.top = '10px';
    burgerTab2.style.opacity = '0';
    burgerTab3.style.transform = 'rotate(-45deg)';
    burgerTab3.style.position = 'relative';
    burgerTab3.style.top = '-8px';

    burgerNav.style.opacity = '100%';
    burgerNav.style.display = 'flex';
  } else {
    burgerTab1.style.transform = 'rotate(0)';
    burgerTab1.style.position = 'static';
    burgerTab1.style.top = '0';
    burgerTab2.style.opacity = '100%';
    burgerTab3.style.transform = 'rotate(0)';
    burgerTab3.style.position = 'static';
    burgerTab3.style.top = '0';

    burgerNav.style.opacity = '0';
    burgerNav.style.display = 'none';
  }
});
for (item of projectButton) {
  item.addEventListener('click', () => {
    window.scrollTo({
      top: offsetPosition + 1000,
      behavior: 'smooth',
    });
    burgerCheckbox.checked = false;
    burgerTab1.style.transform = 'rotate(0)';
    burgerTab1.style.position = 'static';
    burgerTab1.style.top = '0';
    burgerTab2.style.opacity = '100%';
    burgerTab3.style.transform = 'rotate(0)';
    burgerTab3.style.position = 'static';
    burgerTab3.style.top = '0';

    burgerNav.style.opacity = '0';
    burgerNav.style.display = 'none';
  });
}
for (item of aboutButton) {
  item.addEventListener('click', () => {
    window.scrollTo({
      top: offsetPosition + 500,
      behavior: 'smooth',
    });
    burgerCheckbox.checked = false;
    burgerTab1.style.transform = 'rotate(0)';
    burgerTab1.style.position = 'static';
    burgerTab1.style.top = '0';
    burgerTab2.style.opacity = '100%';
    burgerTab3.style.transform = 'rotate(0)';
    burgerTab3.style.position = 'static';
    burgerTab3.style.top = '0';

    burgerNav.style.opacity = '0';
    burgerNav.style.display = 'none';
  });
}
