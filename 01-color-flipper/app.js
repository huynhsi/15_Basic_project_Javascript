const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    //lay so ranom betweem 0-3
    const randomnumber = getRanddomNumber()

    document.body.style.backgroundColor = colors[randomnumber]
    color.textContent = colors[randomnumber]
})

function getRanddomNumber() {
    return Math.floor( Math.random() * colors.length )
}
