
let input = [...document.querySelectorAll('input')];
console.log(input);

input.forEach(element => {
    element.addEventListener('keyup', () => {
        if (input.indexOf(element) + 1 != input.length) {
            input[input.indexOf(element) + 1].focus()
        }
    })
});

// let input1 = [...document.querySelectorAll('input')];
// function func() {
//     if (input ==1111) {
//         location.href="https://boomboomphysics.com";
//     } else {
//         alert("sorry! wrongcode");
//     }
// }
// func();