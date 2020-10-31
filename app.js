$(document).ready(function () {

   // Current day is displayed at the top of the calendar when the planner is open
     const currentDay = moment().format('dddd, MMMM Do YYYY');
     $("#currentDay").text(currentDay)
     $("span").attr("style", "width: 75px")
   
   
     const currentTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17]
   
      currentTimes.forEach(time => {
       const timeCheck = window.localStorage.getItem(time)
       const currentHour = moment().hour()
       const timeID = "#" + time
       
       // each time block is color-coded to indicate whether it is in the past, present, or future
       if (currentHour > time) {
         $(timeID).addClass("bg-secondary text-light")
         $(timeID).attr("disabled", true)
       } else if (currentHour === time) {
         $(timeID).addClass("bg-danger text-light")
       } else {
         $(timeID).addClass("bg-success text-light")
       }
   
       if (timeCheck === null) window.localStorage.setItem(time, "")
       if (timeCheck.length > 0) $(timeID).attr("value", window.localStorage.getItem(time))
     })
   
      // The text for that event is saved in local storage when the save button is click
     $("form").on("submit", function (e) {
       e.preventDefault()
   
       const time = e.target.querySelector("input").getAttribute("id")
       const text = e.target.querySelector("input").value
   
       window.localStorage.setItem(time, text)
     })
   })
   