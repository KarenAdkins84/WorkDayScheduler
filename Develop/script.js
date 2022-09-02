var currentDay = moment().format("ddd MMM Do, YYYY, hh:mm");
$('#currentDay').text(currentDay);//sets current day at top of calendar//

var currentHour = moment().hour();
 console.log(currentHour) //sets current hour//
//jquery loop thru all textareas//
$('.description').each(function(){
    var timeBlock = parseInt($(this).attr('id')) //parses a string argument and returns an integer
    console.log(timeBlock)
    if (timeBlock < currentHour){
        $(this).addClass('past')
    } else if (timeBlock === currentHour) {
        $(this).addClass('present')
    } else {
        $(this).addClass('future')
    }
})

$(".saveBtn").on("click", function() {
    let value = $(this).siblings(".description").val();
    let timeEl = $(this).parent().attr("id");
    localStorage.setItem(timeEl, value);
    })


$('#hour8 .description').val(localStorage.getItem("hour8"));
$('#hour9 .description').val(localStorage.getItem("hour9"));
$('#hour10 .description').val(localStorage.getItem("hour10"));
$('#hour11 .description').val(localStorage.getItem("hour11"));
$('#hour12 .description').val(localStorage.getItem("hour12"));
$('#hour13 .description').val(localStorage.getItem("hour13"));
$('#hour14 .description').val(localStorage.getItem("hour14"));
$('#hour15 .description').val(localStorage.getItem("hour15"));
$('#hour16 .description').val(localStorage.getItem("hour16"));
$('#hour17 .description').val(localStorage.getItem("hour17"));





