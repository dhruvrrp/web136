// ScheduleYearViewModel depends on the Models/ScheduleYearModel to process requests (Load)
define(['Models/ScheduleYearModel'], function (scheduleYearModel) {
    function ScheduleYearViewModel() {
        this.Load = function () {
            var scheduleYearModelObj = new scheduleYearModel();

            // Because the Load() is a async call (asynchronous), we'll need to use
            // the callback approach to handle the data after data is loaded.
            scheduleYearModelObj.Load(function (scheduleYearData) {

                // scheduleYear - presentation layer model retrieved from /Schedule/GetScheduleYear route.
                // scheduleYearViewModel - view model for the html content
                var scheduleYearViewModel = new Array();

                // DTO from the JSON model to the view model. In this case, scheduleYearViewModel doesn't need the "id" attribute
                for (var i = 0; i < scheduleYearData.length; i++) {

                    scheduleYearViewModel[i] = {
                        year: scheduleYearData[i],
                    };

                }

                // this is using knockoutjs to bind the viewModel and the view (Home/Index.cshtml)
                ko.applyBindings({ viewModel: scheduleYearViewModel }, document.getElementById("divScheduleYearContent"));
            });
        };
    }
    return ScheduleYearViewModel;
}
);