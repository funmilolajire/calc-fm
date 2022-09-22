let result:number = 0;
let numbers: (number|string)[] = [];
let activeAction: '+'|'-'|'*'|'/'|null = null;

export const action = (action: string) => { 
    switch (action) {
        case '+':
            return result + Number(numbers.join(''));
        case '-':
            return result - Number(numbers.join(''));
        case '/':
            return (result / Number(numbers.join(''))).toFixed(3);
        case '*':
            return result * Number(numbers.join(''));
        default:
            return result
    }
}

export const changeDisplay = (display:string) => {
const resultDisplay = document.getElementById("result")
    if(resultDisplay){
    resultDisplay.textContent = display||'0'
    }
}

export const onActionClick = (element:HTMLButtonElement) => {
    result = numbers.length===0 ? result : Number(numbers.join(''))
    numbers = []
    activeAction = element.value as typeof activeAction
    console.log(result,activeAction,numbers)
}

export const onNumbersClick = (element: HTMLButtonElement) => {
    numbers.push(element.value !== '.' ? Number(element.value) : '.')
    changeDisplay(numbers.join(''))
    console.log(result,activeAction,numbers)
}

export const onDelClick = () => {
    numbers.pop();
    changeDisplay(numbers.join(''))
}

export const onSubmitClick = () => {
    result = activeAction ? Number(action(activeAction)) : Number(numbers.join(''))
    numbers = []
    changeDisplay(result + '')
    console.log(result,activeAction,numbers)
}

export const onResetClick = () => {
    result = 0;
    numbers = [];
    activeAction = null;
    changeDisplay('0')
}