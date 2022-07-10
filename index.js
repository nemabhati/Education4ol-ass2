 let mainEl = document.getElementsByClassName('container');
        var h = window.innerHeight;
        var w = window.innerWidth;

        if (w<=720){
            mainEl.classList.remove('container');
            mainEl.classList.add('container-fluid');
        }