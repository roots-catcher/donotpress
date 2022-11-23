document.addEventListener("DOMContentLoaded", () => {
    console.log('Hello, I See You!');
    const openpage = document.querySelector('.openpage'),
          dangerBtn = openpage.querySelector('button.danger'),
          dude = openpage.querySelector('.dude');


    dangerBtn.addEventListener('click', (event) => {
        event.preventDefault();
        
            dangerBtn.classList.remove('active');
            dude.classList.add('active');
            document.querySelector('body').classList.add('bomb');
    });        
    

    dude.addEventListener('click', (event) => {
        event.preventDefault();

        dude.classList.remove('active');
        document.querySelector('body').classList.remove('bomb');

    });
    
});

