const firstName = document.querySelector('#name');
const title1 = document.querySelector('#title1');
const title2 = document.querySelector('#title2');


const form = document.querySelector('#form');
form.noValidate = true;

firstName.addEventListener('blur', () =>{
    let valiImg = document.querySelector("input#name+img.validation");

    if (firstName.value){ //if name field has content
       
        firstName.classList.add('valid');
        valiImg.classList.remove('hide');
        valiImg.src="Town_Island_NH_Icon.png";
    }

});



title1.addEventListener('blur', () =>{
    if (title1.value){ //if title field has content
        title1.classList.add('valid');
    }
});



title2.addEventListener('blur', () =>{
    let valiImg = document.querySelector("select#title2+img.validation");

    if (title2.value){ //if name field has content
      
        title2.classList.add('valid');
        valiImg.classList.remove('hide');
        valiImg.src=`${getRandomImg()}`;

        function getRandomImg(){
            let randomNo = Math.floor(Math.random()*5);
                switch(randomNo){
                case 1:
                    return 'Fruit_Apple_NH_Icon.png'; break;
                case 2:
                    return 'Fruit_Peach_NH_Icon.png'; break;
                case 3:
                    return 'Fruit_Orange_NH_Icon.png'; break;
                case 4:
                    return 'Fruit_Cherry_NH_Icon.png'; break;
                case 5: 
                return 'Fruit_Pear_NH_Icon.png'; break;
            }
        }
    }
});

age.addEventListener('blur', (e) =>{
    let valiImg = document.querySelector("input#age+img.validation");

    if (age.value){ 
                                 
      console.log(typeof age.value);
        age.classList.add('valid');
        valiImg.classList.remove('hide');
        valiImg.src=`${getZodiacImg()}`;

        function getZodiacImg(){
                if (age.value.match(/^[0-9]{4}-0((3-(2[1-9]|3[0-1]))|(4-(0[1-9]|1[0-9])))$/g)){
                    console.log ("matched aries");
                    return 'Starsign_Aries_NH_Icon.png'; 

                } else if (age.value.match(/^[0-9]{4}-0((4-(2[0-9]|30))|(5-(0[1-9]|1[0-9]|20)))$/g)){ //taurus Apr 20 - May 20
                    console.log ("matched taurus"); 
                    return 'Starsign_Taurus_NH_Icon.png'

                } else if (age.value.match(/^[0-9]{4}-0((5-(2[1-9]|3[0-1]))|(6-(0[1-9]|1[0-9]|2[0-1])))$/g)){ //gemini May 21 - Jun 21
                    console.log ("matched gemini");
                    return 'Starsign_Gemini_NH_Icon.png'

                } else if (age.value.match(/^[0-9]{4}-0((6-(2[2-9]|30))|(7-(0[1-9]|1[0-9]|2[0-2])))$/g)){ //cancer Jun 22 - Jul 22
                    console.log ("matched cancer");
                    return 'Starsign_Cancer_NH_Icon.png'

                } else if (age.value.match(/^[0-9]{4}-0((7-(2[3-9]|3[0-1]))|(8-(0[1-9]|1[0-9]|2[0-2])))$/g)){ //leo Jul 23 - Aug 22
                    console.log ("matched leo");
                    return 'Starsign_Leo_NH_Icon.png'

                } else if (age.value.match(/^[0-9]{4}-0((8-(2[3-9]|3[0-1]))|(9-(0[1-9]|1[0-9]|2[0-2])))$/g)){ //virgo Aug 23 - Sep 22
                    console.log ("matched virgo");
                    return 'Starsign_Virgo_NH_Icon.png'

                } else if (age.value.match(/^[0-9]{4}-((09-(2[3-9]|30))|(10-(0[1-9]|1[0-9]|2[0-3])))$/g)){ //libra Sep 23 - Oct 23
                    console.log ("matched libra");
                    return 'Starsign_Libra_NH_Icon.png'

                } else if (age.value.match(/^[0-9]{4}-((10-(2[4-9]|3[0-1]))|(11-(0[1-9]|1[0-9]|2[0-2])))$/g)){ //scorpio Oct 24 - Nov 22
                    console.log ("matched scorpio");
                    return 'Starsign_Scorpio_NH_Icon.png'

                } else if (age.value.match(/^[0-9]{4}-((11-(2[3-9]|30))|(12-(0[1-9]|1[0-9]|2[0-1])))$/g)){ //sagittarius Nov 23 - Dec 21
                    console.log ("matched sagittarius");
                    return 'Starsign_Sagittarius_NH_Icon.png'
                }
                else if (age.value.match(/^[0-9]{4}-((12-(2[2-9]|3[0-1]))|(01-(0[1-9]|1[0-9])))$/g)){ //capricorn Dec 22 - Jan 19
                    console.log ("matched capricorn");
                    return 'Starsign_Capricorn_NH_Icon.png'
                }
                else if (age.value.match(/^[0-9]{4}-0((1-(2[0-9]|30))|(2-(0[1-9]|1[0-8])))$/g)){ //aquarius Jan 20 - Feb 18
                    console.log ("matched aquarius");
                    return 'Starsign_Aquarius_NH_Icon.png'
                }
                else if (age.value.match(/^[0-9]{4}-0((2-(19|2[0-9]))|(3-(0[1-9]|1[0-9]|20)))$/g)){ //pisces Feb 19 - Mar 20
                    console.log ("matched pisces");
                    return 'Starsign_Pisces_NH_Icon.png'
                }
            }

                // switch(age.value){
                // case age.value.match(/^[0-9]{4}-03-(2[1-9]|3[0-1])$/g): //aries Mar 21 - Apr 19
                //     console.log ("switch matched");
                //     return `Starsign_Aries_NH_Icon.png`; 
                //     break;
                // case 2: //taurus Apr 20 - May 20
                //     return 'Starsign_Taurus_NH_Icon.png'; break;

                // case 3: //gemini May 21 - Jun 21
                //     return 'Starsign_Gemini_NH_Icon.png'; break;

                // case 4: //cancer Jun 22 - Jul 22
                //     return 'Starsign_Cancer_NH_Icon.png'; break;

                // case 5: //leo Jul 23 - Aug 22
                //     return 'Starsign_Leo_NH_Icon.png'; break;

                // case 6: //virgo Aug 23 - Sep 22
                //     return 'Starsign_Virgo_NH_Icon.png'; break;

                // case 7: //libra Sep 23 - Oct 23
                //     return 'Starsign_Libra_NH_Icon.png'; break;

                // case 8: //scorpio Oct 24 - Nov 22
                //     return 'Starsign_Scorpio_NH_Icon.png'; break;

                // case 9: //sagittarius Nov 23 - Dec 21
                //     return 'Starsign_Sagittarius_NH_Icon.png'; break;

                // case 10: //capricorn Dec 22 - Jan 19
                //     return 'Starsign_Capricorn_NH_Icon.png'; break;

                // case 11: //aquarius Jan 20 - Feb 18
                //     return 'Starsign_Aquarius_NH_Icon.png'; break;

                // case 12: //pisces Feb 19 - Mar 20
                //     return 'Starsign_Pisces_NH_Icon.png'; break;

                
        
    }
});



// blanks out year, sets year to 2022 only
// var year = new Date().getFullYear();
// document.getElementById('age').setAttribute("min", year + "-01-01");
// document.getElementById('age').setAttribute("max", year + "-12-31");