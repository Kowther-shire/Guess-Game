let winAudio = new Audio("win.mp3");
let FailAudio = new Audio("fail.mp3");
let nearFailAudio = new Audio("nearFail.mp3");
var count=0;

let SecretNumber = Math.trunc(Math.random()*20)+1;
console.log(SecretNumber);
const CheckBtn = document.querySelector('.check');
CheckBtn.addEventListener('click', function(){

    count++;

    const guessNumber = Number(document.querySelector('.guess').value)
    

    //when there is no any value
    if(!guessNumber){
        document.querySelector('.message').textContent = '⛔ No Number!';
    }

    else if(guessNumber !==SecretNumber){
        document.querySelector('.message').textContent = guessNumber > SecretNumber ? 'too High' : 'Too Low';
        document.querySelector('.guess').value ='';

        if(count ===4){
            nearFailAudio.play();
        }
        if(count ===5){
            FailAudio.play();
            document.querySelector('.message').innerHTML =" <h4>No attempt left, Try again!😭</h4>"
            CheckBtn.Disabled = true;
            CheckBtn.style.backgroundColor = "rgba(220, 220, 220, 0.677)";
            }
        }
        else if(count ===5 &&  guessNumber === SecretNumber){ 
        winAudio.play();
        document.querySelector('.message').textContent ='👏Correct Number!';
        document.querySelector('.lets-paly').textContent ='🎉Congratulation';
        document.querySelector('.number').textContent=SecretNumber;
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width="15rem";
        CheckBtn.style.backgroundColor = "rgba(220, 220, 220, 0.677)";
        CheckBtn.Disabled= "default";
        // CheckBtn.style.backgroundColor="pink";
    
        } 
        else if(guessNumber === SecretNumber){
            document.querySelector('.message').textContent ='👏Correct Number!';
            document.querySelector('.lets-paly').textContent ='🎉Congratulation';
            document.querySelector('.number').textContent=SecretNumber;
            document.querySelector('body').style.backgroundColor = "green";
            document.querySelector('.number').style.width="15rem";
            CheckBtn.style.backgroundColor = "rgba(220, 220, 220, 0.677)";
            CheckBtn.Disabled= "default";
        }
        // btn again
        const againbtn = document.querySelector('.btnagain');
        againbtn.addEventListener('click', function(){
        count==0;
        document.querySelector('.number').textContent ='?';
        document.querySelector('.number').style.width="10rem";
        document.querySelector('.message').textContent ='Starting Games...... ';
        document.querySelector('.guess').value='';
        document.querySelector('.lets-paly').textContent = 'Lets play! 🤩';
        document.querySelector('body').style.backgroundColor = ("#f0db4f");
        CheckBtn.style.backgroundColor = "grey";
        CheckBtn.Disabled=false;
     }) 
});