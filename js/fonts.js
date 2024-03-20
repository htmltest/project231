window.onload = function() {
    var html = document.documentElement;

    var fontsfile = document.createElement('link');
    fontsfile.href = pathTemplate + 'css/fonts.css';
    fontsfile.rel = 'stylesheet';
    document.head.appendChild(fontsfile);

    if (sessionStorage.fontsLoaded) {
        html.classList.add('fonts-loaded');
        window.setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 500);
    } else {
        var script = document.createElement('script');
        script.src = pathTemplate + 'js/fontfaceobserver.js';
        script.async = true;

        script.onload = function () {
            var CeraPro400 = new FontFaceObserver('CeraPro', {
                weight: 'normal'
            });
            var CeraPro500 = new FontFaceObserver('CeraPro', {
                weight: '500'
            });
            var CeraPro700 = new FontFaceObserver('CeraPro', {
                weight: 'bold'
            });

            Promise.all([
                CeraPro400.load(),
                CeraPro500.load(),
                CeraPro700.load()
            ]).then(function () {
                html.classList.add('fonts-loaded');
                sessionStorage.fontsLoaded = true;
                window.setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 500);
            });
        };
        document.head.appendChild(script);
    }
}