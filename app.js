$(document).ready(function() {
    const currentDay = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDay);
    
    const currentTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17]
})

currentTimes.forEach(time => {
    const timeCheck = window.localStorage.getItem(time);
    const currentHour = moment().hour()
    const timeID = "#" + time

    if(currentHour > time) {
        $(timeID).addClass("past");
        $(timeID).attr("disable", true);
    } else if (currentHour === time) {
        $(timeID).addClass("present");
    }else {
        $(timeID).addClass("future");
    }

    if (timeCheck === null)window.localStorage.setItem(time, "");
    if (timeCheck.length > 0) $(timeID).attr("value", window.localStorage.getItem(time))
})

$("form").on("button", function(e) {
    e.preventDefault();
    const time = e.target.queryselector("input").getAttribute("id");
    const text = e.target.queryselector("input"),value

    window.localStorage.setItem(time, text);

})
