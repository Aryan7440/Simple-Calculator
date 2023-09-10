let exp = "";

let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let btn = e.target.value;
        press(btn);
        document.querySelector(".screen").value = exp;

    })
})
document.addEventListener("keydown",function(event)
{
    if(event.key=='Enter')press('=');
    else if(event.key=='Backspace')press('back');
    else press(event.key);
    document.querySelector(".screen").value = exp;
})
let ind = -1;
function press(button) {
    switch (button) {
        case '%':
            exp = exp + '%';
            break;
        case 'CE':
            ind = exp.length - 1;
            while (ind >= 0 && exp[ind] >= '0' && exp[ind] <= '9') ind--;
            exp = exp.slice(0, ind + 1);
            break;
        case 'C':
            exp = "";
            break;
        case 'back':
            exp = exp.slice(0, -1);
            break;
        case 'reciprocal':
            ind = exp.length - 1;
            while (ind >= 0 && exp[ind] >= '0' && exp[ind] <= '9') ind--;
            let rec = exp.slice(ind + 1, exp.length);
            exp = exp.slice(0, ind + 1) + `(1/${rec})`;
            break;
        case 'square':
            ind = exp.length - 1;
            while (ind >= 0 && exp[ind] >= '0' && exp[ind] <= '9') ind--;
            let sq = exp.slice(ind + 1, exp.length);
            exp = exp.slice(0, ind + 1) + `${sq * sq}`;
            break;
        case 'squareroot':
            ind = exp.length - 1;
            while (ind >= 0 && exp[ind] >= '0' && exp[ind] <= '9') ind--;
            let root = exp.slice(ind + 1, exp.length);
            exp = exp.slice(0, ind + 1) + `${Math.sqrt(root)}`;
            break;
        case '/':
            exp += '/';
            break;
        case '+':
            exp += '+';
            break;
        case '-':
            exp += '-';
            break;
        case '*':
            exp += '*';
            break;
        case '=':
            exp = eval(exp);
            break;
        case '0':
            exp = exp + '0';
            break;
        case '1':
            exp = exp + '1';
            break;
        case '2':
            exp += '2';
            break;
        case '3':
            exp += '3';
            break;
        case '4':
            exp += '4';
            break;
        case '5':
            exp += '5';
            break;
        case '6':
            exp += '6';
            break;
        case '7':
            exp += '7';
            break;
        case '8':
            exp += '8';
            break;
        case '9':
            exp += '9';
            break;
        case '.':
            exp = exp+'.';
            break;
        default:
            break;
    }

}