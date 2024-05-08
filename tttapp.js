/*
https://chat.openai.com/share/f8086e70-758e-4b11-8490-36d32ba3e5f8

button class box // box mate
div1 class msg-container hide
div2 class container
div3 class game
button new game id new-btn
*/


let box_of_game = document.querySelectorAll('.box');
let reset_btn = document.querySelector('#reset-btn')

let player_turn = true // playerX,playerY and

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
/* how to use the function call back butin this we will don't do this cause some methods are not suggested cause of the we have to applynon all nodes
// make a function
let boxs = (box) => {
    box.addEventListener('click', () => {
        console.log('you clicked the button')
        if (player_turn) {
            box.innerText = 'O'
            player_turn = false;
        }else{
            box.innerText = 'X'
            player_turn = true;
        }
    });
};
// function call back
box_of_game.forEach(boxs);
*/


box_of_game.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('you clicked the button')
        if (player_turn) {
            box.innerText = 'O'
            player_turn = false;
        } else {
            box.innerText = 'X'
            player_turn = true;
        }
        box.disabled = true;
        box.style.backgroundColor = 'steelblue';

        // function for the chack winner
        chackwinner();

    });
});

// after winner box is hidden
const disable_boxes = () => {
    for (box of box_of_game) {
        box.disabled = true;
    }
}

// after reset the game box showing
const able_boxes = () => {
    for (box of box_of_game) {
        box.disabled = false;
        box.innerText = '';
    }
}
// Call the function to change color of remaining boxes
const changeColorOfRemainingBoxes = () => {
    box_of_game.forEach((box) => {
        if (!box.disabled) {
            box.style.backgroundColor = '#9370DB'; // Change 'your_desired_color' to the color you want
        }
    });
};

const chackwinner = () => {
    for (let position of winPatterns) {
        let pos_1 = box_of_game[position[0]].innerText;
        let pos_2 = box_of_game[position[1]].innerText;
        let pos_3 = box_of_game[position[2]].innerText;

        if (pos_1 != '' && pos_2 != '' && pos_3 != '') {
            if (pos_1 === pos_2 && pos_2 === pos_3) {
                console.log('winner', pos_1);
                changeColorOfRemainingBoxes(); // Call the function to change color of remaining boxes
                disable_boxes();
            }
        }
    }
};

const changeColorwhenrestart = () => {
    box_of_game.forEach((box) => {
        if (!box.disabled) {
            box.style.backgroundColor = '#ffff'; // Change 'your_desired_color' to the color you want
        }
    });
};
const newgame = () => {
    player_turn = true;
    able_boxes();
    changeColorwhenrestart();
}

reset_btn.addEventListener('click', newgame);