const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');



for (let button of buttons) {

    button.addEventListener('click',(e)=>{
        console.log(e.target);
        const buttonText = e.target.innerText;
        
       if(buttonText==='C'){
           screen.value ="";
       }
       
       else if(buttonText ==='x'){
           screen.value+= '*';
       }

       else if (buttonText=== '='){
           screen.value = eval(screen.value);
       }
       
       else{
        screen.value += buttonText;
       }


    })
}
