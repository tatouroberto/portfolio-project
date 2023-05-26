// const bars = document.getElementsByClassName('.bars');
const barss = document.querySelector('.bars');
const navElements = document.querySelector('.nav-elements');
const crossed = document.querySelector('.crossed');

barss.addEventListener('click', () => {
  crossed.classList.toggle('active');
  navElements.classList.toggle('active');
  document.body.classList.toggle('fixed-screen');
});

const close = () => {
  document.body.classList.remove('fixed-screen');
  crossed.classList.remove('active');
  navElements.classList.remove('active');
};

const listItem = (index, info, link) => {
  let x = `a${index}`;
  x = document.createElement('a');
  x.setAttribute('href', `#${link}`);
  x.textContent = info;
  x.addEventListener('click', () => {
    close();
  });
  return x;
};

const li0 = document.createElement('li');
const li1 = document.createElement('li');
const li2 = document.createElement('li');

li0.appendChild(listItem(0, 'Portfolio', 'card'));
li1.appendChild(listItem(1, 'About', 'about'));
li2.appendChild(listItem(2, 'Contact', 'contact'));

const ul = document.createElement('ul');

ul.appendChild(li0);
ul.appendChild(li1);
ul.appendChild(li2);

crossed.innerHTML = '';
crossed.appendChild(ul);


let project1 = {
  name: '<h2 class="titleh2">Tonic</h2>',
  description: '<p class="text" >'+
  'A daily selection of privately personalized reads; no accounts or sign-ups required.'+
'</p>',
  featuredImage: '<img src="img/Snapshoot-Portfolio.png" alt="a_screentshot" class="pic">'+
  '<img src="img/Snapshoot1-desk.png" alt="a_screentshot" class="desk-card-image">',
  technologies:        '<ul class="ul-tag">'+
  '<li class="tag">'+
      '<a href="" class="tag-in">HTML</a>'+
  '</li>'+
  '<li class="tag">'+
      '<a href="" class="tag-in" >CSS</a>'+
  '</li>'+
  '<li class="tag">'+
      '<a href="" class="tag-in">JavaScript</a>'+
  '</li>'+
'</ul>',
  languages:'<ul class="canopy">'+
  '<li class="cano"><a href="#" class="can">CANOPY</a></li>'+
  '<li><a href="#" class="canop ">Back End Dev</a></li>'+
  '<li><a href="#" class="canop">2015</a></li>'+
  '</ul>',
  liveVersion:'#',
  source: '#'
};

let project2 = {
  name: '<h2 class="titleh2"> Multi-Post Stories</h2>',
  description: '<p class="text">'+
  'A daily selection of privately personalized reads; no accounts or sign-ups required.'+
'</p>'+
'<p class="text-desk">'+
'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.'+
'</p>',
  featuredImage:'<img src="img/Snapshoot1.png" alt="a_screentshot" class="pic">',
  
  technologies: '<ul class="ul-tag-ruby">'+
  '<li class="tag">'+
      '<a href="">HTML</a>'+
  '</li>'+
  '<li class="tag ruby">'+
    '<a href="">Ruby on rails</a>'+
'</li>'+
  '<li class="tag">'+
      '<a href="" >CSS</a>'+
  '</li>'+
  '<li class="tag">'+
      '<a href="">JavaScript</a>'+
  '</li>'+
'</ul>',
languages:  '<ul class="canopy">'+
  '<li class="cano"><a href="#" class="can">CANOPY</a></li>'+
  '<li><a href="#" class="canop ">Back End Dev</a></li>'+
  '<li><a href="#" class="canop">2015</a></li>'+
'</ul>'+
  '<ul class="facebook">'+
    '<li class="cano"><a href="#" class="can">FACEBOOK</a></li>'+
    '<li><a href="#" class="canop STACK">Full stack dev</a></li>'+
    '<li><a href="#" class="canop">2015</a></li>'+
  '</ul>',
  liveVersion:'#',
  source: '#'
};

let project3 = {
  name:'<h2 class="titleh2">Facebook 360</h2>',
  description:'<p class="text">'+
  'A daily selection of privately personalized reads; no accounts or sign-ups required.'+
'</p>'+
'<p class="text-desk">'+
'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.'+
'</p>',
  featuredImage:'<img src="img/Snapshoot-desk3.png" alt="a_screentshot" class="desk-card-image">'+
  '<img src="img/Snapshoot2.png" alt="a_screentshot" class="pic">',
  languages:'<ul class="canopy">'+
  '<li class="cano"><a href="#" class="can">CANOPY</a></li>'+
  '<li><a href="#" class="canop ">Back End Dev</a></li>'+
  '<li><a href="#" class="canop">2015</a></li>'+
'</ul>'+
'<ul class="facebook">'+
  '<li class="cano"><a href="#" class="can">FACEBOOK</a></li>'+
  '<li><a href="#" class="canop STACK">Full stack dev</a></li>'+
  '<li><a href="#" class="canop">2015</a></li>'+
'</ul>',
  technologies:  '<ul class="ul-+tag-ruby">'+
  '<li class="tag">'+
      '<a href="">HTML</a>'+
  '</li>'+
  '<li class="tag ruby">'+
    '<a href="">Ruby on rails</a>'+
'</li>'+
  '<li class="tag">'+
      '<a href="" >CSS</a>'+
  '</li>'+
  '<li class="tag">'+
      '<a href="">JavaScript</a>'+
  '</li>'+
'</ul>',
liveVersion:'#',
source: '#'
};

let project4 = {
  name:'<h2 class="titleh2"> Uber Navigation</h2>',
  description:'<p class="text">'+
  'A daily selection of privately personalized reads; no accounts or sign-ups required.'+
'</p>'+
'<p class="text-desk">'+
'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.'+
'</p>',
  featuredImage:'<img src="img/Snapshoot3.png" alt="a_screentshot" class="pic">'+'<img src="img/Snapshoot-desk4.png" alt="a_screentshot" class="desk-card-image">',
  languages:'<ul class="canopy">'+
  '<li class="cano"><a href="#" class="can">CANOPY</a></li>'+
  '<li><a href="#" class="canop ">Back End Dev</a></li>'+
  '<li><a href="#" class="canop">2015</a></li>'+
'</ul>'+
  '<ul class="facebook">'+
    '<li class="cano"><a href="#" class="can">Uber</a></li>'+
    '<li><a href="#" class="canop STACK">lead Developer</a></li>'+
    '<li><a href="#" class="canop">2018</a></li>'+
  '</ul>',
  technologies:     '<ul class="ul-tag-ruby">'+
  '<li class="tag">'+
      '<a href="">HTML</a>'+
  '</li>'+
  '<li class="tag ruby">'+
    '<a href="">Ruby on rails</a>'+
'</li>'+
  '<li class="tag">'+
      '<a href="" >CSS</a>'+
  '</li>'+
  '<li class="tag">'+
      '<a href="">JavaScript</a>'+
  '</li>'+
'</ul>',
  liveVersion:'#',
  source: '#'
};


let cardData = [project1, project2, project3, project4];


const main_wrapper = document.querySelector('.main_wrapper');
//const main_wrapper = document.createElement('section');
//body.appendChild(main_wrapper)
//main_wrapper.classList.add('main_wrapper');
const card1 = document.createElement('div');
main_wrapper.appendChild(card1);
card1.classList.add('card');
card1.innerHTML= project1.featuredImage+
    '<div class="text-card">'+
    project1.name+
    project1.languages+
  
    project1.description+
  
    project1.technologies+
  
        '<a href="#" id="0" class="button project">See Project</a>'+
         '</div>'+
  
        
  
        '</div>'
      
        const card2 = document.createElement('div');
        main_wrapper.appendChild(card2);
        card2.classList.add('card');
        card2.classList.add('works');
        card2.innerHTML= project2.featuredImage+
  
    
        '<div class="text-card">'+
        project2.name+
        project2.languages+
        project2.description+
  
  
    
        project2.technologies+
    
        '<a href="#" id="1" class="button project">See Project</a>'+
         '</div>'+
         '<img src="img/Snapshoot-desk2.png" alt="a_screentshot" class="desk-card-image">'
  
        '</div>';

        const card3 = document.createElement('div');
        main_wrapper.appendChild(card3);
        card3.classList.add('card');
        card3.classList.add('works');
        card3.innerHTML=project3.featuredImage+
  
    '<div class="text-card">'+
        project3.name+
        project3.languages+
        project3.description+


  
   project3.technologies+
  
    '<a href="#"  id="2" class="button project">See Project</a>'+
     '</div>'+
  
  
    '</div>';

    const card4 = document.createElement('div');
        main_wrapper.appendChild(card4);
        card4.classList.add('card');
        card4.classList.add('works');
        card4.innerHTML=project4.featuredImage+
  
        '<div class="text-card">'+
          project4.name+
          project4.languages+
        project4.description+
    
    
      
        project4.technologies+
      
        '<a href="#" id="3" class="button project">See Project</a>'+
         '</div>'+
        
      
        
      
        '</div>';
        const popUpContainer = document.getElementById('mobilepopup-container');
        const buttons = document.querySelectorAll('.project');

        buttons.forEach((item) => {
          item.addEventListener('click', () => {
            const buttonId = item.id;
            const uploadMobileCard = cardData[buttonId];
            const mobilePopUp = document.createElement('div');
            mobilePopUp.classList.add('cardpop');
            mobilePopUp.id = 'mobilePopUpContainer';
            mobilePopUp.innerHTML = '<div class="mobile-title margin-mobile-popup">' + uploadMobileCard.name + 
            '<div id="close-mobile-popup">&#10006;</div>'+ '</div>' +
            
                                    '<div class="margin-mobile-popup">' + uploadMobileCard.languages + '</div>' +
                                    '<div class="margin-mobile-popup">' + uploadMobileCard.featuredImage + '</div>' +
                                    '<div class="margin-mobile-popup">' + uploadMobileCard.description + '</div>' +
                                    '<div class="margin-mobile-popup">' + uploadMobileCard.technologies + '</div>' +
                                    `      <div class="line-separation margin-mobile-popup">
                                    <img src="img/line.png"/>
                                  </div>
                            
                                  <div class="mobile-popup-button-container ">
                                    <button class="see-project-button-pop-up" type="button" href="${uploadMobileCard.liveVersion}">
                                      See live
                                      <img class="see-live-icon" src="img/liveIcon.png"/>
                                    </button>
                                 
                                    <button class="see-project-button-pop-up " type="button" href="${uploadMobileCard.source}">
                                      See source 
                                      <img class="github-see-source-icon" src="img/sourceIcon.png"/>
                                    </button>
                                  </div>  `;


                                    popUpContainer.appendChild(mobilePopUp);
                                    const closePopUpButton = document.getElementById('close-mobile-popup');
                                    
                                    const logoBar = document.querySelector('.header-sub');
                                    const main = document.querySelector('.main');
                                    const deskimage = document.querySelectorAll('.desk-card-image');
                                    logoBar.classList.toggle('active');
                                    main.classList.toggle('active');
                                    deskimage.classList.toggle('active');
                                    function closePopUp() {
                                      popUpContainer.removeChild(mobilePopUp);
                                      logoBar.classList.remove('active');
                                      main.classList.remove('active');
                                      deskimage.classList.remove('active');
                                    }
                                    closePopUpButton.addEventListener('click', closePopUp);
                                  });
                                });
