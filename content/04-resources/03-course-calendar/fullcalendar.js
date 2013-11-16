// See http://arshaw.com/fullcalendar/
$(function () {
	$("#gcal").fullCalendar({
		aspectRatio: 2,
		header: {
				left: 'title',
				center: '',
				right: 'today prev,next month,agendaWeek'
		},
		defaultView: 'agendaWeek',
		events: 'https://www.google.com/calendar/feeds/qljuu6ju2tmvmfgumd0bv7sqmo%40group.calendar.google.com/public/basic',
		firstHour: (new Date()).getUTCHours() - 1,
		minTime: 8, // 8 a.m.
		maxTime: 20 // 8 p.m.
	});
});
