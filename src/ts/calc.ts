let result:number = 0;
let numbers: (number|string)[] = [];
let activeAction: '+'|'-'|'*'|'/'|null = null;

export const action = (action: string|null) => { 
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
    resultDisplay.textContent = Intl.NumberFormat().format(Number(display))||'0'
    }
}

export const onActionClick = (element:HTMLButtonElement) => {
    result = (result&&numbers.length===0) ? Number(action(activeAction)) : Number(numbers.join(''))
    changeDisplay(result+'')
    numbers = []
    activeAction = element.value as typeof activeAction
}

export const onNumbersClick = (element: HTMLButtonElement) => {
    numbers.push(element.value !== '.' ? Number(element.value) : '0.')
    changeDisplay(numbers.join(''))
}

export const onDelClick = () => {
    numbers.pop();
    changeDisplay(numbers.join(''))
}

export const onSubmitClick = () => {
    result = ((activeAction&&numbers.length>0)||result) ? Number(action(activeAction)) : Number(numbers.join(''))
    numbers = []
    activeAction = null;
    changeDisplay(result + '')
}

export const onResetClick = () => {
    result = 0;
    numbers = [];
    activeAction = null;
    changeDisplay('0')
}