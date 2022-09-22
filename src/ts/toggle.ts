const toggleClass = (theme: 'dark' | 'fav' | 'light') => {
    const darkThemeControl = document.getElementById('select-dark')
    const lightThemeControl = document.getElementById('select-light')
    const favThemeControl = document.getElementById('select-fav')
    const controls = [{ el: darkThemeControl, theme: 'dark' }, { el: lightThemeControl, theme: 'light' }, { el: favThemeControl, theme: 'fav' }]
    controls.forEach((control) => {
        if (control.theme == theme) {
            if (!control.el?.classList.contains('active')) {
                control.el?.classList.add('active')
            } 
        document.documentElement.classList.value = control.theme       
        }
        else {
            if (control.el?.classList.contains('active')) {
                control.el?.classList.remove('active')
            }
        }
    })
}

export const toggleTheme = (element: HTMLElement,theme: 'dark'|'fav'|'light') => {
    element.addEventListener('click',()=>toggleClass(theme))
}
