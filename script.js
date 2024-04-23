let max=2;
let min=1;

let paragraph = document.querySelector(".para");
let tossImg = document.querySelector("img");


function toss(recieve){
    
    let randomNum = Math.round(Math.random() + max - min);
    console.log(randomNum);

    // if (recieve == "HEADS" && randomNum == 1) 
    //  {
    //   paragraph.innerHTML = `Congratulations! 🎉 you won the toss.`;
    //   tossImg.src =
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-IwR0Mnxa0Y2PDDc915DHXsYcLfJ0OYF9gL3q8X4lumAmjIjXx3XvQkO3DRWtZCtU&usqp=CAU";
    // } else if (recieve =="TAILS" && randomNum == 2)  {
    //   paragraph.innerHTML = `Congratulations! 🎉 you won the toss.`;
    //   tossImg.src =
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_86kFM1bE8QdAhuaMQXzDD1Sh4peneUJgpj0LTWJ_yehpgOwekHSznoAfWMK1DkbpKdw&usqp=CAU";
    // }else {
    //     paragraph.innerHTML = `You lose the toss.`;
    //     tossImg.src =
    //       "";
    
    // }


    if(randomNum==1){

        tossImg.src =
        "assets/heads.png";

    }else{
        tossImg.src = "assets/tails.png";

    }


    if((recieve=='HEADS' && randomNum==1 ) || (recieve=='TAILS' && randomNum==2)){
        paragraph.innerHTML = `Congratulations! 🎉 you won the toss.<br><button  type="button" onclick="tossAgain()" class="btn btn-danger bttn">TOSS AGAIN</button>`;
    }else{
        paragraph.innerHTML = `Sorry , You lose the toss <br><button  type="button" onclick="tossAgain()" class="btn btn-danger bttn">TOSS AGAIN</button>`;
    }

    


}


function tossAgain() {
  paragraph.innerHTML = "";
  tossImg.src = "";
}









