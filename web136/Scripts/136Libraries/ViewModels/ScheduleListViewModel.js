// ScheduleListViewModel depends on the Models/ScheduleListModel to process requests (Load)
define(['Models/ScheduleListModel'], function (scheduleListModel) {
    function ScheduleListViewModel() {
        this.Load = function () {
            var scheduleListModelObj = new scheduleListModel();

            // Because the Load() is a async call (asynchronous), we'll need to use
            // the callback approach to handle the data after data is loaded.
            scheduleListModelObj.Load(function (scheduleListData) {

                // scheduleList - presentation layer model retrieved from /Schedule/GetScheduleList route.
                // scheduleListViewModel - view model for the html content
                var scheduleListViewModel = new Array();

                // DTO from the JSON model to the view model. In this case, scheduleListViewModel doesn't need the "id" attribute
                for (var i = 0; i < scheduleListData.length; i++) {
                    scheduleListViewModel[i] = {
                         //136 TODO fill in what scheduleList should display
                    };
                }

                // this is using knockoutjs to bind the viewModel and the view (Home/Index.cshtml)
                ko.applyBindings({ viewModel: scheduleListViewModel }, document.getElementById("divScheduleListContent"));
            });
        };
    }
    return ScheduleListViewModel;
}
);