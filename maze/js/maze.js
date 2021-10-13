

$(function() {
    {
        let gameStatus = null;
        const wonText = 'You won! :)';
        const lostText = 'You lost!'


        $('#maze > div.boundary').mouseover(function() {
            if(gameStatus === 'progress') loseGame();
        });

        $('#maze').mouseleave(function() {
            if (gameStatus === 'progress') loseGame();
        })

        $('#start').click(function() {startGame();});

        $('#end').click(function() {endGame();});

        function startGame() {
            
            resetGame();
            $('#status').text("Don't touch the walls");
            gameStatus = 'progress';

        }

        function endGame() {

            if (gameStatus === 'progress') {
                resetGame();
                $('#status').text(wonText);
            }
            else if (gameStatus === 'lost') {
                $('#status').text(lostText);
            }
        }

        function loseGame() {

            gameStatus = 'lost';
            $('#maze > div:not(#start, #end)').each(function(idx, e) {
                if (!$(this).hasClass('youlose')) $(this).addClass('youlose');
            });
            $('#status').text(lostText);
        }

        function resetGame() {

            gameStatus = null;
            $('div.boundary').each(function(idx, e){
                if ($(e).hasClass('youlose')) $(e).removeClass('youlose');
            });
        }
    }
})