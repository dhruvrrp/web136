// ScheduleQuarterViewModel depends on the Models/ScheduleQuarterModel to process requests (Load)
define(['Models/ScheduleQuarterModel'], function (scheduleQuarterModel) {
    function ScheduleQuarterViewModel() {
        this.Load = function () {
            var scheduleQuarterModelObj = new scheduleQuarterModel();

            // Because the Load() is a async call (asynchronous), we'll need to use
            // the callback approach to handle the data after data is loaded.
            scheduleQuarterModelObj.Load(function (scheduleQuarterData) {

                // scheduleQuarter - presentation layer model retrieved from /Schedule/GetScheduleQuarter route.
                // scheduleQuarterViewModel - view model for the html content
                var scheduleQuarterViewModel = new Array();

                // DTO from the JSON model to the view model. In this case, scheduleQuarterViewModel doesn't need the "id" attribute
                for (var i = 0; i < scheduleQuarterData.length; i++) {
                    scheduleQuarterViewModel[i] = {
                        quarter: scheduleQuarterData[i].Quarter,
                    };
                }

                // this is using knockoutjs to bind the viewModel and the view (Home/Index.cshtml)
                ko.applyBindings({ viewModel: scheduleQuarterViewModel }, document.getElementById("divScheduleQuarterContent"));
            });
        };
    }
    return ScheduleQuarterViewModel;
}
);