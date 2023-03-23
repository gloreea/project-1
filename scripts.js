const start = document.querySelector("#start")
const mole = document.querySelectorAll(".mole")
const holes = document.querySelectorAll(".hole")
const score = document.querySelector("#score")
const timer =  document.querySelector("#timer")
const message = document.querySelector("#message")
let resetMoleInterval 
const reset = document.querySelector("#reset")
let sound = new Audio('./2019-12-09_-_Retro_Forest_-_David_Fesliyan.mp3')
// timer
let timerSecond = 30
start.addEventListener("click", function () {
    sound.play()
    timerInterval = setInterval (() => {
        timerSecond--
        timer.innerText = `:${timerSecond}`
        if (timerSecond <= 0) {
            clearInterval(timerInterval)
            message.innerText = ("GAME OVER")
            message.style.backgroundColor = "lightGreen"
            clearTimeout(resetMoleInterval)
            
        } 
        if (point == 15) {
            clearInterval(timerInterval)
            message.innerText = ("YOU WIN!")
            message.style.backgroundColor = "lightGreen" 
            clearTimeout(resetMoleInterval)
        }
    }, 1000)
   // resetMoleInterval = setTimeout(resetMole, Math.random() *2000+2000)  
    resetMoleInterval = setInterval(resetMole, 2000)
    randomHole()
   // clearInterval(start)
})

// function for holes (random)
// change random hole to give correct mole class
function randomHole() {
    const randomHole = holes[Math.floor(Math.random() * 9 )]
    randomHole.firstElementChild.style.visibility = "visible"
    randomHole.firstElementChild.classList.add("correctMole")
   // console.log(randomHole.firstElementChild)   
    //correctMole = randomHole 
}

// change reset mole to remove correct mole 
function resetMole() {
    mole.forEach((element) => {
        element.style.visibility = "hidden"
        element.classList.remove("correctMole")
    })
    randomHole()
   // resetMoleInterval = setTimeout(resetMole, Math.random() *2000+2000)   
}

let point = 0
// create class for correct mole 
// if you click correct mole, new mole spawns, timer resets
// if you don't click correct mole, same result
mole.forEach((element) => {
    element.addEventListener("click", function (e) {
        if (e.target.classList.contains("correctMole") ) {
            // console.log("correctMole")
            resetMole()
            //setTimeout(resetMole, 1500)
        }
    })
})

// function for score
           // holes.forEach((hole) => {
        mole.forEach((element) => {
            element.addEventListener("mousedown", function (e) {
                if(e.target.classList.contains("correctMole")) {
                    point++
                    score.innerText = `Score: ${point}` 
                } 
            })
        })
reset.addEventListener("click", () => {
    clearInterval(timerInterval)
    timerSecond = 30
    timer.innerText = `:${timerSecond}`
    point = 0
    score.innerText = `Score: ${point}`
    clearInterval(resetMoleInterval)
    message.style.backgroundColor = ""
    message.innerText = " "
        mole.forEach((element) => {
            element.style.visibility = "hidden"
            element.classList.remove("correctMole")
        })
})