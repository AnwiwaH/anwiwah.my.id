const ul = document.querySelector('.ul-page');
const li = document.querySelectorAll('.page');

ul.addEventListener('click', function(e) {
    if (e.target.className == 'page') {
        for (let i=0; i<li.length; i++){
            li[i].classList.remove('active');
            }
        e.target.classList.toggle('active');
    }
});