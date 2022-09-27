window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});

function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const nav = document.querySelector('.nav');
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
}

window.addEventListener('scroll', () => {
    const anime = document.querySelectorAll('.animeX');

    for( let s = 0 ; s < anime.length ; s++ ){
        const windowHeight = window.innerHeight;
        const animeTop = anime[s].getBoundingClientRect().top;
        const animePoint = 150;

        if(animeTop < windowHeight - animePoint){
            anime[s].classList.add('active');
        } else {
            anime[s].classList.remove('active');
        }
    }
});

let list = document.querySelectorAll('.list');
let card = document.querySelectorAll('.card');

for( let i = 0 ; i < list.length ; i++ ){
    list[i].addEventListener('click' , function(){
        for( let j = 0 ; j < list.length ; j++ ){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        for( let k = 0 ; k < card.length ; k++ ){
            card[k].classList.remove('active');
            card[k].classList.add('hide');

            if( card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all' ){
                card[k].classList.remove('hide');
                card[k].classList.add('active');
            }
        }
    });
}