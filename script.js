//#####VERSION DESKTOP
//###FUNCIONES

//MOSTRAR MENU
var desktopMenu = document.getElementById('desktopMenu');

function showDesktopMenu(){
    if(!desktopMenu.classList.contains('visible')){
        desktopMenu.classList.add('visible');
    };
};

//##Div intro
var desktopIntro = document.getElementById('desktopIntro');
//Mostrar div intro
function openDesktopIntro(){
    if(!desktopIntro.classList.contains('visible')){
        desktopIntro.classList.add('visible');
    }
};

//Ocultar div intro
function closeDesktopIntro(){
    if(desktopIntro.classList.contains('visible')){
        desktopIntro.classList.remove('visible');
    }
};

//DIV NOSOTROS
var desktopUS = document.getElementById('desktopUS');

//Mostrar div nosotros
function openDesktopUs(){
    if(!desktopUS.classList.contains('visible')){
        desktopUS.classList.add('visible');
    }
};

//Ocultar div nosotros
function closeDesktopUs(){
    if(desktopUS.classList.contains('visible')){
        desktopUS.classList.remove('visible');
    };
};

//DIV SEGUINOS
var desktopFollow = document.getElementById('desktopFollow');

//Mostrar div seguinos
function openDesktopFollow(){
    if(!desktopFollow.classList.contains('visible')){
        desktopFollow.classList.add('visible');
    };
};

//Ocultar div seguinos
function closeDesktopFollow(){
    if(desktopFollow.classList.contains('visible')){
        desktopFollow.classList.remove('visible');
    };
};


setTimeout(openDesktopIntro, 1000);

//Abrir Maps
function openMaps(){
    window.open('https://www.google.com/maps/dir//el+10+de+villa+pueyrredon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x95bcb65260679e8d:0xddf134cf27df97f4?sa=X&ved=1t:3061&ictx=111','_blanked');
};

//Abrir facebook
function openFB(){
    window.open('https://www.facebook.com','_blanked');
}

//Abrir instagram
function openIG(){
    window.open('https://www.instagram.com','_blanked');
}

//Abrir wpp
function openWPP(){
    window.open('https://wa.me/541157389514','_blanked');
}



//DIV SERVICIOS
const divServices = document.getElementById('divServices');

//DIV FOOTER
const footer = document.getElementById('footer');


//WPP

//CARTEL WPP MOBILE
const wppMPhone = document.getElementById('wppPhone');


//FOOTER SOCIAL
const footerSocialInstagram = document.getElementById('footerSocialIG');
const footerSocialFacebook = document.getElementById('footerSocialFacebook');
const footerSocialMaps = document.getElementById('footerSocialMaps');
const footerSocialWhatsapp = document.getElementById('footerSocialWhatsapp');






//boton footer instagram
footerSocialInstagram.addEventListener('click', function(){
    window.open('https://www.instagram.com','_blank');
});

//boton footer facebook
footerSocialFacebook.addEventListener('click', openFB);

//boton footer maps
footerSocialMaps.addEventListener('click', openMaps);

//boton footer whatsapp

footerSocialWhatsapp.addEventListener('click', openWPP);

//##MENU DESKTOP



//BOTON SERVICIOS
const servicesDesktopButton = document.getElementById('servicesDesktopButton');
servicesDesktopButton.addEventListener('click', function(){
    divServices.scrollIntoView({behavior:"smooth"});
})

//BOTON ENCONTRANOS
const findUsDesktopButton = document.getElementById('findUsDesktopButton');

findUsDesktopButton.addEventListener('click',openMaps);

//BOTON CONTACTANOS
const contactDesktopButton = document.getElementById('contactDesktopButton');

contactDesktopButton.addEventListener('click', openWPP)

//BOTON NOSOTROS

const usDesktopButton = document.getElementById('usDesktopButton');

usDesktopButton.addEventListener('click', function(){
    closeDesktopIntro();
    closeDesktopFollow();
    openDesktopUs();
});

//BOTON SEGUINOS

const followUsDesktopButton = document.getElementById('followUsDesktopButton');

followUsDesktopButton.addEventListener('click', function(){
    closeDesktopUs();
    closeDesktopIntro();
    openDesktopFollow();
})

//BOTON SEGUINOS INSTAGRAM

const desktopFollowIG = document.getElementById('desktopFollowIG');

desktopFollowIG.addEventListener('click',openIG);

//BOTON SEGUINOS FACEBOOK

const desktopFollowFB = document.getElementById('desktopFollowFB');

desktopFollowFB.addEventListener('click', openFB);

//BOTON ZONAS
const zoneDesktopButton = document.getElementById('zoneDesktopButton');

zoneDesktopButton.addEventListener('click', function(){
    closeDesktopUs();
    closeDesktopFollow();
    openDesktopIntro();
});

//###VERSION MOBILE



//DIV ZONAS
const textMobile = document.getElementById('textMovil');

//MOSTRAR DIV ZONAS
function showTextMobile(){
    if(!textMobile.classList.contains('visible')){
        textMobile.classList.add('visible');
    };
};

//Menu movil
var mobMenu = document.getElementById('movMenu');

//BOTON NAV
const navButton = document.getElementById("navButton");

//CLICK BOTON NAV MOBILE
function handleNavButtonClick(){
    if(!mobMenu.classList.contains('visible')){
        mobMenu.classList.add('visible');
    }else{
        mobMenu.classList.remove('visible');
    };
};

navButton.addEventListener('click', handleNavButtonClick);

//Botón movil servicios

const btMServices = document.getElementById('buttonMovilServices');

btMServices.addEventListener('click', function(){
    handleNavButtonClick()
    divServices.scrollIntoView({behavior:"smooth"});
});

//Boton movil maps

const btMMap = document.getElementById('buttonMovilMap');

btMMap.addEventListener('click', function(){
    handleNavButtonClick();
    openMaps();
});

//boton movil whatsapp

const btMWpp = document.getElementById('buttonMovilWpp');

btMWpp.addEventListener('click', function(){
    handleNavButtonClick();
    openWPP();
});

//boton movil info general

const btMInfo = document.getElementById('buttonMovilInfo');

btMInfo.addEventListener('click', function(){
    handleNavButtonClick();
    footer.scrollIntoView({behavior: "smooth"});
});

//#####COD

setTimeout(showTextMobile, 1000);

setTimeout(showDesktopMenu, 1000);









