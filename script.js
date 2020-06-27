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
const equal = document.getElementById('equal');
const point = document.getElementById('.');
const root = document.getElementById('root');
const p1 = document.getElementById('(');
const p2 = document.getElementById(')')
let keys = [one, two, three, four, five, six, seven, eight, nine, zero, plus, minus, mult, div, root, point, p1, p2, c, del];
let message = document.getElementById('enter');
let tempMessage = ""

for (let i = 0; i < keys.length - 2; i++) {
    keys[i].addEventListener('click', function (event) {
        let j = document.getElementById(event.target.id)
        console.log(j.value)
        switch (j.value) {
            case 'x':
                message.value += '*';
                break;

            case ':':
                message.value += '/';
                break;

            case '√':
                message.value += '√(';
                break;

            default:
                message.value += j.value;
                break;

        }
    })

}

c.addEventListener('click', function (event) {
    tempMessage = ""
    message.value = tempMessage
})

del.addEventListener('click', function (event) {
    message.value = message.value.split('')
    message.value.pop()
    message.value = tempMessageList.join("")


})

equal.addEventListener('click', function (event) {
    let messageTempResult = message.value.split('')

    for (let i = 0; i < messageTempResult.length; i++) {
        if (messageTempResult[i] === '√')
        {
            messageTempResult[i] = 'Math.sqrt'
        }

    }

    console.log(messageTempResult)
    messageTempResult = messageTempResult.join('')
    console.log(messageTempResult)
    message.value = eval(messageTempResult)

    if (message.value === '777978')
    {
        let audio = new Audio('./media/music.mp3')
        let timer = 70000;
        let audio2 = new Audio('./media/audio.ogg')
        let gif = document.getElementById('gif')
        audio.play()
        setTimeout(function() {
            audio2.play();
            gif.style.visibility = 'visible';

        }, timer);


    }
})