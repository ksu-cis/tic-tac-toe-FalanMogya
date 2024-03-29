﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

/*
var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = `It is player ${turn}'s turn`;
}

function setWinner(winner) {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = `Player ${winner} wins!`;
    var cells = document.getElementsByClassName("square");
    for (i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click", onClick);
    }
}

function checkForWinner() {
    var cells = document.getElementsByClassName("square");

    // Check horizontal cells
    for (var i = 0; i < 9; i += 3) {
        if (cells[i].innerText && cells[i].innerText === cells[1 + i].innerText && cells[1 + i] == cells[2 + i].innerText) {
            setWinner(cells[i].innerText);
            return true;
        }
    }

    // Check vertical cells
    for (var j = 0; j < 3; j++) {
        if (cells[j].innerText && cells[j].innerText === cells[3 + j].innerText && cells[3 + j].innerText === cells[6 + j].innerText) {
            setWinner(cells[j].innerText);
            return true;
        }
    }

    // Check diagonal cells
    if (cells[0].innerText && cells[0].innerText == cells[4].innerText && cells[4].innerText === cells[8].innerText) {
        setWinner(cells[0].innerText);
        return true;
    }

    if (cells[2].innerText && cells[2].innerText == cells[4].innerText && cells[4].innerText === cells[6].innerText) {
        setWinner(cells[2].innerText);
        return true;
    }

    return false;
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x")
        {
            turn = "o"
        }
        else
        {
            turn = "x";
        }

        if (!checkForWinner()) {
            setTurn();
        }
    }
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener(event => {
        form.submit();
    });
}
setTurn();
*/

var dragging;

var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('dragenter', onDragEnter);
    squares[i].addEventListener('dragleave', onDragLeave);
    squares[i].addEventListener('dragstart', onDragStart);
    squares[i].addEventListener('dragend', onDragEnd);
}

function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;
    event.preventDefault();

    event.target.style.backgroundColor = "yellow";
}

function onDragStart(event) {
    dragging = {
        x: event.target.data-x,
        y: event.target.data-y
    }
}

function onDragEnd(event) {
    console.log(dragging);
    // do something...
}

function onDragLeave(event) {
    event.target.style.backgroundColor = null;
    console.log('dragleave', event);
}
