const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const mult = document.getElementById('x');
const div = document.getElementById(':');
const c = document.getElementById('c');
const del = document.getElementById('del');
const equal = document.getElementById('equal')
let keys = [one, two, three, four, five, six, seven, eight, nine, zero, plus, minus, mult, div, c, del];
let message = document.getElementById('enter');
let tempMessage = ""

for (let i = 0; i < keys.length - 2; i++) {
    keys[i].addEventListener('click', function (event) {
        let j = document.getElementById(event.target.id)
        console.log(j.value)
        switch (j.value) {
            case 'x':
                tempMessage += '*';
                message.value = tempMessage;
                break;

            case ':':
                tempMessage += '/';
                message.value = tempMessage;
                break;

            default:
                tempMessage += j.value
                message.value = tempMessage
                break;

        }
    })

}

c.addEventListener('click', function (event) {
    tempMessage = ""
    message.value = tempMessage
})

del.addEventListener('click', function (event) {
    tempMessageList = tempMessage.split('')
    tempMessageList.pop()
    tempMessage = tempMessageList.join("")
    message.value = tempMessage


})

equal.addEventListener('click', function (event) {
    result = eval(tempMessage)
    tempMessage = result
    message.value = result
})