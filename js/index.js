var input = document.querySelector('.btn-group-toggle')
var btnn=document.querySelector('.btnn')

var today_date_day_name = document.getElementById("today_date_day_name")
var today_date_day_number = document.getElementById("today_date_day_number")
var today_date_day_month = document.getElementById("today_date_day_month")
var today = document.getElementById("today")
var today_locatio=document.getElementById("today_locatio")
var today_temp=document.getElementById("today_temp")
let city

var tomaorrow_day_name = document.getElementById("tomaorrow_day_name")
var tomaorrow_icon =document.getElementById("tomaorrow_icon")
var tomaorrow_max_temp = document.getElementById("tomaorrow_max_temp")
var tomaorrow_min_temp = document.getElementById("tomaorrow_min_temp")
var tomaorrow_condition = document.getElementById("tomaorrow_condition")

var after_tomorrow=document.getElementById("after_tomorrow")
var icon_after_tomorrow=document.getElementById("icon_after_tomorrow")
var max_temp_after_tomorrow=document.getElementById("max_temp_after_tomorrow")
var min_temp_after_tomorrow=document.getElementById("min_temp_after_tomorrow")
var after_tomorrow_condition=document.getElementById("after_tomorrow_condition")



async function getWheather(city){
    var wheather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7b1fdf489d4143aca75164614250507&q=${city}&days=3` , {method:"Get"})
    var result =await wheather.json()
    console.log(result);
   // بيانات النهاردة
let dateNow = new Date(result.forecast.forecastday[0].date);
let dayName = dateNow.toLocaleDateString('en-US', { weekday: 'long' });
let dayNumber = dateNow.getDate();
let monthName = dateNow.toLocaleDateString('en-US', { month: 'long' });

// عرض بيانات النهاردة
today_date_day_name.innerHTML = dayName;
today_date_day_number.innerHTML = dayNumber;
today_date_day_month.innerHTML = monthName;
today_locatio.innerHTML = result.location.name;
today_temp.innerHTML = result.current.temp_c + "°C";


// بيانات بكرة
let tomorrowData = result.forecast.forecastday[1];
let tomorrowDate = new Date(tomorrowData.date);
let tomorrowDayName = tomorrowDate.toLocaleDateString('en-US', { weekday: 'long' });
let maxTemp = tomorrowData.day.maxtemp_c;
let minTemp = tomorrowData.day.mintemp_c;
let conditionText = tomorrowData.day.condition.text;
let conditionIcon = tomorrowData.day.condition.icon;

// عرض بيانات بكرة
tomaorrow_day_name.innerHTML = tomorrowDayName;
tomaorrow_max_temp.innerHTML = maxTemp + "°C";
tomaorrow_min_temp.innerHTML = minTemp + "°C";
tomaorrow_condition.innerHTML = conditionText;
tomaorrow_icon.innerHTML = `<img src="https:${conditionIcon}" alt="${conditionText}" style="width:50px">`;



let afterTomorrowData=result.forecast.forecastday[2]
let afterTomorrowDate=new Date(afterTomorrowData.date)
let afterTomorrowName=afterTomorrowDate.toLocaleDateString("en-US" , {weekday:"long"})
let afterTomorrowMaxTemp=afterTomorrowData.day.maxtemp_c
let afterTomorrowMinTemp=afterTomorrowData.day.mintemp_c
let afterTomorrowConditionText=afterTomorrowData.day.condition.text
let afterTomorrowConditionIcon=afterTomorrowData.day.condition.icon

after_tomorrow.innerHTML=afterTomorrowName
icon_after_tomorrow.innerHTML= `<img src="https:${afterTomorrowConditionIcon}" alt="${afterTomorrowConditionText}" style="width:50px">`;
max_temp_after_tomorrow.innerHTML=afterTomorrowMaxTemp
min_temp_after_tomorrow.innerHTML=afterTomorrowMinTemp
after_tomorrow_condition.innerHTML=afterTomorrowConditionText

}

window.addEventListener("load", function () {
    getWheather("Cairo"); // أو أي مدينة انت عايزها تكون الافتراضية
});



btnn.addEventListener("click" , function(){
    city = input.value
    if (city != ""){
        getWheather(city)
    }
})





