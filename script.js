const panels = document.querySelectorAll('.panel');
console.log(panels);

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    //  safari browser solution because in safari its just 'flex' NOT 'flex-grow'
    // if (e.propertyName.includes('flex')) {
    //     this.classList.toogle('open-active');
    // }

    if (e.propertyName === 'flex-grow') {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));