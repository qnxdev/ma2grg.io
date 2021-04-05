const CHANGE_DELAY = 4000;

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#actionBtn');

    let i = 0;
    const texts = [
        'CAD/CAM Engineer',
        'Product Designer',
        'Design Generalist',
        'UI/UX Designer',
    ];

    const updateText = () => {
        btn.classList.add('fadeOut');
        btn.classList.remove('fadeIn');
        setTimeout(_ => {
            btn.classList.remove('fadeOut');
            i = (i + 1) % texts.length;
            btn.innerText = texts[i];
            btn.classList.add('fadeIn');
        }, 1000);
    };

    let timer = setInterval(updateText, CHANGE_DELAY);

    btn.addEventListener('click', _ => {
        updateText();
        clearInterval(timer);
        timer = setInterval(updateText, CHANGE_DELAY);
    });
});
