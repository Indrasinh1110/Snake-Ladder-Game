let tog = 1;
let p1sum = 0;
let p2sum = 0;
let gameOn = true;
let win = new Audio("./Audio/winner_snake.mp3");
let snake = new Audio("./Audio/snake.wav");
let ladder = new Audio("./Audio/ladder.wav");
let diceAudio = new Audio("./Audio/dice.mp3");
let player1, player2;
var viewportWidth = window.innerWidth;

function naming() {
    player1 = document.getElementById('name1').value;
    player2 = document.getElementById('name2').value;

    document.getElementById('turn').innerText = player1 + "'s Turn";
    document.getElementById('turn').style.color = 'red';
}

function rolling() {
    if (gameOn) {
        diceAudio.play();
        var dice = document.getElementById('dice');
        var interval = setInterval(changeDiceNumber, 50);
        setTimeout(function () {
            clearInterval(interval);
            var num = Math.floor(Math.random() * 6) + 1;
            dice.src = './Images/' + num + '.png';
            tog = tog + 1;
            if (tog % 2 !== 0) {
                document.getElementById('turn').innerText = player1 + "'s Turn";
                document.getElementById('turn').style.color = 'red';
                play('p1', 'p1sum', num);
            } else if (tog % 2 === 0) {
                document.getElementById('turn').innerText = player2 + "'s Turn";
                document.getElementById('turn').style.color = 'yellow';
                play('p2', 'p2sum', num);
            }
        }, 750);
    }
}
function changeDiceNumber() {
    var dice = document.getElementById('dice');
    var num = Math.floor(Math.random() * 6) + 1; // Generate random number for dice face
    dice.src = './Images/' + num + '.png';
}
function play(player, pSum, num) {
    let sum;
    if (pSum === 'p1sum') {
        p1sum = p1sum + num;
        if (p1sum > 100) {
            p1sum = p1sum - num;
        }
        if (p1sum === 74) {
            ladder.play();
            p1sum = 92;
        }
        if (p1sum === 62) {
            ladder.play();
            p1sum = 81;
        }
        if (p1sum === 50) {
            ladder.play();
            p1sum = 69;
        }
        if (p1sum === 42) {
            ladder.play();
            p1sum = 63;
        }
        if (p1sum === 13) {
            ladder.play();
            p1sum = 46;
        }
        if (p1sum === 4) {
            ladder.play();
            p1sum = 25;
        }
        if (p1sum === 27) {
            snake.play();
            p1sum = 5;
        }
        if (p1sum === 40) {
            snake.play();
            p1sum = 3;
        }
        if (p1sum === 43) {
            snake.play();
            p1sum = 18;
        }
        if (p1sum === 99) {
            snake.play();
            p1sum = 41;
        }
        if (p1sum === 54) {
            snake.play();
            p1sum = 31;
        }
        if (p1sum === 66) {
            snake.play();
            p1sum = 45;
        }
        if (p1sum === 76) {
            snake.play();
            p1sum = 58;
        }
        if (p1sum === 89) {
            snake.play();
            p1sum = 53;
        }
        sum = p1sum;
    }
    if (pSum === 'p2sum') {
        p2sum = p2sum + num;

        if (p2sum > 100) {
            p2sum = p2sum - num;
        }
        if (p2sum === 74) {
            ladder.play();
            p2sum = 92;
        }
        if (p2sum === 62) {
            ladder.play();
            p2sum = 81;
        }
        if (p2sum === 50) {
            ladder.play();
            p2sum = 69;
        }
        if (p2sum === 42) {
            ladder.play();
            p2sum = 63;
        }
        if (p2sum === 13) {
            ladder.play();
            p2sum = 46;
        }
        if (p2sum === 4) {
            ladder.play();
            p2sum = 25;
        }
        if (p2sum === 27) {
            snake.play();
            p2sum = 5;
        }
        if (p2sum === 40) {
            snake.play();
            p2sum = 3;
        }
        if (p2sum === 43) {
            snake.play();
            p2sum = 18;
        }
        if (p2sum === 99) {
            snake.play();
            p2sum = 41;
        }
        if (p2sum === 54) {
            snake.play();
            p2sum = 31;
        }
        if (p2sum === 66) {
            snake.play();
            p2sum = 45;
        }
        if (p2sum === 76) {
            snake.play();
            p2sum = 58;
        }
        if (p2sum === 89) {
            snake.play();
            p2sum = 53;
        }
        sum = p2sum;
    }
    document.querySelector('.' + player).style.transition = 'linear all 0.5s';
    if (sum < 10) {
        if (viewportWidth <= 600) {
            document.querySelector('.' + player).style.left = (sum - 1) * 40 + 'px';

        }
        else {
            document.querySelector('.' + player).style.left = (sum - 1) * 50 + 'px';
        }
    } else if (sum === 100) {
        win.play();
        document.querySelector('.image').style.transition = 'width 2s';
        if (viewportWidth <= 600) {
            document.querySelector('.image').style.width = '400px';
        } else { document.querySelector('.image').style.width = '500px'; }
        if (player === 'p1') {
            document.querySelector('.winner').innerText = player1 + ' is Won';
            document.querySelector('.winner').style.color = 'red';
        } else {
            document.querySelector('.winner').innerText = player2 + ' is Won';
            document.querySelector('.winner').style.color = 'yellow';
        }
        gameOn = false;
    } else {
        let n1 = Math.floor(sum / 10);
        let n2 = (sum % 10);
        if (viewportWidth <= 600) {
            if (n1 % 2 !== 0) {
                if (n2 === 0) {
                    document.querySelector('.' + player).style.left = 9 * 40 + 'px';
                    document.querySelector('.' + player).style.top = 400 - n1 * 40 + 'px';
                } else {
                    document.querySelector('.' + player).style.left = (10 - n2) * 40 + 'px';
                    document.querySelector('.' + player).style.top = 360 - n1 * 40 + 'px';
                }
            } else if (n1 % 2 === 0) {
                if (n2 === 0) {
                    document.querySelector('.' + player).style.left = 0 + 'px';
                    document.querySelector('.' + player).style.top = 400 + -n1 * 40 + 'px';
                } else {
                    document.querySelector('.' + player).style.left = (n2 - 1) * 40 + 'px';
                    document.querySelector('.' + player).style.top = 360 - n1 * 40 + 'px';
                }
            }
        }
        else {
            if (n1 % 2 !== 0) {
                if (n2 === 0) {
                    document.querySelector('.' + player).style.left = 9 * 50 + 'px';
                    document.querySelector('.' + player).style.top = 500 - n1 * 50 + 'px';
                } else {
                    document.querySelector('.' + player).style.left = (10 - n2) * 50 + 'px';
                    document.querySelector('.' + player).style.top = 450 - n1 * 50 + 'px';
                }
            } else if (n1 % 2 === 0) {
                if (n2 === 0) {
                    document.querySelector('.' + player).style.left = 0 + 'px';
                    document.querySelector('.' + player).style.top = 500 + -n1 * 50 + 'px';
                } else {
                    document.querySelector('.' + player).style.left = (n2 - 1) * 50 + 'px';
                    document.querySelector('.' + player).style.top = 450 - n1 * 50 + 'px';
                }
            }
        }
    }
}


function reset() {
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('name1').placeholder = 'Player 1';
    document.getElementById('name2').placeholder = 'Player 2';
    player1 = '';
    player2 = '';
    gameOn = true;
    p1sum = 0;
    p2sum = 0;
    sum = 0;
    tog = 0;
    document.querySelector('.image').style.transition = 'width 0.1s';
    document.querySelector('.image').style.width = '0px';
    document.querySelector('.winner').style.transition = 'width 0.1s';
    document.querySelector('.winner').innerText = ' ';
    if (viewportWidth <= 600) {
        document.querySelector('.p1').style.left = 0 + 'px';
        document.querySelector('.p1').style.top = 360 + 'px';
        document.querySelector('.p2').style.left = 0 + 'px';
        document.querySelector('.p2').style.top = 360 + 'px';
    }
    else {
        document.querySelector('.p1').style.left = -50 + 'px';
        document.querySelector('.p1').style.top = 450 + 'px';
        document.querySelector('.p2').style.left = -100 + 'px';
        document.querySelector('.p2').style.top = 450 + 'px';
    }
    document.querySelector('#turn').innerText = 'Welcome! to Snake Ladder game';
    document.querySelector('#turn').style.color = 'black';
    document.querySelector('#dice').src = './Images/' + 0 + '.png';
}
