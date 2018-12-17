var $ = function (id) { return document.getElementById(id); };

var getMonthText = function(currentMonth) {
    console.log("Jake Adams -- Javascript")
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

var getLastDayofMonth = function(currentMonth, year) {
    let daysOfMonth =  32 - new Date(year, currentMonth, 32).getDate();
    return  daysOfMonth
};

window.onload = function () {
    var date = new Date()
    let currentMonth = date.getMonth()
    let year = date.getFullYear()
    let firstDay = (new Date(year, currentMonth)).getDay();
    $("month_year").innerHTML =  getMonthText(currentMonth) + " " + year;
    
    let today
    let day
    let dayNum
    let dayOfWeek = 1
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr")
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                day = document.createElement("td")
                dayNum = document.createTextNode("")
                day.appendChild(dayNum)
                row.appendChild(day)
            } else if ( dayOfWeek > getLastDayofMonth(currentMonth, year)) {
                break
            } else {
                day = document.createElement("td")
                dayNum = document.createTextNode(dayOfWeek)
                if (dayOfWeek === date.getDate() && year === date.getFullYear() && currentMonth === date.getMonth()) {
                    day.classList.add("current-day");
                } 
                day.appendChild(dayNum)
                row.appendChild(day)
                dayOfWeek++
            }
        }
        $("calendar").appendChild(row)
    }
};