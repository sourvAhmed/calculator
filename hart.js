function clickValue(value){
    if( (value === '+' || value === '-' ||value === '*' ||value === '/'||value === '%' ) && doubleOperator){
        display.value = display.value.slice(0,-1);
        display.value += value
        return;
    }
   
    display.value += value
    if(value === '+' || value === '-' ||value === '*' ||value === '/'||value === '%' ){
        doubleOperator= 1;
    }else{
        doubleOperator= 0;
    }
}

function calculatValue(){
    try{
        display.value = eval( display.value )
    }
    catch (erro) {
        display.value ='Ki bal lekho ';
    }
}

function clearScrean(){
    display.value = "";
}
function deleteValue(){
    display.value = display.value.slice(0,-1);
}