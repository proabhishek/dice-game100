let players = document.querySelectorAll("input")
let btns = document.querySelectorAll(".dice")
let player_score = document.querySelectorAll("span")
let end_game_button = document.querySelector("#endButton")
let winMessage = document.querySelector("#winMessage")

// disable the end game button 
end_game_button.disabled = true;

for(let t of btns){
  t.addEventListener("click", rollTheDice)
}

let count = 0
function rollTheDice(event){
     count++  
    if(count==5){
      end_game_button.disabled = false;
    }
    let clicked_button_id = event.target.id - 1
    btns[clicked_button_id].disabled = true
    // lets roll the dice: 
    let arr = [1,2,3,4,5,6]
    let random_index = parseInt(Math.random()*arr.length) 
    let random_dice_value = arr[random_index]
    player_score[clicked_button_id].innerText = random_dice_value
  
}

end_game_button.addEventListener("click", findWinner)


function findWinner(){

  // find highest score: 
  let highest_score = 0
  for(let t of player_score){
      let score = t.innerText 
       if(score > highest_score){
            highest_score = score
       }
  }
  // find all players with highest score: 
    // find index of all player then name

   let x =   player_score.filter((spanElement,index) => 
                             spanElement.innerText==highest_score)

  console.log(x)


  
  winMessage.innerHTML = `Highest score is = ${highest_score}`
  
}