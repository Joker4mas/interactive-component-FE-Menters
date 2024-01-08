// script for rating 

const selectedRate = document.querySelectorAll('.rate');
const Submit = document.getElementById('submit-btn');
const secondContainer = document.querySelector('.container-thanks');
const rateGain = document.getElementById('rateAgain');
const rating = document.getElementById('numberRated');
//
const mainContainer = document.querySelector('.container');

Submit.addEventListener('click',() => {
    secondContainer.classList.remove("hidden");
    mainContainer.style.display = 'none';
});


rateGain.addEventListener('click', () =>{
    secondContainer.classList.add('hidden');
    mainContainer.style.display = 'block';
});

// selectedRate.addEventListener('click', () =>{
//     console.log(rate);
// });

selectedRate.forEach((rate) =>{
    rate.addEventListener('click', () =>{
        // console.log(rate.innerHTML);
        rating.innerHTML = rate.innerHTML;
    });
});