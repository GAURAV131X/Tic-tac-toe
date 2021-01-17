let count = 1;
function fill_X_O() {
  console.log(count);
  const button_clicked_id = document.getElementById(event.target.id);
  console.log(button_clicked_id);
  const player_turn_id = document.getElementById("playerTurn");
  console.log(player_turn_id);
  if (count <= 9) {
    if (count % 2 != 0 && button_clicked_id.innerHTML === "") {
      button_clicked_id.innerHTML = "X";
      player_turn_id.innerHTML = "O player's turn";
      count++;
      if (check_win()) {
        alert("Congratulations! Player 1 wins");
        reset();
      }
    }
    if (count % 2 == 0 && button_clicked_id.innerHTML === "") {
      button_clicked_id.innerHTML = "O";
      player_turn_id.innerHTML = "X player's turn";
      count++;
      if (check_win()) {
        alert("Congratulations! Player 2 wins");
        reset();
      }
    }
    if(count > 9){
        alert("draw");
        reset();
    }
  }
  
}

function check_win() {
  if (
    check_condition("1", "2", "3") ||
    check_condition("4", "5", "6") ||
    check_condition("7", "8", "9") ||
    check_condition("1", "4", "7") ||
    check_condition("2", "5", "8") ||
    check_condition("3", "6", "9") ||
    check_condition("1", "5", "9") ||
    check_condition("3", "5", "7")
  ) {
    return true;
  } else {
    return false;
  }
}

function check_condition(btn1, btn2, btn3) {
  if (
    get_data(btn1) != "" &&
    get_data(btn2) != "" &&
    get_data(btn3) != "" &&
    get_data(btn1) === get_data(btn2) &&
    get_data(btn2) === get_data(btn3)
  ) {
    return true;
  } else {
    return false;
  }
}

function get_data(btn) {
  return document.getElementById(btn).innerHTML;
}

function reset() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(String(i)).innerText = "";
  }
  count = 1;
}
