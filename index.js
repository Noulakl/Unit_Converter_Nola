// Grabbing elements

const inputEL = document.querySelector("#UnitInputEl")
const convertBtn = document.querySelector("#ConvertBtn") 
const clearBtn = document.querySelector("#ClearBtn") 
const meterEl = document.querySelector("#meterEl")
const literEl = document.querySelector("#literEl")
const kiloEl = document.querySelector("#kiloEl")
const PreviousConversionEl = document.querySelector("#PreviousConversions")
let PreviousConversion = []
let ItemFromLocalStorage = JSON.parse(localStorage.getItem("previousConv"))
console.log(convertBtn, clearBtn)

if(ItemFromLocalStorage){
    PreviousConversion = ItemFromLocalStorage
    render(PreviousConversion)
}


//where the magic happens

function convert(){

    let Input = inputEL.value
    let meterToFeet = Input*3.281 
    let literToGallon = Input*0.264
    let kiloToPounds = Input*2.204
    
    let FeetToMeter = Input/3.281 
    let GallonToLiter = Input/0.264
    let PoundsToKilo = Input/2.20462

    let distance = meterEl.textContent = `${Input} m = ${meterToFeet.toFixed(3)} Ft | ${Input} Ft = ${FeetToMeter.toFixed(3)} m`
    let volume =  literEl.textContent = `${Input} L = ${literToGallon.toFixed(3)} Gal | ${Input} Gal = ${GallonToLiter.toFixed(3)} L`
    let mass =  kiloEl.textContent = `${Input} Kg = ${kiloToPounds.toFixed(3)} lb | ${Input} lb = ${PoundsToKilo.toFixed(3)} kg`

    PreviousConversion.push(`${distance} <br> ${volume} <br> ${mass}`)
    return distance
    return volume
    return mass 
}

function render(arr){
    let list = " "
    for(let i = 0; i< arr.length; i++ ){
        list += `<li>${arr[i]}</li>` 
    }
    PreviousConversionEl.innerHTML = list
    localStorage.setItem("previousConv", JSON.stringify(PreviousConversion))
}

// moment of truth

convertBtn.addEventListener("click", function(){
    convert()
    render(PreviousConversion)
})
clearBtn.addEventListener("click", function(){
    localStorage.clear()
    PreviousConversion = []
    render(PreviousConversion)
})