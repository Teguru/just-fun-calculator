console.log('Hello world!!!')
const btns = document.querySelectorAll('.btn')
const screen = document.getElementById('calc-screen')

let userInput = ''

btns.forEach(button =>
    button.addEventListener('click', (event) => {
        const value = button.textContent

        if (value === 'C') {
            screen.value = '0'
            userInput = ''
            return
        }

        if (value === '=') {
            let expression = userInput
                .replace(/÷/g, '/')
                .replace(/×/g, '*')
                .replace(/%/, '/100')

            try {
                const result = eval(expression)
                userInput = String(result)
            } catch {
                screen.value = 'Error'
            }
        }

        userInput += value
        screen.value = userInput.replace(/=/g, '')

        console.log(userInput)
    })
)
