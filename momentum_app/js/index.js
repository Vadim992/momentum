
// Настройки приложения 

const stateEn = {
  'Generals': ['time', 'date','greeting', 'quote', 'weather', 'audio', 'links'],
  'Photo source': ['GitHub','Unsplash API','Flickr API '],
  'Change language': ['english','russian'],
}

const stateRu = {
  'Основные': ['время', 'дата','привествие', 'цитата', 'погода', 'аудио', 'ссылки'],
  'Источник фона': ['GitHub','Unsplash API','Flickr API '],
  'Сменить язык': ['английский','русский'],
}



let lang = stateEn['Change language'][0];



const name = document.querySelector('.name');
const city = document.querySelector('.city');


const settingsIcon = document.querySelector('.settings-icon');
const settings = document.querySelector('.settings');


const changeLang = document.querySelector('.lang');


const quote =  document.querySelector('.Quote');
const author_ =  document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');



const navItem = document.querySelectorAll('.nav-item');


const links = document.querySelector('.links-block');
const linksText = document.querySelector('.links-text');
links.style.top = `${- links.offsetHeight}px`;




const Generals = document.getElementById('Generals');

if (Generals.querySelectorAll('.on-off').length === 1) {
  const onOff = Generals.querySelector('.on-off');
  let keys = Object.keys(stateEn);
  stateEn[keys[0]].forEach(el => {
    if (onOff.querySelector('.text').textContent === ''){
      
      onOff.querySelector('.text').id = el;
      onOff.querySelector('.text').textContent = el.substring(0,1).toUpperCase() + el.substring(1);
      onOff.querySelector('.oval').id = el;
      
    } else {
    const clone = onOff.cloneNode(true);
    clone.querySelector('.text').id = el;
    clone.querySelector('.text').textContent = el.substring(0,1).toUpperCase() + el.substring(1);
    clone.querySelector('.oval').id = el;
    Generals.append(clone);
    }
  })
  }  

  function translateGeneralsObj (language = stateEn['Change language'][0]) {
    let state = stateEn;
    if (language === stateEn['Change language'][1]) state = stateRu;
    const onOff = Generals.querySelectorAll('.on-off');
    let keys = Object.keys(state);
    for (let i = 0; i < onOff.length; i++) {
      onOff[i].querySelector('.text').textContent = state[keys[0]][i].substring(0,1).toUpperCase() + state[keys[0]][i].substring(1);
    }
  }
  translateGeneralsObj();

function translateGenerals (language = stateEn['Change language'][0]) {
  if (language === stateEn['Change language'][1]){
Generals.querySelector('h3.text').textContent = 'Основые';
Generals.querySelector('.description').textContent = 'Настройте свою панель управления';
Generals.querySelector('h4').textContent ='ПОКАЗАТЬ/СКРЫТЬ БЛОКИ';
  } else {
Generals.querySelector('h3.text').textContent = 'Generals';
Generals.querySelector('.description').textContent = 'Customize your dashboard';
Generals.querySelector('h4').textContent ='SHOW';
}

}

 translateGenerals();

 const ovalsGen = Generals.querySelectorAll('.oval');
const circlesGen = Generals.querySelectorAll('.circle');

for (let i = 0 ; i < ovalsGen.length; i++) {

  function setLocalStorageGen() {
    localStorage.setItem(`${ovalsGen[i].id}`,JSON.stringify([ovalsGen[i].className, circlesGen[i].className]));
  }
 
  function getLocalStorageGen() {
    if(localStorage.getItem(`${ovalsGen[i].id}`)) {
      ovalsGen[i].className = JSON.parse(localStorage.getItem(`${ovalsGen[i].id}`))[0];
      circlesGen[i].className = JSON.parse(localStorage.getItem(`${ovalsGen[i].id}`))[1];
      if (ovalsGen[i].className.includes('oval-anim')){
        if (ovalsGen[i].id === 'quote') {
          document.querySelector('.change-quote').classList.add('hidden');
        }
        if (ovalsGen[i].id === 'greeting') {
          document.querySelector('.name').classList.toggle('hidden');
        }
        document.querySelector(`.${ovalsGen[i].id}`).classList.add('hidden');
      } else {
        document.querySelector(`.${ovalsGen[i].id}`).classList.remove('hidden');
      }
    }
  }

  window.addEventListener('load', getLocalStorageGen);

  ovalsGen[i].addEventListener('click', function(){
  ovalsGen[i].classList.toggle('oval-anim');
  circlesGen[i].classList.toggle('circle-anim');
  console.log(ovalsGen[i].id );
  if (ovalsGen[i].id === 'quote') {
    document.querySelector('.change-quote').classList.toggle('hidden');
  }
  if (ovalsGen[i].id === 'greeting') {
    document.querySelector('.name').classList.toggle('hidden');
  }
  document.querySelector(`.${ovalsGen[i].id}`).classList.toggle('hidden');

  })
  window.addEventListener('beforeunload', setLocalStorageGen);
 }

const Photo_sourse = document.getElementById('Photo_source');
Photo_sourse.style.display = 'none';

function translatePhoto_sourse(language = stateEn['Change language'[0]]){

   if (language === stateEn['Change language'][1]) {
Photo_sourse.querySelector('h3.text').textContent = 'Источник фото';
Photo_sourse.querySelector('.description').textContent = 'Выберите источник фонового изображения';
Photo_sourse.querySelector('h4').textContent = 'ИСТОЧНИКИ';
   } else {
    Photo_sourse.querySelector('h3.text').textContent = 'Photo source';
    Photo_sourse.querySelector('.description').textContent = 'Choose background source';
    Photo_sourse.querySelector('h4').textContent = 'SOURCES';
   }
}


if (Photo_sourse.querySelectorAll('.on-off').length === 1) {
  const addForm = Photo_sourse.querySelector('.addForm');
  let keys = Object.keys(stateEn);
  // settingsChange.id = keys[0];
  stateEn[keys[1]].forEach(el => {
    if (addForm.querySelector('.text').textContent === ''){
      addForm.querySelector('.text').id = el;
      addForm.querySelector('.text').textContent = el.substring(0,1).toUpperCase() + el.substring(1);
      addForm.querySelector('.oval').id = el;
    } else {
    const clone = addForm.cloneNode(true);
    clone.querySelector('.text').id = el;
    clone.querySelector('.text').textContent = el.substring(0,1).toUpperCase() + el.substring(1);
    clone.querySelector('.oval').id = el;
    Photo_sourse.append(clone);
    }
  })
  Photo_sourse.querySelector('input').remove();
  } 
  
  
  function translatePhoto_sourseObj(language = stateEn['Change language'][0]){
    let state = stateEn;
    if (language === stateEn['Change language'][1]) state = stateRu;
    const onOff = Photo_sourse.querySelectorAll('.on-off');
    let keys = Object.keys(state);
    for (let i = 0; i < onOff.length; i++) {
      onOff[i].querySelector('.text').textContent = state[keys[1]][i].substring(0,1).toUpperCase() + state[keys[1]][i].substring(1);
  }
}
translatePhoto_sourseObj();


function setLocalStorageAPI() {
  localStorage.setItem('API', JSON.stringify([inputSource[0].value, inputSource[1].value]));
}
window.addEventListener('beforeunload', setLocalStorageAPI);




function getLocalStorageAPI() {
  if(localStorage.getItem('API')) {
    inputSource[0].value = JSON.parse(localStorage.getItem('API'))[0];
    inputSource[1].value = JSON.parse(localStorage.getItem('API'))[1];
  }
}
window.addEventListener('load', getLocalStorageAPI);

 const ovalsSource = Photo_sourse.querySelectorAll('.oval');
 const circlesSource = Photo_sourse.querySelectorAll('.circle');
 const inputSource = Photo_sourse.querySelectorAll('input');
 let num = 0;

 for (let i = 0; i < inputSource.length; i++){
  inputSource[i].placeholder = '[Enter topic on English] Example:morning';
 }


 for (let i = 1; i < ovalsSource.length; i++) {
  ovalsSource[i].classList.add('oval-anim');
  circlesSource[i].classList.add('circle-anim');
 }

 for (let i = 0 ; i < ovalsSource.length; i++) {

  function setLocalStorageSource() {
    localStorage.setItem(`${ovalsSource[i].id}`,JSON.stringify([ovalsSource[i].className, circlesSource[i].className, inputSource[0].className, inputSource[1].className, num]));
  }

 
  function getLocalStorageSource() {
    if(localStorage.getItem(`${ovalsSource[i].id}`)) {
      ovalsSource[i].className = JSON.parse(localStorage.getItem(`${ovalsSource[i].id}`))[0];
      circlesSource[i].className = JSON.parse(localStorage.getItem(`${ovalsSource[i].id}`))[1];
      inputSource[0].className = JSON.parse(localStorage.getItem(`${ovalsSource[i].id}`))[2];
      inputSource[1].className = JSON.parse(localStorage.getItem(`${ovalsSource[i].id}`))[3];
      if (i === 0) {
      num = JSON.parse(localStorage.getItem(`${ovalsSource[0].id}`))[4];
        switch(num) {
         case 1 : 
          getLinkToImageUnsplashAPI();
          break;
         case 2: 
          getLinkToImageFlickrAPI();
          break;
         default: 
         setBg();
        }
      }
    }
  }

  window.addEventListener('load', getLocalStorageSource);
  ovalsSource[i].addEventListener('click', function(){
    num = i;
     switch(i) {
      case 1: 
       getLinkToImageUnsplashAPI();
       break;
      case 2: 
      getLinkToImageFlickrAPI();
       break;
      default: 
      setBg();
     };
      for (let j = 0; j < inputSource.length; j++) {
        inputSource[j].classList.remove('seeForm');
        if (i !== 0) {
       if (j === (i-1)) inputSource[j].classList.add('seeForm');
        }
      }

    for (let j = 0; j <  ovalsSource.length; j++) {
      ovalsSource[j].classList.add('oval-anim');
      circlesSource[j].classList.add('circle-anim');

      if (j === i) {
        ovalsSource[j].classList.remove('oval-anim');
        circlesSource[j].classList.remove('circle-anim');
      }
    }
  })
  window.addEventListener('beforeunload', setLocalStorageSource);
 }



translatePhoto_sourse();

 const Change_lang = document.getElementById('Change_language');
 Change_lang.style.display = 'none';

 if (Change_lang.querySelectorAll('.on-off').length === 1) {
  const onOff = Change_lang.querySelector('.on-off');
  let keys = Object.keys(stateEn);
  // settingsChange.id = keys[0];
  stateEn[keys[2]].forEach(el => {
    if (onOff.querySelector('.text').textContent === ''){
      onOff.querySelector('.text').id = el;
      onOff.querySelector('.text').textContent = el.substring(0,1).toUpperCase() + el.substring(1);
      onOff.querySelector('.oval').id = el;
      
    } else {
    const clone = onOff.cloneNode(true);
    clone.querySelector('.text').id = el;
    clone.querySelector('.text').textContent = el.substring(0,1).toUpperCase() + el.substring(1);
    clone.querySelector('.oval').id = el;
    Change_lang.append(clone);
    }
  })
  }  

  function translateChange_langObj(language = stateEn['Change language'][0]) {
    let state = stateEn;
    if (language === stateEn['Change language'][1]) state = stateRu;
    const onOff = Change_lang.querySelectorAll('.on-off');
    let keys = Object.keys(state);
    for (let i = 0; i < onOff.length; i++) {
      onOff[i].querySelector('.text').textContent = state[keys[2]][i].substring(0,1).toUpperCase() + state[keys[2]][i].substring(1);
    }
  }
  translateChange_langObj();

 

function translateChange_lang( language = stateEn['Change language'][0]) {
  if (language === stateEn['Change language'][1]) {
    Change_lang.querySelector('h3.text').textContent = 'Сменить язык';
    Change_lang.querySelector('.description').textContent = 'Выберите ваш язык';
    Change_lang.querySelector('h4').textContent = 'ЯЗЫКИ';
  } else {
 Change_lang.querySelector('h3.text').textContent = 'Change language';
 Change_lang.querySelector('.description').textContent = 'Choose your language';
 Change_lang.querySelector('h4').textContent = 'LANGUAGES';
  }
}

 const ovalsLang = Change_lang.querySelectorAll('.oval');
 const circlesLang = Change_lang.querySelectorAll('.circle');
 ovalsLang[ovalsLang.length - 1].classList.add('oval-anim');
 circlesLang[circlesLang.length -  1].classList.add('circle-anim');



 for (let i = 0 ; i < ovalsLang.length; i++) {

   function setLocalStorageLang() {
    for (let i = 0 ; i < ovalsLang.length; i++) {
     localStorage.setItem(`${ovalsLang[i].id}`,JSON.stringify([ovalsLang[i].className, circlesLang[i].className, lang, navItem[0].textContent,navItem[1].textContent, navItem[2].textContent, linksText.textContent, name.placeholder, city.placeholder, inputSource[0].placeholder, inputSource[1].placeholder]));
    }
  }
 
  function getLocalStorageLang() {
    if(localStorage.getItem(`${ovalsLang[i].id}`)) {
      for (let i = 0 ; i < ovalsLang.length; i++) {
      ovalsLang[i].className = JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[0];
      circlesLang[i].className = JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[1];
      }
      lang = JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[2];
      
      navItem[0].textContent = JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[3];
      navItem[1].textContent = JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[4];
      navItem[2].textContent = JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[5];
      linksText.textContent =  JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[6];
      name.placeholder = JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[7];
      city.placeholder = JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[8];
      inputSource[0].placeholder = JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[9];
      inputSource[1].placeholder = JSON.parse(localStorage.getItem(`${ovalsLang[i].id}`))[10];

      getCity(lang);


      showDate(lang);
      getGreeting(lang);
      getWeather(lang);
      getQuotes(lang);
      
      translateLinks(lang);

      translateGeneralsObj(lang);
      translateGenerals(lang);

      translatePhoto_sourseObj(lang);
      translatePhoto_sourse(lang);

      translateChange_langObj(lang);
      translateChange_lang(lang);
    }
  }

  window.addEventListener('load', getLocalStorageLang);

  
  ovalsLang[i].addEventListener('click', function(){
    for (let i = 0 ; i < ovalsLang.length; i++) {
    ovalsLang[i].classList.toggle('oval-anim');
    circlesLang[i].classList.toggle('circle-anim');
    }

     if (ovalsLang[0].className.includes('oval-anim')) {
       lang = stateEn['Change language'][1];
          if (city.value.trim() === '' || city.value === "Minsk") city.value = "Минск";
       for (let i = 0; i < inputSource.length; i++){
        inputSource[i].placeholder = '[Введите тему на английском] Пример:morning';
       };
       
       name.placeholder = '[Введите имя]';
       city.placeholder='[Введите город]';
       
       navItem[0].textContent = 'Основные';
       navItem[1].textContent  = 'Источник фото';
       navItem [2].textContent  = 'Сменить язык';

       linksText.textContent = 'Ссылки';

       showDate(lang);
       getGreeting(lang);
        getWeather(lang);
        getQuotes(lang);

        translateLinks(lang);

        translateGeneralsObj(lang);
        translateGenerals( lang);

        translatePhoto_sourseObj(lang);
        translatePhoto_sourse(lang);

        translateChange_langObj(lang);
        translateChange_lang(lang);

        setLocalStorageLang();
        getLang();
       
        
      } else {
       lang = stateEn['Change language'][0];
       if (city.value.trim() === '' || city.value === "Минск") city.value = "Minsk";;
      
       name.placeholder = '[Enter name]';
       city.placeholder='[Enter city]';
       
       for (let i = 0; i < inputSource.length; i++){
        inputSource[i].placeholder = '[Enter topic on English] Example:morning';
       };

       navItem[0].textContent  = 'Generals';
       navItem[1].textContent  = 'Photo source';
       navItem [2].textContent  = 'Change languge';

       linksText.textContent = 'Links';
        showDate(lang);
        getGreeting(lang);
        getWeather(lang);
        getQuotes(lang);

        translateLinks(lang);

        translateGeneralsObj();
        translateGenerals();
        
        translatePhoto_sourseObj();
        translatePhoto_sourse();

        translateChange_langObj();
        translateChange_lang();
        
        setLocalStorageLang();
        getLang();
      }
  })
   window.addEventListener('beforeunload', setLocalStorageLang);
 }

translateChange_lang();



const createBtn = document.querySelector('.createBtn');
const saveBtn = document.querySelector('.saveBtn');
saveBtn.style.display = 'none';

const spanEdit = document.createElement('span');
const spanDel = document.createElement('span');

spanEdit.classList.add('edit');
spanDel.classList.add('del');



function translateLinks(language = stateEn['Change language'][0]) {
  if (language === stateEn['Change language'][1]) {
     linksText.textContent = 'Ссылки';
     document.querySelectorAll('.New_Link')[1].textContent = 'Новые Ссылки';
     document.querySelector('.formName label').textContent = 'НАЗВАНИЕ';
     document.querySelector('.formLinks label').textContent = 'ССЫЛКИ';
     document.querySelector('.createBtn span').textContent = 'Создать';
     saveBtn.querySelector('span').textContent = 'Сохранить';
     for (let i = 0; i < document.querySelectorAll('.edit').length; i++) {
      document.querySelectorAll('.edit')[i].textContent = 'Редактировать';
      document.querySelectorAll('.del')[i].textContent = 'Удалить';
     }
  } else {
    linksText.textContent = 'Links';
    document.querySelectorAll('.New_Link')[1].textContent = 'New Links';
    document.querySelector('.formName label').textContent = 'NAME';
    document.querySelector('.formLinks label').textContent = 'LINKS';
    document.querySelector('.createBtn span').textContent = 'Create';
    saveBtn.querySelector('span').textContent = 'Save';
    for (let i = 0; i < document.querySelectorAll('.edit').length; i++) {
      document.querySelectorAll('.edit')[i].textContent = 'Edit';
      document.querySelectorAll('.del')[i].textContent = 'Delete';
     }
  }
} 
translateLinks(lang);



settingsIcon.addEventListener('click', function() {
  Generals.style.display = 'flex';
  Change_lang.style.display = 'none';
  Photo_sourse.style.display = 'none';
  navItem[0].classList.add('activeLi');
  navItem[1].classList.remove('activeLi');
  navItem[2].classList.remove('activeLi');
  settingsIcon.classList.toggle('settings-iconOnclick');
  settings.classList.toggle('active');
})

changeLang.addEventListener('click', function(){
  Generals.style.display = 'none';
  Change_lang.style.display = 'flex';
  Photo_sourse.style.display = 'none';
  navItem[2].classList.add('activeLi');
  navItem[1].classList.remove('activeLi');
  navItem[0].classList.remove('activeLi');
})

navItem[0].addEventListener('click', function(){
  Generals.style.display = 'flex';
  Change_lang.style.display = 'none';
  Photo_sourse.style.display = 'none';
  navItem[0].classList.add('activeLi');
  navItem[1].classList.remove('activeLi');
  navItem[2].classList.remove('activeLi');
})

navItem[1].addEventListener('click', function(){
  Generals.style.display = 'none';
  Change_lang.style.display = 'none';
  Photo_sourse.style.display = 'flex';
  navItem[0].classList.remove('activeLi');
  navItem[1].classList.add('activeLi');
  navItem[2].classList.remove('activeLi');
})



  // function hideBlock() {
  //   oval.classList.toggle('oval-anim');
  //   circle.classList.toggle('circle-anim');
  // }

  // oval.addEventListener('click', function(e){
  //   hideBlock();
  //   console.log(e.target.id);
  //   quote.classList.toggle('hidden');
  //   author_.classList.toggle('hidden');
  // });
  
linksText.addEventListener('click', function() {
  if (form.className.includes('active')){
     form.classList.remove('active');
     links.classList.remove('active');
  } else {
    linksText.classList.toggle('links-textOnClick');
    links.classList.toggle('active');
  }
})

const createLink = document.querySelector('.newForm');
const form = document.querySelector('.form');
const comeback = document.querySelector('.arrow');
const formName = document.querySelector('.formName input');
const formLinks = document.querySelector('.formLinks input');

createLink.addEventListener('click', function(){
  links.classList.remove('active');
  form.classList.add('active');
  formName.value = '';
  formLinks.value = '';
})

comeback.addEventListener('click', function(){
  links.classList.add('active');
  form.classList.remove('active');
  setTimeout(() => {
    createBtn.style.display = 'block';
    saveBtn.style.display = 'none';
  }, 500);

})

document.addEventListener('click', function(e){
  if (!(e.composedPath().includes(settingsIcon) || e.composedPath().includes(settings ))) {
    settingsIcon.classList.remove('settings-iconOnclick');
    settings.classList.remove('active');
  }
  
  if (!((e.target === linksText) || e.composedPath().includes(links) || e.composedPath().includes(form))) {
    linksText.classList.remove('links-textOnClick');
    links.classList.remove('active');
    form.classList.remove('active');
    setTimeout(() => {
      createBtn.style.display = 'block';
      saveBtn.style.display = 'none';
    }, 500);
  }
})

// Часы и Календарь

const time = document.querySelector('.time');
const _date = document.querySelector('.date');

function showTime() {
 const date = new Date();
 const currentTime = date.toLocaleTimeString();
 time.textContent = currentTime;
 setTimeout(showTime,1000);
  }
  showTime();


function showDate(language = lang) {
 const date = new Date();
 const options = {weekday: 'long', month: 'long', day:'numeric'};
 let currentDate = '';
 
 if (language === stateEn['Change language'][0]) { 
  currentDate = date.toLocaleDateString('en-Us', options);
}
if (language === stateEn['Change language'][1]) { 
  currentDate = date.toLocaleDateString('ru-Ru', options).substring(0,1).toUpperCase() + date.toLocaleDateString('ru-Ru', options).substring(1);
 }
 _date.textContent = currentDate;
 setTimeout(showDate,1000);
}
showDate(lang);


// Приветствие

const greetingTranslation = {
  ru : 'Добр',
  en : 'Good'
};
const greeting = document.querySelector('.greeting');
function getTimeOfDay(language = lang) {
  let arrTime = [];
    if (language === stateEn['Change language'][0]) {
     arrTime = ['night', 'morning', 'afternoon', 'evening'];
    }
    if (language === stateEn['Change language'][1]) {
      arrTime = ['ой ночи', 'ое утро', 'ый день', 'ый вечер'];
    }
    const date = new Date();
    const hours = date.getHours();

    switch(true) {
    case (Math.trunc(hours/6) === 1) :
        return arrTime[1];
    case (Math.trunc(hours/6) === 2) :
            return arrTime[2];
    case (Math.trunc(hours/6) === 3) :
            return arrTime[3];
    default: 
            return arrTime[0]; 
    }
}



function getGreeting(language = lang) {
    const timeOfDay = getTimeOfDay(language);
    let greetingText = '';
    if (language === stateEn['Change language'][0]) {
     greetingText = `${greetingTranslation.en} ${timeOfDay}`;
    }
    if (language === stateEn['Change language'][1]) {
      greetingText = `${greetingTranslation.ru}${timeOfDay}`;
     }
    greeting.textContent = greetingText;
    setTimeout(getGreeting,1000);
}
getGreeting(lang);



function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage);


// Слайдер
const body = document.getElementsByTagName('body')[0];
function getRandomNum() {
    const min = 1;
    const max = 20;
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  let randomNum = getRandomNum();

 function setBg() {
    const timeOfDay = getTimeOfDay(stateEn['Change language'][0]);
    const bgNum = String(randomNum).padStart(2,"0");

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/Vadim992/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {      
      body.style.backgroundImage = `url('${img.src}')`;
    };
 }
 setBg();


 function getSlideNext() {
   switch(num) {
    case 1:
      getLinkToImageUnsplashAPI();
      break;
    case 2:
      getLinkToImageFlickrAPI()
      break;
    default: 
    randomNum++;
    if (randomNum >20) {
      randomNum = 1;
       setBg();
    } else {
       setBg();
   }
 }
}


 function getSlidePrev() {
  switch(num) {
    case 1:
      getLinkToImageUnsplashAPI();
      break;
    case 2:
      getLinkToImageFlickrAPI()
      break;
    default: 
    randomNum--;
    if (randomNum < 1) {
      randomNum = 20;
       setBg();
    } else {
       setBg();
    }
   }
 }

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);

// Виджет погоды
// https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=0eef39d4f989e4b2cf5f2e4ecb7a91d0&units=metric
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity')

const errorWeather = document.querySelector('.weather-error');

  function getCity(language = stateEn['Change language'][0]){
    city.value = "Minsk";
    if (language  === stateEn['Change language'][1]) city.value = 'Минск';
  }
  getCity(lang);
  name.placeholder = '[Enter name]';
  city.placeholder='[Enter city]';


async function getWeather(language = stateEn['Change language'][0]) { 
  let weatherLang = 'en';
  if (language === stateEn['Change language'][1]){
    weatherLang = 'ru';
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${weatherLang}&appid=0eef39d4f989e4b2cf5f2e4ecb7a91d0&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  let windSpeed = '';
  let hmdt = '';

  if (language === stateEn['Change language'][0]) {
    windSpeed = 'Wind speed';
    hmdt = 'Humidity';
  }
  if (language === stateEn['Change language'][1]) {
    windSpeed = 'Скорость ветра';
    hmdt = 'Влажность';
  }


  if (data.cod !== 200) {
    if  (language === stateEn['Change language'][0]) {
    errorWeather.textContent = `Error! ${data.message} for '${city.value}'!`;
    } else if (language === stateEn['Change language'][1] && city.value === '') {
      errorWeather.textContent = `Ошибка! Нечего геокодировать для '${city.value}'!`;
    } else if (language === stateEn['Change language'][1] && city.value !== '') {
      errorWeather.textContent = `Ошибка! город не найден для '${city.value}'!`;
    }
    weatherIcon.className = '';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
  } else {
    errorWeather.textContent = '';
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `${windSpeed}: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `${hmdt}: ${Math.round(data.main.humidity)}%`;
  }
}
getWeather(lang);
document.addEventListener('click',function(e) {
  if (!(e.target === city)) {
  getWeather(lang);
  }
});
document.addEventListener('keydown', function(e){
  if (e.key === "Enter") {
   getWeather(lang);
  }
});

function setLocalStorageWeather() {
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorageWeather);

function getLocalStorageWeather() {
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
    getWeather(lang);
  }
}
window.addEventListener('load', getLocalStorageWeather);

// Цитата дня


async function getQuotes(language = stateEn['Change language'][0]) {  
  let quotes = '';
  if (language === stateEn['Change language'][0]) {
    quotes = 'data.json';
  }
  if (language === stateEn['Change language'][1]) {
    quotes = 'data_ru.json';
  }
  const res = await fetch(quotes);
  const data = await res.json(); 
     function getRandomNumQuotes() {
      const min = 0;
      const max = data.length - 1;
      return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  const index = getRandomNumQuotes();
  quote.textContent = data[index].text;
  author_.textContent = data[index].author;
}
getQuotes(lang);

changeQuote.addEventListener('click',() => {
  changeQuote.style.transform = `rotate(180deg)`;
  changeQuote.style.transition = '.3s';

  setTimeout(() => {
    changeQuote.style.transform = `rotate(0deg)`;
    changeQuote.style.transition = '0s';
  },300 )
  
  getQuotes(lang);
});


changeQuote.removeEventListener('click',() => {
  changeQuote.style.transform = `rotate(180deg)`;
  changeQuote.style.transition = '.3s';

  setTimeout(() => {
    changeQuote.style.transform = `rotate(0deg)`;
    changeQuote.style.transition = '0s';
  },300 )
  
  getQuotes(lang);
});


// Аудиоплеер

let isPlay = false;
let playNum = 0;
let prevNum = 0;
const play = document.querySelector('.play');
const play_Prev = document.querySelector('.play-prev');
const play_Next = document.querySelector('.play-next');
const durationPlayer = document.querySelector('.duration-player');
const liveDuration = document.querySelector('.duration');
const songDuration = document.querySelector('.song-duration');
const timer = document.querySelector('.timer');

const volumeIcon = document.querySelector('.volume-icon');
const bar = document.querySelector('.bar');
const volumeBar = document.querySelector('.volume-bar');
const songName = document.querySelector('.songName');

import playList from "./playList.js";

playList.forEach(el => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const div = document.createElement('div');
  const playListContainer = document.querySelector('.play-list');
  li.classList.add('play-item');
  div.classList.add('playLi');
  span.textContent = el.title;
 
  li.append(span);
  li.append(div);
  playListContainer.append(li);
});

const arrLi = document.querySelectorAll('.play-item');
const arrPlay = document.querySelectorAll('.playLi')

const audio = new Audio();

function progressBar() {
  liveDuration.style.width = audio.currentTime / audio.duration * 100 + "%";
  timer.textContent = getTimeOfMusic(Math.trunc(audio.currentTime));
}

function playAudio(currentTime = 0, volume = .5) {
  audio.src = playList[playNum].src;

  songName.textContent = playList[playNum].title;

  arrLi[prevNum].classList.remove('item-active');
  arrLi[playNum].classList.add('item-active');
  arrPlay[prevNum].classList.remove('pause');
  arrPlay[playNum].classList.add('pause');

  audio.currentTime = currentTime;
  audio.volume = volume;
  audio.play();
  audio.addEventListener('loadeddata', function(){
    songDuration.textContent = getTimeOfMusic(Math.trunc(audio.duration));
    setInterval(progressBar, 200);
  })
  audio.onended = () => {
    playNext();
    playAudio(0,audio.volume);
  };
}

function pauseAudio() {
  audio.pause();
}

function getTimeOfMusic(num) {
   const minutes = String(Math.trunc(num/60)).padStart(2,'0');
   const seconds = String(num % 60).padStart(2,'0');
   return `${minutes}:${seconds}`;
}

durationPlayer.addEventListener('click', function(e){
  const length = parseInt(getComputedStyle(durationPlayer).width);
  const Num = playList[playNum].duration.split(':').map((item,index) => index === 0 ? item = Number(item)*60 : item = Number(item)).reduce((sum,item) => sum + item, 0);
  liveDuration.style.width = `${e.offsetX/length * 100}%`;
  if (!isPlay && isNaN(audio.duration) === true) {
    audio.currentTime = e.offsetX/length * Num;
    timer.textContent = getTimeOfMusic(Math.trunc(audio.currentTime));
  } else {
    audio.currentTime = e.offsetX/length * audio.duration;
  }
})


function moveCircle(pageX) {
  const length = parseInt(getComputedStyle(bar).width) - parseInt(getComputedStyle(volumeBar).width);
  let volume = (pageX - bar.getBoundingClientRect().left - .5 * parseInt(getComputedStyle(volumeBar).width))/length;
  volumeIcon.style.opacity = '1';
  volume > 1 ? audio.volume = 1 : (volume < 0 ? audio.volume = 0 : audio.volume = volume);
  volumeBar.style.marginLeft = audio.volume * length + 'px';
}

function mouseMove(event){
  moveCircle(event.pageX);
}

bar.addEventListener('mousedown', function(e){
  moveCircle(e.pageX);

  bar.addEventListener('mousemove',mouseMove);

  bar.addEventListener('mouseup', function(){
    bar.removeEventListener('mousemove',mouseMove);
  })
  document.addEventListener('mouseup', function(){
    bar.removeEventListener('mousemove',mouseMove);
  })
})


volumeIcon.style.opacity = '1';
let bufVolume;
audio.volume = .5;
volumeIcon.addEventListener('click', function(){
  const length = parseInt(getComputedStyle(bar).width) - parseInt(getComputedStyle(volumeBar).width);
  if (volumeIcon.style.opacity === '1'){
    volumeIcon.style.opacity = '.4';
    bufVolume = audio.volume;
     audio.volume = 0;
     volumeBar.style.marginLeft = '0px';
  } else {
    volumeIcon.style.opacity = '1';
    audio.volume = bufVolume;
    volumeBar.style.marginLeft = audio.volume * length + 'px';
  }
})

function playNext() {
  
  prevNum = playNum;
  playNum++;
  playNum > playList.length - 1 ? playNum = 0 : playNum;

}
function playPrev() {
  
  prevNum = playNum;
  playNum--;
  playNum < 0 ? playNum = playList.length - 1 : playNum;
}

function toggleBtn() {
  play.classList.toggle('pause');
}

for (let i = 0; i < arrPlay.length; i++) {
  arrPlay[i].addEventListener('click', function(){
    if (i !== playNum) audio.currentTime = 0;
    prevNum = playNum;
    playNum = i;
    if (arrPlay[i].className.includes('pause')) {
      isPlay = false;
      play.classList.remove('pause');
      arrPlay[i].classList.remove('pause');
      pauseAudio();
    } else { 
      arrPlay[i].classList.add('pause');
      play.classList.add('pause');
      isPlay = true;
      playAudio(audio.currentTime, audio.volume);
    }
  })
}

play.addEventListener('click', function(){
  toggleBtn();
  arrPlay[playNum].classList.toggle('pause');
  if (!isPlay) {
    isPlay = true;
    playAudio(audio.currentTime, audio.volume);
  } else {
    isPlay = false;
    pauseAudio();
  }
});

play_Prev.addEventListener('click', function() {
  if (!play.classList.contains('pause')) {
    toggleBtn();
  }
  isPlay = true;
  playPrev();
  playAudio(0,audio.volume);
});

play_Next.addEventListener('click', function() {
  if (!play.classList.contains('pause')) {
    toggleBtn();
  }
  isPlay = true;
  playNext();
  playAudio(0,audio.volume);
});

// Продвинутый плеер


// Получение фонового изображения 

async function getLinkToImageUnsplashAPI() {

  const timeOfDay = getTimeOfDay(stateEn['Change language'][0]);
  let url = '';
  if (inputSource[0].value === '') {
   url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=cS66E96WhmtGX-CkOB0_iwmCzC5txOrYSAyowzACZn4`;
  } else {
    url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${inputSource[0].value}&client_id=cS66E96WhmtGX-CkOB0_iwmCzC5txOrYSAyowzACZn4`;
  }
  const res = await fetch(url);
  const data = await res.json();
  const img = new Image();
  img.src = data.urls.regular;
  img.onload = () => {      
    body.style.backgroundImage = `url('${img.src}')`;
  };
  // body.style.backgroundImage = `url(${data.urls.regular})`;
  }
//   getLinkToImageUnsplashAPI();

  async function getLinkToImageFlickrAPI() {
    
    const timeOfDay = getTimeOfDay(stateEn['Change language'][0]);
    let url = '';
     if (inputSource[1].value === '') {
      url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d06854b9cc7c89c4aed590658d9896ff&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
     } else {
     url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d06854b9cc7c89c4aed590658d9896ff&tags=${inputSource[1].value}&extras=url_l&format=json&nojsoncallback=1`;
     }

      const res = await fetch(url);
      const data = await res.json();
      function getRandomNumFlickr() {
        const min = 0;
        const max = data.photos.photo.length - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    const index = getRandomNumFlickr();

    const img = new Image();
    img.src = data.photos.photo[index].url_l;
    img.onload = () => {      
      body.style.backgroundImage = `url('${data.photos.photo[index].url_l}')`;
    };
     }

let inputValue = [];

for (let i = 0; i < inputSource.length; i++) {
   getLocalStorageAPI();
   inputValue[i] = inputSource[i].value;
   document.addEventListener('click', function(e){
     if (!(e.target === inputSource[i])) {
       let text = inputSource[i].value;
       if (text === inputValue[i]){
       
       } else {
   
        i === 0 ? getLinkToImageUnsplashAPI() : getLinkToImageFlickrAPI();
        inputValue[i] = inputSource[i].value;
       }
     }
   })
   settings.addEventListener('keydown', function(e){
    if (e.key === "Enter") {
      if (e.target === inputSource[i]) {
        let text = inputSource[i].value;
        if (text === inputValue[i]){
        
        } else {
        
         i === 0 ? getLinkToImageUnsplashAPI() : getLinkToImageFlickrAPI();
         inputValue[i] = inputSource[i].value;
        }
      }
    }
  });
}




let addLi = document.querySelectorAll('.addLi');
let tochkiBack = document.querySelectorAll('.tochkiBack');

let editDel = document.querySelectorAll('.Edit-del');

const li =document.createElement('li');
const a = document.createElement('a');
const aImg = document.createElement('a');

const img = document.createElement('img');

const divParent = document.createElement('div');
const div = document.createElement('div');

const divDel = document.createElement('div');

spanEdit.textContent = 'Edit';
spanDel.textContent = 'Delete';

function getLang() {
  if(localStorage.getItem(`${ovalsLang[0].id}`)) {
    lang = JSON.parse(localStorage.getItem(`${ovalsLang[0].id}`))[2];
    spanEdit.textContent = 'Edit';
    spanDel.textContent = 'Delete';

if (lang === stateEn['Change language'][1]) {
spanEdit.textContent = 'Редактировать';
spanDel.textContent = 'Удалить';
}
  }
}

getLang()






let aMas = [];
let aImgMas = [];

let index = 0;

let nameValue = [];
let  linksValue = [];





     function addEventLinks(addArr, tochki,edit) {
      addArr.onmouseover = function() {
        tochki.classList.add('active');
      }

      addArr.onmouseout = function(e) {
        if (!(e.target === edit)) {
          tochki.classList.remove('active');
      }
    }
       
      tochki.onclick = function() {
        edit.classList.toggle('active');
        tochki.classList.add('active');
      }
     }



    function setLocalStorageLi() {
      localStorage.setItem('elemNum', JSON.stringify([nameValue, linksValue]))
    }

createBtn.addEventListener('click', function(){
  if (formName.value.trim() === ''|| formLinks.value.trim() === '') {
     if (formName.value.trim() === '') {
      formName.style.background = 'rgba(231, 242, 12, 0.5)';
      formName.style.transition = '.2s';
      setTimeout(() => {
        formName.style.background = 'rgb(255, 255, 255)';
        formName.style.transition = '.2s';
      }, 300);
     }
     if (formLinks.value.trim() === '') {
       formLinks.style.background = 'rgba(231, 242, 12, 0.5)';
       formName.style.transition = '.2s';
       setTimeout(() => {
        formLinks.style.background = 'rgb(255, 255, 255)';
        formLinks.style.transition = '.2s';
      }, 300);
     }
  }  else {
     
     li.classList.add('textLi');
     li.classList.add('addLi');
     
     aImg.classList.add('aImg')
     aImg.href = 'https://' + formLinks.value;
     img.src = './assets/svg/rocket.svg';
     img.alt = '';
     aImg.append(img);
     li.append(aImg);

     a.classList.add('siteName');
     a.href = 'https://' + formLinks.value;
     a.textContent = formName.value;
     li.append(a);

     divParent.classList.add('tochkiBack');
     div.classList.add('tochki');
   
     if (!divParent.contains(div)) {
      for (let i = 0; i < 3;i++) { 
        i === 0 ? divParent.append(div) : divParent.append(div.cloneNode(true));
      }
    }

      divDel.classList.add('Edit-del');
      divDel.append(spanEdit);
      divDel.append(spanDel);

     
     li.append(divParent);
     li.append(divDel);
     createLink.before(li.cloneNode(true));

     links.classList.add('active');
     form.classList.remove('active');
     
     links.style.top = `${- links.offsetHeight}px`;
     
     if (parseInt(links.style.top) <= -250) {
      links.style['overflow-y'] = 'auto';
      links.style['overflow-x'] = 'hidden';
      links.style.top = '-250px';
     }

     for (let i = 0; i < nameValue.length; i++) {
            
      if (nameValue[i] === undefined) {
        nameValue.splice(i,1);
        linksValue.splice(i,1);
        i--; 
      }
     }
  
      addLi = document.querySelectorAll('.addLi');
      tochkiBack = document.querySelectorAll('.tochkiBack');
      editDel = document.querySelectorAll('.Edit-del');
      

      for (let i = 0 ; i < addLi.length; i++) {

      document.addEventListener('click',function(e){
        if (!(e.composedPath().includes(editDel[i]) || e.composedPath().includes(tochkiBack[i]))) {
          if ( editDel[i] !== undefined) {
          editDel[i].classList.remove('active');
          }
        }
      })
    }

    aMas = document.querySelectorAll('.addLi .siteName');
    aImgMas = document.querySelectorAll('.addLi .aImg'); 
    nameValue[addLi.length-1] = formName.value;
    linksValue[addLi.length-1] = formLinks.value;

    setLocalStorageLi();
   

      for (let i = 0 ; i < addLi.length; i++) {


        addEventLinks(addLi[i], tochkiBack[i],editDel[i]);


        editDel[i].querySelectorAll('span')[1].onclick = function() {
         addLi[i].remove();
        
         delete nameValue[i];
         delete linksValue[i];
         setLocalStorageLi();
          links.style.top = `${- links.offsetHeight}px`;
          if (parseInt(links.style.top) > -250) {
            links.style['overflow-y'] = 'hidden';
            links.style['overflow-x'] = 'hidden';
          }
        }

        editDel[i].querySelectorAll('span')[0].onclick = function() {
          form.classList.add('active');
          formName.value = nameValue[i];
          formLinks.value = linksValue[i];
          createBtn.style.display = 'none';
          saveBtn.style.display = 'block';
          index = i;
         }
        }

     formName.value = '';
     formLinks.value = '';
  }
})



saveBtn.addEventListener('click', function(){
 
  if (formName.value.trim() === ''|| formLinks.value.trim() === '') {
    if (formName.value.trim() === '') {
     formName.style.background = 'rgba(231, 242, 12, 0.5)';
     formName.style.transition = '.2s';
     setTimeout(() => {
       formName.style.background = 'rgb(255, 255, 255)';
       formName.style.transition = '.2s';
     }, 300);
    }
    if (formLinks.value.trim() === '') {
      formLinks.style.background = 'rgba(231, 242, 12, 0.5)';
      formName.style.transition = '.2s';
      setTimeout(() => {
       formLinks.style.background = 'rgb(255, 255, 255)';
       formLinks.style.transition = '.2s';
     }, 300);
    }
 }  else {
  
  aImgMas[index].href = 'https://' + formLinks.value;
  aMas[index].href = 'https://' + formLinks.value;
  aMas[index].textContent = formName.value;


  links.classList.add('active');
  form.classList.remove('active');
  createBtn.style.display = 'block';
    saveBtn.style.display = 'none';
    nameValue[index] = formName.value;
    linksValue[index] = formLinks.value;
    formName.value = '';
    formLinks.value = '';
  setLocalStorageLi();
   
 }
})

window.addEventListener('beforeunload', setLocalStorageLi);


function getLocalStorageLi() {
    if(localStorage.getItem('elemNum')) {
      let num = 0;
      
      num = JSON.parse(localStorage.getItem('elemNum'))[0].length;


      for (let i = 0; i < num; i++ ) {
        nameValue[i] = JSON.parse(localStorage.getItem('elemNum'))[0][i];
        linksValue[i] = JSON.parse(localStorage.getItem('elemNum'))[1][i]; 
      }




      for (let i = 0; i < num; i++ ) {
        if (nameValue[i] === null) {

          nameValue.splice(i,1);
          linksValue.splice(i,1);
          i--; 
          num = nameValue.length;
        }
      }

  for (let i = 0; i < num; i++) {

      li.classList.add('textLi');
     li.classList.add('addLi');
     
     aImg.classList.add('aImg')
     aImg.href = 'https://' + linksValue[i];
     img.src = './assets/svg/rocket.svg';
     img.alt = '';
     aImg.append(img);
     li.append(aImg);

     a.classList.add('siteName');
     a.href = 'https://' + linksValue[i];
     a.textContent = nameValue[i];
     li.append(a);

     divParent.classList.add('tochkiBack');
     div.classList.add('tochki');
   
     if (!divParent.contains(div)) {
      for (let i = 0; i < 3;i++) { 
        i === 0 ? divParent.append(div) : divParent.append(div.cloneNode(true));
      }
    }

      divDel.classList.add('Edit-del');
      divDel.append(spanEdit);
      divDel.append(spanDel);

     
     li.append(divParent);
     li.append(divDel);
     createLink.before(li.cloneNode(true));


     
     links.style.top = `${- links.offsetHeight}px`;
     
     if (parseInt(links.style.top) <= -250) {
      links.style['overflow-y'] = 'auto';
      links.style['overflow-x'] = 'hidden';
      links.style.top = '-250px';
     }

     addLi = document.querySelectorAll('.addLi');
     tochkiBack = document.querySelectorAll('.tochkiBack');
     editDel = document.querySelectorAll('.Edit-del');
     


     document.addEventListener('click',function(e){
       if (!(e.composedPath().includes(editDel[i]) || e.composedPath().includes(tochkiBack[i]))) {
         if ( editDel[i] !== undefined) {
         editDel[i].classList.remove('active');
         }
       }
     })
   
   aMas = document.querySelectorAll('.addLi .siteName');
   aImgMas = document.querySelectorAll('.addLi .aImg'); 

   addEventLinks(addLi[i], tochkiBack[i],editDel[i]);


        editDel[i].querySelectorAll('span')[1].onclick = function() {
         addLi[i].remove();
         
         delete nameValue[i];
         delete linksValue[i];
         setLocalStorageLi();
          links.style.top = `${- links.offsetHeight}px`;
          if (parseInt(links.style.top) > -250) {
            links.style['overflow-y'] = 'hidden';
            links.style['overflow-x'] = 'hidden';
          }
        }

        editDel[i].querySelectorAll('span')[0].onclick = function() {
          form.classList.add('active');
          formName.value = nameValue[i];
          formLinks.value = linksValue[i];
          createBtn.style.display = 'none';
          saveBtn.style.display = 'block';
          index = i;
         }

         if (lang === stateEn['Change language'][1]) {
           document.querySelectorAll('.edit')[i].textContent = 'Редактировать';
           document.querySelectorAll('.del')[i].textContent = 'Удалить';
       } else {
           document.querySelectorAll('.edit')[i].textContent = 'Edit';
           document.querySelectorAll('.del')[i].textContent = 'Delete';
          }

} 
}
}
    
  
window.addEventListener('load', getLocalStorageLi);
//task.equaks()
