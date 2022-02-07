let upperLimit = prompt('To what number should I play');
let O = 0;
let Output = ('');

for(let i = 1; i <= upperLimit; i++) {

    //Compacting attempt
    if(i % 3 == 0) {
        Output += 'Fizz'
    };
    if(i % 5 == 0) {
        Output += 'Buzz'
    };
    if(Output == '') {
        Output = i
    }

    //creating p for output
    const para = document.createElement("p");
    const node = document.createTextNode(Output);
    para.className = Output;
    para.appendChild(node);
    const element = document.getElementById("gameArea");
    element.appendChild(para);

    // resetting
    O = 0;
    Output = ('')
}