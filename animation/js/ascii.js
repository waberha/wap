window.onload = function () {

    let screen = document.getElementById('text-area');
    let contentCtl = document.getElementById('animation');
    let motionCtlStart = document.getElementById('start');
    let motionCtlStop = document.getElementById('stop');
    let sizeCtl = document.getElementById('fontsize');
    let turboCtl = document.getElementById('turbo');


    let contentSize = {
        'Tiny': 'tiny',
        'Small': 'small',
        'Medium': 'medium',
        'Large': 'large',
        'Extra Large': 'extra-large',
        'XXL': 'xxl'
    }

    const DEFAULT_SPEED = 250;
    const TURBO_SPEED = 50;

    var intSpeed = DEFAULT_SPEED;

    var timer = null;
    var counter = 0;
    var animation = ANIMATIONS['blank'];

    var animate = function (speed) {
        if (animation.length > 0) {

            let frames = animation.split("=====\n")

            timer = setInterval(function () {
                screen.textContent = frames[counter % (frames.length)];
                counter++;
            }, speed);
        }
    }

    var stopAnimation = function () {
        clearInterval(timer);
        timer = null;
        counter = 0;
    }

    screen.textContent = animation;

    contentCtl.onchange = function () {
        animation = ANIMATIONS[contentCtl.value]
        screen.textContent = animation;
    };


    sizeCtl.onchange = function () {

        // clean up
        Object.values(contentSize).forEach(function (e) {
            screen.classList.remove(e);
        })

        let size = contentSize[sizeCtl.value];
        screen.classList.add(size);
    };


    motionCtlStart.onclick = function () {

        motionCtlStop.disabled = false;
        this.disabled = true;

        if (timer !== null) return;
        animate(intSpeed);
    };

    motionCtlStop.onclick = function () {

        motionCtlStart.disabled = false;
        this.disabled = true;

        stopAnimation();
    };

    turboCtl.onchange = function () {

        let speed = DEFAULT_SPEED;
        if (turboCtl.checked == true) speed = TURBO_SPEED;

        if(timer != null) {
            stopAnimation();
            animate(speed);
        }
        else {
            intSpeed = speed;
        }
    }
}