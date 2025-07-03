let input=document.querySelector('#Input')
let buttons=document.querySelectorAll('.buttons')

buttons.forEach((button)=>{
button.addEventListener('click',buttonDisplayInputValue)

})

function buttonDisplayInputValue(e){
let bttuonvalue=e.target.textContent
     if(bttuonvalue==='AC'){
    ClearALLInputValue()
}
else if(bttuonvalue==='DEL')
    DelInputValue()

else if(bttuonvalue==='='){
ThatFindsTheAnswer()
}
else{
    if(input.value==0){

input.value=bttuonvalue
}
else{
input.value+=bttuonvalue
}
}
}

function ClearALLInputValue(){
    input.value='0'
    
}
function DelInputValue(){
   let delInput =input.value.substring(0,input.value.length-1)
   input.value=delInput
   if(input.value===''){
    input.value='0'
    
   }

}
function ThatFindsTheAnswer(){

    try{
    input.value=eval(input.value)
        
    }
catch{
    input.value='error oldu'
}
}


