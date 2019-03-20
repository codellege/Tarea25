let n = document.getElementById('number')
let b = document.getElementById('button')
let prime = true
let div = 0
let i = 1

b.addEventListener('click', () => {

    let x = Number(n.value)


        for (i = 0; i <= x; x--) {
            div = x % 2
            if (div == 0) {
                console.log(x)
                break
            }
        }

    })