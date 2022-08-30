var currentDay = moment().format("ddd MMM Do, YYYY, hh:mm");
$('#currentDay').text(currentDay);//sets current day at top of calendar//

var currentHour = moment().hour();
 console.log(currentHour) //sets current hour//
//jquery loop thru all textareas//
$('.description').each(function(){
    var timeBlock = parseInt($(this).attr('id'))
    console.log(timeBlock)
    if (timeBlock < currentHour){
        $(this).addClass('past')
    } else if (timeBlock === currentHour) {
        $(this).addClass('present')
    } else {
        $(this).addClass('future')
    }
})