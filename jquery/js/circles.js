$(function () {

    let vw = $(window).width();
    let vh = $(window).height();
    let palette = [
        '#84c79f',
        '#d8508b',
        '#af0054',
        '#6c3348',
        '#bea51e',
        '#641726',
        '#716e23',
        '#5b4654',
        '#17296e',
        '#da616a'
    ]

    let timer = null;

    $('#start').click(function () {

        if($(this).hasClass('show')) {
            hideElement(this);
            showElement('#reset')
        } else {
            showElement(this);
            hideElement('#reset')
        }

        let width = $('#width').val();
        let growth = $('#growth').val();
        let rate = $('#rate').val();
        let number = $('#number').val();


        for(let i=0; i<number; i++) {

            let pos = getRandomPos(vw*.95, vh*.8);

            $('body').append($('<div>', {
                css: {
                    'width': width,
                    'height': width,
                    'background-color': getRandomColor(),
                    'position': 'absolute',
                    'border-radius': '5000px',
                    'top': pos.y,
                    'left': pos.x,
                },
                click: function() {
                    $(this).remove();
                },
                mouseover: function() {
                   $(this).fadeOut(2000);
                },
                mouseout: function() {
                    $(this).stop();
                    $(this).css('opacity', 1);
                }
            }));
        }

        timer = setInterval(() => {
            $('body > div:not(.container)').each(function(idx, e) {
                $(e).css('width', function(ix, oldWidth) {
                    return (parseInt(oldWidth) + parseInt(growth)) + 'px';
                }).css('height', function(ix, oldHeight) {
                    return (parseInt(oldHeight) + parseInt(growth)) + 'px';
                })
            });
        }, rate);
    });

    $('#reset').click(function() {

        if($(this).hasClass('show')) {
            $(this).removeClass('show').addClass('hide');
            $('#start').removeClass('hide').addClass('show');
        } else {
            $(this).removeClass('hide').addClass('show')
            $('#start').removeClass('show').addClass('hide')
        }

        $('body > div:not(.container)').each(function(idx, e) {
            $(e).remove();
        })

        clearInterval(timer);
        timer = null;
    })

    function getRandomPos(maxX, maxY) {
        return {
            x: '' + (Math.floor(Math.random() * maxX)) + 'px',
            y: '' + (Math.floor(Math.random() * maxY)) + 'px'
        }
    }

    function getRandomColor() {

        let index = Math.floor(Math.random() * palette.length);
        return palette[index];
    }

    function hideElement(e) {
        $(e).removeClass('show').addClass('hide');
    }
    function showElement(e) {
        $(e).removeClass('hide').addClass('show');
    }

})