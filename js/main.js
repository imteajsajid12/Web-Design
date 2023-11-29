const counters = document.querySelectorAll('.value');
const speed = 900;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('sajid');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value + ' ' + 'k';
        }
    }

    animate();
});










