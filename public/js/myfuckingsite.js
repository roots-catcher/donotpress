document.addEventListener("DOMContentLoaded", () => {
    console.log('Hello, I See You!');

    const openpage = document.querySelector('.openpage'),
          dangerBtn = openpage.querySelector('button.danger'),
          dude = openpage.querySelector('.dude'),
          blackmaster = openpage.querySelector('.mrblack');

    let i = 0;

    dangerBtn.addEventListener('click', (event) => {
        event.preventDefault();
        
            switch (i) {
                case 0:
                    dangerBtn.style.marginTop = "20%";
                    dangerBtn.style.marginLeft = "43%";
                    dangerBtn.style.fontSize = "55px";
                    i++;
                    break;

                case 1:          
                    dangerBtn.innerHTML = 'НЕ<br> ЖМИ<br> СЮДА!';
                    i++;
                    break;

                case 2:
                    let answer = prompt("Ты идиот?", "Да/Нет").toLowerCase();
                    if (answer == "да") {
                        alert("Нет...");
                        dangerBtn.classList.remove('active');
                        dude.classList.add('active');
                        document.querySelector('body').classList.add('bomb');
                        setTimeout((text)=> {
                            location.reload();
                        }, 5000);
                        break;
                    } else if (answer == "нет") {
                        alert("ТОГДА НЕ ТРОГАЙ КНОПКУ!!!");
                        location.reload();
                    } else if (answer == "мне потанцевать нельзя?" || answer == "мне что потанцевать нельзя?" 
                    || answer == "мне потанцевать нельзя" || answer == "я же просто танцую" ) {
                        console.log("redirect");
                        location.href = "https://www.youtube.com/watch?v=zdynIWXtdr0&ab_channel=MKScongratzzz";
                    } else {
                        alert("Не попал");
                        i++;
                    }
                    break;

                case 3:
                    dangerBtn.classList.remove('active');
                    blackmaster.classList.add('active');
                    document.querySelector('body').classList.add('master');
                    setTimeout((text)=> {
                        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=5s&ab_channel=RickAstley";
                    }, 5000);
            }
        console.log(i);
            

      
    });        
    

    dude.addEventListener('click', (event) => {
        event.preventDefault();

        dude.classList.remove('active');
        document.querySelector('body').classList.remove('bomb');
    });
    
});

