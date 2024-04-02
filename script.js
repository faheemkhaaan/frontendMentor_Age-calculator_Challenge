const dayOld = document.querySelector(".days-old");
const monthOld = document.querySelector(".months-old");
const yearOld = document.querySelector(".year-old");
const hourOld = document.querySelector(".hour-old");
const minutesOld = document.querySelector(".minutes-old");
const secondsOld = document.querySelector('.seconds-old');
const btn = document.querySelector(".btn");
const dayRequired = document.querySelector(".day-required");
const monthRequired = document.querySelector(".month-required");
const yearRequired = document.querySelector(".year-required");

let currentDate = new Date();
let days = 0;
let years = 0;
let months = 0;
btn.addEventListener("click", inputAge)
function inputAge(){
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");

    if(dayInput.value >= 1 && dayInput.value <= 31)
    {
        if(dayInput.value === ''){
            dayRequired.textContent = "Day is required"
        } else{
            let knowDays;
            if(currentDate.getDate() <= dayInput.value){
                knowDays = dayInput.value - currentDate.getDate()
                console.log(knowDays+"kown days")
            }else{
                knowDays = currentDate.getDate() - dayInput.value;
                console.log('known days' + knowDays)
            }
            
            setInterval(() => {
                if(days < knowDays){
                    days++
                    
                    dayOld.textContent = days;
                }
            }, 100);
            dayInput.value = ''
            console.log(knowDays)
            dayRequired.textContent = ""
            dayRequired.style.height = "0px"
            days = 0;
            
        }
    }else
    {
        dayRequired.textContent = "Enter a valid day"
        dayRequired.style.height = "24px"
    }

    if(monthInput.value >= 1 && monthInput.value <= 12){
        if(monthInput.value === ""){
            monthRequired.textContent = "Month is required"
            monthRequired.style.height = '24px'
        }else{
            let knownMonth;
            if(currentDate.getMonth() <= monthInput.value){
                knownMonth = monthInput.value - currentDate.getMonth()
                console.log("month is smaller")
            }else{
                knownMonth = currentDate.getMonth() - monthInput.value
                console.log("month is larger")
            }
            setInterval(() => {
                if(months < knownMonth){
                    months++ 
                    
                    monthOld.textContent = months;
                }
            }, 100);
            monthInput.value = ''
            monthRequired.textContent = ''
            monthRequired.style.height = "0px"
            months = 0;
        
        }
    }else{
        monthRequired.textContent = "Enter a valid month"
        monthRequired.style.height = "24px"
    }
    
    if(yearInput.value === ""){
        yearRequired.textContent = "Year is required";
        yearRequired.style.height = "24px"
    }else if(yearInput.value > currentDate.getFullYear()){
        yearRequired.textContent = "Year is larger"
        yearRequired.style.height = "24px"
    }else{
        let knownYear = currentDate.getFullYear() - yearInput.value;
        yearInput.value = ''
        yearRequired.textContent = ''
        yearRequired.style.height = "0px"
        setInterval(() => {
            if(years < knownYear){
                years++
                yearOld.textContent = years;
                
            }
        }, 100);
        years = 0;
    }


}

