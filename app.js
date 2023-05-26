const btn = document.querySelector("button");
const input = document.querySelector("input");
const hero = document.querySelector(".hero");
const select = document.querySelector("select");
let all = null

function getApi(API) {
    axios(`https://restcountries.com/v3.1/${API}`)
        .then((res) => {
            console.log(res.data);
            all = res.data
            view(res.data);
        });
}

getApi("all");

function view(data) {
    hero.innerHTML = ''
    data.slice(0, 10).map((el) => {
        hero.innerHTML += `
        <div class="box">
            <img src="${el.flags.svg}" width='200px'alt="">
            <h1>${el.name.common}</h1>
            <h3>регион:${el.region}</h3>
            <h3>площадь:${el.area}кв<sup>2</sup> </h3>
            <h3>население:${el.population}</h3>
            
        </div>
        `;
    });
}

btn.addEventListener('click', () => {
    getApi(`name/${input.value}`)
})

input.addEventListener('input', (e) => {
    getApi(`name/${e.target.value}`)
})

// select.addEventListener('change', (e) => {
//     let target = e.target.value
//     if (target === 'asia') {
//         const res = all.filter((el) => {
//             return el.region === 'Asia'
//         })
//         view(res)
//     }
// })

// select.addEventListener('change', (e) => {
//     let target = e.target.value
//     if (target === 'americas') {
//         const res = all.filter((el) => {
//             return el.region === 'Americas'
//         })
//         view(res)
//     }
// })

select.addEventListener('change', (e) => {
    let target = e.target.value
    if (target === 'A-Z') {
        const res = all.sort((a, b) => {
            return a.name.common > b.name.common ? 1 : -1;
        })
        view(res)
    }
})

select.addEventListener('change', (e) => {
    let target = e.target.value
    if (target === 'area') {
        const res = all.sort((a, b) => {
            return b.area - a.area
        })
        view(res)
    }
})

select.addEventListener('change', (e) => {
    let target = e.target.value
    if (target === 'population') {
        const res = all.sort((a, b) => {
            return b.population - a.population
        })
        view(res)
    }
})

// burger

const burgerMenu = document.querySelector('.header__burger')
const headerNav = document.querySelector('.menu')
const burgerItem = document.querySelectorAll('.burger__item')
const body = document.querySelector('body')

function add(e) {
    burgerMenu.addEventListener('click', (e) => {
        if (e.target.classList.toggle('header__burger')) {
            headerNav.style.display = 'flex'
            headerNav.style.gap = "20px"
            burgerItem[0].style.transform = 'rotate(-50deg) translateX(-3px)'
            burgerItem[2].style.transform = 'rotate(50deg)translateY(1px)'
            burgerItem[1].style.display = 'none'
        } else {
            headerNav.style.display = 'none'
            burgerItem[0].style.transform = 'rotate(0)'
            burgerItem[2].style.transform = 'rotate(0)'
            burgerItem[1].style.display = 'block'
        }
    })
}

add()
