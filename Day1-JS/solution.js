const process = (text)=>{
    var num1 = document.getElementsByName('num1')[0].value
    var num2 = document.getElementsByName('num2')[0].value    
    var res = eval(`${num1}${text}${num2}`)
    document.getElementById('result').value = res
}

function clearNum(){
    document.getElementsByName('num1')[0].value = null;
    document.getElementsByName('num2')[0].value = null;
}