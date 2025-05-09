let obj = {
  win: 0,
  loss: 0,
  tie: 0,
  palyed: 0
};

function game(option) {
  obj = JSON.parse(localStorage.getItem("score"));
  if(obj === null){
    obj = {
      win: 0,
      loss: 0,
      tie: 0,
      palyed: 0
    };
  }
  else{
  let randommove = Math.random();
  let move = '';
  let result = '';
  p4 = document.querySelector(".p4");
  p5 = document.querySelector(".p5");
  if (randommove >= 0 && randommove < (1 / 3)) {
    move = 'rock';
  }
  else if (randommove >= (1 / 3) && randommove < (2 / 3)) {
    move = 'paper';
  }
  else if (randommove >= (2 / 3) && randommove < 1) {
    move = 'siccros';
  }
  if (option === 'reset') {
    obj.win = 0;
    obj.loss = 0;
    obj.tie = 0;
    obj.palyed = 0;
    localStorage.setItem("score", JSON.stringify(obj));
    p2 = document.querySelector(".p2");
    p2.innerHTML = `win: ${obj.win} loss: ${obj.loss} tie: ${obj.tie} games played : ${obj.palyed}`;
    console.log(`win: ${obj.win} loss: ${obj.loss} tie: ${obj.tie} games played : ${obj.palyed}`);
    p4.src = "images/load.png";
    p5.src = "images/load.png";;
  }
  else {
    //tie chances
    if (move === 'rock' && option === 'rock') {
      result = 'tie';
      obj.tie = obj.tie + 1;
      obj.palyed = obj.palyed+1;
      p4.src = "images/rock.png";
      p5.src = "images/rock.png";
    }
    else if (move === 'paper' && option === 'paper') {
      result = 'tie';
      obj.tie = obj.tie + 1;
      obj.palyed = obj.palyed+1;
      p4.src = "images/paper.png";
      p5.src = "images/paper.png";
    }
    else if (move === 'siccros' && option === 'siccros') {
      result = 'tie';
      obj.tie = obj.tie + 1; 
      obj.palyed = obj.palyed+1;
      p4.src = "images/scissor.png";
      p5.src = "images/scissor.png";
    }
    //comparing with rock
    else if (move === 'rock' && option === 'siccros') {
      result = 'you losse';
      obj.loss = obj.loss + 1;
      obj.palyed = obj.palyed+1;
      p4.src = "images/rock.png";
      p5.src = "images/scissor.png";
    }
    else if (move === 'rock' && option === 'paper') {
      result = 'you won';
      obj.win = obj.win + 1;
      obj.palyed = obj.palyed+1;
      p4.src = "images/rock.png";
      p5.src = "images/paper.png";
    }
    //comparing with siccros
    else if (move === 'siccros' && option === 'paper') {
      result = 'you lose';
      obj.loss = obj.loss + 1;
      obj.palyed = obj.palyed+1;
      p4.src = "images/scissor.png";
      p5.src = "images/paper.png";
    }
    else if (move === 'siccros' && option === 'rock') {
      result = 'you won';
      obj.win = obj.win + 1;
      obj.palyed = obj.palyed+1;
      p4.src = "images/scissor.png";
      p5.src = "images/rock.png";
    }
    //comparing with paper
    else if (move === 'paper' && option === 'rock') {
      result = 'you lose';
      obj.loss = obj.loss + 1;
      obj.palyed = obj.palyed+1;
      p4.src = "images/paper.png";
      p5.src = "images/rock.png";
    }
    else if (move === 'paper' && option === 'siccros') {
      result = 'you won';
      obj.win = obj.win + 1;
      obj.palyed = obj.palyed+1;
      p4.src = "images/paper.png";
      p5.src = "images/scissor.png";
    }
    console.log('your move  ' + option + ' ' + 'computer move ' + move + ' ' + 'so ' + result);
  }
  localStorage.setItem("score", JSON.stringify(obj));
  obj = JSON.parse(localStorage.getItem("score"));
  if (option === "reset") {
    p2 = document.querySelector(".p2");
    p2.innerHTML = `win: ${obj.win} loss: ${obj.loss} tie: ${obj.tie}`;
    document.querySelector(".p3").innerHTML = ` ${result}`
  }
  else {
    p2 = document.querySelector(".p2");
    p2.innerHTML = `win: ${obj.win} loss: ${obj.loss} tie: ${obj.tie} games played : ${obj.palyed}`;
    document.querySelector(".p3").innerHTML = ` ${result}`
  }
  }
}