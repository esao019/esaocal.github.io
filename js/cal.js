const output = document.getElementById('output_screen');

function display(num){
 output.value += num; // this displays the output on the screen
}

function calculate(){
    try{
        output.value = eval(output.value);

    }
    catch(err){
        alert('invalid');
    }
}
