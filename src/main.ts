import './style.scss'
import {toggleTheme} from './ts/toggle'
import { onNumbersClick, onDelClick, onResetClick, onActionClick, onSubmitClick } from './ts/calc';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <header>
      <h1>calc</h1>
      <section>
        <h2>Theme</h2>
        <button class="toggle" id="toggle">
          <span id="select-dark"></span>
          <span id="select-light"></span>
          <span id="select-fav" class="active"></span>
        </button>
      </section>
    </header>
    <main>
      <section class="display">
        <h3 class="result" id="result">0</h3>
      </section>
      <div class="calculator">
        <button class="number" type="button" value="7">7</button>
        <button class="number" type="button" value="8">8</button>
        <button class="number" type="button" value="9">9</button>
        <button class="del" id="del" type="button">del</button>
        <button class="number" type="button" value="4">4</button>
        <button class="number" type="button" value="5">5</button>
        <button class="number" type="button" value="6">6</button>
        <button class="add action" id="add" value="+" type="button">+</button>
        <button class="number" type="button" value="1">1</button>
        <button class="number" type="button" value="2">2</button>
        <button class="number" type="button" value="3">3</button>
        <button class="subtract action" id="subtract" value="-" type="button">-</button>
        <button class="number decimal" id="decimal" value="." type="button">.</button>
        <button class="number" type="button" value="0">0</button>
        <button class="divide action" id="divide" value="/" type="button">/</button>
        <button class="multiply action" id="multiply" value="*" type="button">x</button>
        <button class="reset" id="reset" type="reset">reset</button>
        <button class="calculate" id="calculate" type="submit">=</button>
      </div>
    </main>
  </div>
`
// toggle
const darkThemeControl = document.getElementById('select-dark')
const lightThemeControl = document.getElementById('select-light')
const favThemeControl = document.getElementById('select-fav')

darkThemeControl && toggleTheme(darkThemeControl, 'dark')
lightThemeControl && toggleTheme(lightThemeControl, 'light')
favThemeControl && toggleTheme(favThemeControl, 'fav')

// calculator
const numbers = document.querySelectorAll<HTMLButtonElement>('.calculator .number')
numbers.forEach(element => {
  element.addEventListener('click', ()=>onNumbersClick(element))
})
const actions = document.querySelectorAll<HTMLButtonElement>('.calculator .action')
actions.forEach(element => {
  element.addEventListener('click', ()=>onActionClick(element))
})
const del = document.getElementById('del');
del?.addEventListener('click', onDelClick);
const reset = document.getElementById('reset');
reset?.addEventListener('click', onResetClick);
const submit = document.getElementById('calculate');
submit?.addEventListener('click', ()=>onSubmitClick())