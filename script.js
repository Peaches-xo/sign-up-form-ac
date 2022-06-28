const firstName = document.querySelector('#name');
const title1 = document.querySelector('#title1');
const title2 = document.querySelector('#title2');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const bubblegum = document.querySelector('#bubblegum');
const audio = document.querySelector('#audio');

const nameValidation = document.querySelector('#nameValidation');
const titleValidation = document.querySelector('#titleValidation');
const ageValidation = document.querySelector('#ageValidation');
const emailValidation = document.querySelector('#emailValidation');

const form = document.querySelector('#form');
form.noValidate = true;
form.addEventListener('submit', function(e){
    e.preventDefault();
  })

firstName.addEventListener('blur', () =>{
    if (firstName.value){ //if name field has content
        displayValidation (firstName, nameValidation);
        nameValidation.src='images/Town_Island_NH_Icon.png';
    }
});

title1.addEventListener('blur', () =>{
    if (title1.value){ //if title field has content
        title1.classList.add('valid');
    }
});

title2.addEventListener('blur', () =>{
    if (title2.value){ //if title2 field has content
        displayValidation (title2, titleValidation);
        titleValidation.src=`${getRandomImg()}`;
    }
});

age.addEventListener('blur', () =>{
    let date = age.value.split('-').slice(1); 
    let month = date[0]; 
    let day = date[1]; 

    if (age.value){ 
        displayValidation (age, ageValidation)
        ageValidation.src=`${getZodiacImg(day, month)}`;
        }
    });


email.addEventListener('blur', () =>{
    if (email.value.match(/^[0-9a-zA-Z-_\$#]+@[0-9a-zA-Z-_\$#]+\.[a-zA-Z]{2,5}$/g)){ 
        email.classList.remove('invalid');
        displayValidation (email, emailValidation);
        emailValidation.src='images/NookPhone_Passport_NH_Icon.png';
    } else {
        email.classList.remove('valid');
        email.classList.add('invalid');
    }
});


bubblegum.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

    function displayValidation (input, img){
        input.classList.add('valid');
        img.classList.remove('hide');
    }


function getRandomImg(){
    let randomNo = Math.floor(Math.random()*5);
        switch(randomNo){
        case 1:
            return 'images/Fruit_Apple_NH_Icon.png'; break;
        case 2:
            return 'images/Fruit_Peach_NH_Icon.png'; break;
        case 3:
            return 'images/Fruit_Orange_NH_Icon.png'; break;
        case 4:
            return 'images/Fruit_Cherry_NH_Icon.png'; break;
        case 5: 
        return 'images/Fruit_Pear_NH_Icon.png'; break;
    }
}

function getZodiacImg(day, month){
    if ((month == 03 && (day >= 21 && day <= 31))||(month == 04 && (day >= 01 && day <= 19)) ){
        return 'images/Starsign_Aries_NH_Icon.png';  //aries Mar 21 - Apr 19

    } else if ((month == 04 && (day >= 20 && day <= 30))||(month == 05 && (day >= 01 && day <= 20)) ){
        return 'images/Starsign_Taurus_NH_Icon.png' //taurus Apr 20 - May 20

    } else if  ((month == 05 && (day >= 21 && day <= 31))||(month == 06 && (day >= 01 && day <= 21)) ){
        return 'images/Starsign_Gemini_NH_Icon.png' //gemini May 21 - Jun 21

    } else if  ((month == 06 && (day >= 22 && day <= 30))||(month == 07 && (day >= 01 && day <= 22)) ){    
        return 'images/Starsign_Cancer_NH_Icon.png' //cancer Jun 22 - Jul 22

    } else if  ((month == 07 && (day >= 23 && day <= 31))||(month == 08 && (day >= 01 && day <= 22)) ){     
        return 'images/Starsign_Leo_NH_Icon.png' //leo Jul 23 - Aug 22

    } else if  ((month == 08 && (day >= 23 && day <= 31))||(month == 09 && (day >= 01 && day <= 22)) ){      
        return 'images/Starsign_Virgo_NH_Icon.png'  //virgo Aug 23 - Sep 22

    } else if  ((month == 09 && (day >= 23 && day <= 30))||(month == 10 && (day >= 01 && day <= 23)) ){    
        return 'images/Starsign_Libra_NH_Icon.png'  //libra Sep 23 - Oct 23

    } else if  ((month == 10 && (day >= 24 && day <= 31))||(month == 11 && (day >= 01 && day <= 22)) ){      
        return 'images/Starsign_Scorpio_NH_Icon.png' //scorpio Oct 24 - Nov 22

    } else if  ((month == 11 && (day >= 23 && day <= 30))||(month == 12 && (day >= 01 && day <= 21)) ){      
        return 'images/Starsign_Sagittarius_NH_Icon.png'  //sagittarius Nov 23 - Dec 21

    } else if  ((month == 12 && (day >= 22 && day <= 31))||(month == 01 && (day >= 01 && day <= 19)) ){     
        return 'images/Starsign_Capricorn_NH_Icon.png' //capricorn Dec 22 - Jan 19
    
    } else if  ((month == 01 && (day >= 20 && day <= 31))||(month == 01 && (day >= 02 && day <= 18)) ){     
        return 'images/Starsign_Aquarius_NH_Icon.png' //aquarius Jan 20 - Feb 18
    
    } else if  ((month == 02 && (day >= 19 && day <= 29))||(month == 03 && (day >= 01 && day <= 20)) ){    
        return 'images/Starsign_Pisces_NH_Icon.png' //pisces Feb 19 - Mar 20
    }
}