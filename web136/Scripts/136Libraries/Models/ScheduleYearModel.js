define([], function () {
    $.support.cors = true;
    function ScheduleYearModel() {

        // "this" object in Javascript is not the same as C# "this" keyword.
        // In JavaScript, "this" object is the object that is current executing the method
        // so "this" object changes as program calls different methods.
        // The best way to retain the "this" pointer is to assign to another variable.
        // Common name to use it "that".
        var that = this;

        this.Load = function (callback) {
            
            $.ajax({
                url: "http://localhost:5419/Api/Schedule/GetScheduleYear",
                data: "",
                dataType: "json",
                success: function (scheduleYearData) {
                    callback(scheduleYearData);
                },
                error: function () {

                    alert('Error while loading schedule year.  Is your service layer running?');
                }
            });
        };
    }

    return ScheduleYearModel;
});