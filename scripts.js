const start = document.querySelector("#start")
const mole = document.querySelectorAll(".mole")
const holes = document.querySelectorAll(".hole")
const score = document.querySelector("#score")
const timer =  document.querySelector("#timer")

// timer
start.addEventListener("click", function () {
    let timerSecond = 60
    timerInterval = setInterval (() => {
        timerSecond--
        timer.innerText = `:${timerSecond}`
        if (timerSecond <= 0) {
        clearInterval(timerInterval)
        }
    }, 1000)
})



function randomHole() {
    const randomHole = holes[Math.floor(Math.random() * 9 )]
    console.log(randomHole.firstElementChild)
    randomHole.firstElementChild.classList.add("isVisible")
    console.log(randomHole.firstElementChild)
    
    // holes.forEach(function (hole) {
        // holes.removeChild("mole")
        // })
        
    } 
    function resetMole() {
        mole.forEach((element) => {
            element.classList.remove("isVisible")
        })
        randomHole()
        
    }
    
    
    start.addEventListener("click", function (e) {
        // function for holes (random)
        timerInterval;
        setTimeout(resetMole, 2500)

    // }






    // function for score
//     holes.addEventListener("onclick", function (e) {
//         let point = 0
//         if(holes === "onclick") {
//             point++
//             score.innerText = `${point}`
//         }
//     })
 })