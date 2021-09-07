const process = (text)=>{
    var num1 = document.getElementsByName('num1')[0].value
    var num2 = document.getElementsByName('num2')[0].value    
    var res = eval(`${num1}${text}${num2}`)
    document.getElementById('result').value = res
}

const clear = ()=>{
    alert('test')
    document.getElementsByName('num1')[0].value = '';
    document.getElementsByName('num2')[0].value = '';
}