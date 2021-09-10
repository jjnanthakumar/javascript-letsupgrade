const process = (text) => {
    var num1 = document.getElementsByName('num1')[0].value
    var num2 = document.getElementsByName('num2')[0].value
    var res = eval(`${num1}${text}${num2}`)
    document.getElementById('result').value = res
}

function clearNum() {
    document.getElementsByName('num1')[0].value = null;
    document.getElementsByName('num2')[0].value = null;
}

// Create a array with 10 numbers and print only the even numbers with a loop from that array

// One liner
console.log(Array.from(Array(10).keys()).filter(x => x % 2 == 0))

// With loop
let arr = Array.from(Array(10).keys())
for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 == 0 && console.log(arr[i])
}

// Create a array with five city names and print it in reverse order
let city_names = ['Madurai', 'Chennai', 'Trichy', 'Coimbatore', 'Salem']
// One liner
console.log([...city_names].reverse())

// With loop
for (let i = city_names.length - 1; i > 0; i--) {
    console.log(city_names[i])
}

var Id = 0;
function addTask() {
    let data = document.getElementById('inp').value;
    document.getElementById('two').innerHTML += `
    <span id='${Id}'>
    <h1 style="display: inline-block !important" class='todo'>${data}</h1>
    <button class='btn btn-sm btn-danger' onclick="deleteTask(${Id})"><i class='fa fa-trash'></i></button>
    <button class='btn btn-sm btn-primary' onclick="updateTask(${Id})"><i class='fa fa-edit'></i></button>
    </span><br/>
    `;
    document.getElementById('inp').value = "";
}

function deleteTask(id) {
    document.getElementById(id).remove()
}

function updateTask(id) {
    let data = document.getElementById(id).innerText
    document.getElementById('inp').value = data
    deleteTask(id)
}
function changeColor() {

    document.getElementById('two').style.backgroundColor = "lightblue";

}
