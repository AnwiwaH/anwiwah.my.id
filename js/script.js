// JS page number
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
// end JS page number

// JS button header
// icon head
const imgh = document.querySelector('.imgh');

imgh.addEventListener('click', function() {
    Swal.fire({
        title: 'Mantap!',
        text: 'Tombol Berfungsi..',
        icon: 'success',
        confirmButtonColor: "#007BFF"
    });
});
// end icon head

// menu
const menu = document.querySelectorAll('.h');

for (let i=0; i<menu.length; i++) {
menu[i].addEventListener('click', function(e) {
    e.preventDefault();
        Swal.fire({
            title: 'Mantap!',
            text: 'Tombol Berfungsi..',
            icon: 'success',
            confirmButtonColor: "#007BFF"
        });
});
};
// end menu
// end JS button header

// JS button content 1
const box = document.querySelector('.box');

box.addEventListener('click', function(e) {
    if (e.target.className == 'btn1' || e.target.className == 'btn2') {
        Swal.fire({
            title: 'Mantap!',
            text: 'Tombol Berfungsi..',
            icon: 'success',
            confirmButtonColor: "#007BFF"
        });
    }
});
// end JS button content 1

// JS button main content
const button = document.querySelectorAll('.card button');

for (i=0; i<button.length; i++) {
    button[i].addEventListener('click', function() {
        Swal.fire({
            title: 'Mantap!',
            text: 'Tombol Berfungsi..',
            icon: 'success',
            confirmButtonColor: "#007BFF"
        });
    });
};
// end JS button main content

// button subscribe
const subs = document.querySelector('.subscribe');

subs.addEventListener('click', function() {
    Swal.fire({
        title: 'Mantap!',
        text: 'Tombol Berfungsi..',
        icon: 'success',
        confirmButtonColor: "#007BFF"
    });
});
// end button subscribe