// JS page number
// page
const ul = document.querySelector('.ul-page');
const li = document.querySelectorAll('li');

const mainc = document.querySelector('.mainc');

let active = document.querySelector('.active');


ul.addEventListener('click', function(e) {
    for (let i=0; i<li.length; i++){
        li[i].classList.remove('active');
        }
        // tombol page angka
    if (e.target.className == 'page') {
        removeChild();
        addMainc();
        e.target.classList.add('active');
        active = document.querySelector('.active');
        if (active.innerHTML == 7) {
            active.nextElementSibling.classList.add('hidden');
            ul.lastElementChild.classList.add('hidden');
            ul.firstElementChild.nextElementSibling.classList.remove('hidden');
            ul.firstElementChild.classList.remove('hidden');
        } else if (active.innerHTML < 7 && active.innerHTML > 1) {
            ul.lastElementChild.previousElementSibling.classList.remove('hidden');
            ul.lastElementChild.classList.remove('hidden');
            ul.firstElementChild.nextElementSibling.classList.remove('hidden');
            ul.firstElementChild.classList.remove('hidden');
        } else {
            ul.lastElementChild.previousElementSibling.classList.remove('hidden');
            ul.lastElementChild.classList.remove('hidden');
            ul.firstElementChild.nextElementSibling.classList.add('hidden');
            ul.firstElementChild.classList.add('hidden');
        }
        // tombol next one by one
    } else if (e.target.className == 'pagen') {
        removeChild();
        addMainc();
        active.nextElementSibling.classList.add('active');
        active = document.querySelector('.active');
        if ( active.innerHTML == 7 ) {
            ul.lastElementChild.previousElementSibling .classList.add('hidden');
            ul.lastElementChild.classList.add('hidden');
        } else if (active.innerHTML < 7 && active.innerHTML > 1) {
            ul.lastElementChild.previousElementSibling.classList.remove('hidden');
            ul.lastElementChild.classList.remove('hidden');
            ul.firstElementChild.nextElementSibling.classList.remove('hidden');
            ul.firstElementChild.classList.remove('hidden');
        }
        // tombol prev one by one
    } else if (e.target.className == 'pagep') {
        removeChild();
        addMainc();
        active.previousElementSibling.classList.add('active');
        active = document.querySelector('.active');
        if ( active.innerHTML == 1 ) {
            ul.firstElementChild.nextElementSibling.classList.add('hidden');
            ul.firstElementChild.classList.add('hidden');
        } else if (active.innerHTML < 7 && active.innerHTML > 1) {
            ul.lastElementChild.previousElementSibling.classList.remove('hidden');
            ul.lastElementChild.classList.remove('hidden');
            ul.firstElementChild.nextElementSibling.classList.remove('hidden');
            ul.firstElementChild.classList.remove('hidden');
        }
        // tombol last page
    } else if (e.target.className == 'pagene') {
        removeChild();
        addMainc();
        active = document.querySelector('.pagen');
        active.previousElementSibling.classList.add('active');
        active = document.querySelector('.active');
        if ( active.innerHTML == 7 ) {
            ul.lastElementChild.previousElementSibling .classList.add('hidden');
            ul.lastElementChild.classList.add('hidden');
            ul.firstElementChild.nextElementSibling.classList.remove('hidden');
            ul.firstElementChild.classList.remove('hidden');
        }
        // tombol first page
    } else if (e.target.className == 'pagepe') {
        removeChild();
        addMainc();
        active = document.querySelector('.pagep');
        active.nextElementSibling.classList.add('active');
        active = document.querySelector('.active');
        if ( active.innerHTML == 1 ) {
            ul.lastElementChild.previousElementSibling .classList.remove('hidden');
            ul.lastElementChild.classList.remove('hidden');
            ul.firstElementChild.nextElementSibling.classList.add('hidden');
            ul.firstElementChild.classList.add('hidden');
        }
    }
    return button = document.querySelectorAll('.card button');
});
// end page

// remove before page

function removeChild() {
    
    let child = mainc.lastElementChild;

        while (child) {
            mainc.removeChild(child);
            
            child = mainc.lastElementChild;
        }
}
// end remove before page

// page fill
let image, belajar, fill;

image = ['<div class="image">html</div>', '<div class="image">css</div>', '<div class="image sml">javascript</div>', '<div class="image">c++</div>', '<div class="image">dart</div>', '<div class="image">golang</div>'];

belajar = ['Dasar', 'Medium', 'Advance', 'Profesional'];

fill = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At atque architecto quibusdam asperiores commodi? Sapiente eveniet quidem in totam est, dolore voluptatibus consectetur. Ea maiores nihil, eum beatae illo reprehenderit?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rerum, soluta, amet consectetur illum nihil eveniet ducimus tempore dolorum, voluptatem architecto. Vero culpa quod repudiandae, perspiciatis in eligendi sunt facilis!',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi deleniti excepturi corrupti incidunt veniam, nesciunt quaerat voluptatum ab reprehenderit dolore impedit ex delectus praesentium maxime eligendi pariatur sed officia labore?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum, quas ut perspiciatis cum libero laborum temporibus explicabo incidunt eum nobis assumenda! Sint dignissimos incidunt neque perferendis temporibus aliquam animi.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea corrupti beatae nam porro commodi rerum repellat natus quisquam pariatur dicta, quo atque odit dolorem nostrum ad animi quaerat voluptatum. Non.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla aliquid vero, sequi optio ab tenetur consequatur fuga asperiores placeat iusto iste corrupti, dolores corporis quis exercitationem vitae praesentium magni?'
];

function addMainc() {
    image.sort((a, b) => 0.5 - Math.random());
    belajar.sort((a, b) => 0.5 - Math.random());
    fill.sort((a, b) => 0.5 - Math.random());
    
    mainc.innerHTML = `
    <div class="row-m center">
                <div class="column card">
                    ${image[0]}
                    <h3>Belajar ${belajar[0]}</h3>
                    <p>${fill[0]}</p>
                    <button>Lihat selengkapnya</button>
                </div>
                <div class="column card">
                    ${image[1]}
                    <h3>Belajar ${belajar[1]}</h3>
                    <p>${fill[1]}</p>
                    <button>Lihat selengkapnya</button>
                </div>
                <div class="column card">
                    ${image[2]}
                    <h3>Belajar ${belajar[2]}</h3>
                    <p>${fill[2]}</p>
                    <button>Lihat selengkapnya</button>
                </div>
            </div>
            <div class="row-m center">
                <div class="column card">
                    ${image[3]}
                    <h3>Belajar ${belajar[3]}</h3>
                    <p>${fill[3]}</p>
                    <button>Lihat selengkapnya</button>
                </div>
                <div class="column card">
                    ${image[4]}
                    <h3>Belajar ${belajar[0]}</h3>
                    <p>${fill[4]}</p>
                    <button>Lihat selengkapnya</button>
                </div>
                <div class="column card">
                    ${image[5]}
                    <h3>Belajar ${belajar[1]}</h3>
                    <p>${fill[5]}</p>
                    <button>Lihat selengkapnya</button>
                </div>
            </div>
    `;
}
// end page fill
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
    mainc.addEventListener('click', function(e) {
        if (e.target.tagName == 'BUTTON') {
        Swal.fire({
            title: 'Mantap!',
            text: 'Tombol Berfungsi..',
            icon: 'success',
            confirmButtonColor: "#007BFF"
        });
    }
    });
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