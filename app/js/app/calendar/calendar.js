/**
 * calendarDemoApp - 0.1.3
 */

app.controller('FullcalendarCtrl', ['$scope', 'eventsRef', function($scope, eventsRef) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that pulls from google.com */
    $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };

    /* event source that contains custom events on the scope */
   // $scope.events = [
   //    {title:'Lorem ipsum', start: new Date(y, m, 1), className: ['b-l b-2x b-info'], location:'Seoul', info:'This a all day event that will start from 9:00 am to 9:00 pm, have fun!'},
   //    {title:'Lorem ipsum', start: new Date(y, m, 6, 16, 0), className: ['b-l b-2x b-info'], location:'Seoul', info:'The most big racing of this year.'},
   //  ]; 

    /* alert on eventClick */
    $scope.alertOnEventClick = function( event, jsEvent, view ){
      event.title = "SOmething Else";
      $scope.events.$save(event);
    };
    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
      event.start += delta;
      $scope.events.$save(event); 

       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
       event.start = event.start.toISOString();
       event.end += delta;
       $scope.events.$save(event)
    };

    $scope.overlay = $('.fc-overlay');
    $scope.alertOnMouseOver = function( event, jsEvent, view ){
      $scope.event = event;
      $scope.overlay.removeClass('left right').find('.arrow').removeClass('left right top pull-up');
      var wrap = $(jsEvent.target).closest('.fc-event');
      var cal = wrap.closest('.calendar');
      var left = wrap.offset().left - cal.offset().left;
      var right = cal.width() - (wrap.offset().left - cal.offset().left + wrap.width());
      if( right > $scope.overlay.width() ) { 
        $scope.overlay.addClass('left').find('.arrow').addClass('left pull-up')
      }else if ( left > $scope.overlay.width() ) {
        $scope.overlay.addClass('right').find('.arrow').addClass('right pull-up');
      }else{
        $scope.overlay.find('.arrow').addClass('top');
      }
      (wrap.find('.fc-overlay').length == 0) && wrap.append( $scope.overlay );
    }

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventMouseover: $scope.alertOnMouseOver
      }
    };

    $scope.events = eventsRef.$asArray();    
    /* add custom event*/
    $scope.addEvent = function() {
      var newEvent = {
        title: 'Test',
        start: new Date().toISOString(),
        end: new Date().toISOString()
      } 
      $scope.events.$add(newEvent);
    };

    /* remove event */
    $scope.remove = function(index) {
      $scope.events.$remove(index);
    };

    /* Change View */
    $scope.changeView = function(view, calendar) {
      calendar.fullCalendar('changeView', view);
    };

    $scope.today = function(calendar) {
      calendar.fullCalendar('today');
    };

    $scope.renderCalender = function(calendar) {
      if(calendar){
        calendar.fullCalendar('render');
      }
    };

    /* event sources array*/
    $scope.eventSources = [$scope.events];
}]);
/* EOF */