define([], function () {
    $.support.cors = true;

    //// THe reason for asyncIndicator is to make sure Jasmine test cases can run without error
    //// Due to async nature of ajax, the Jasmine's compare function would throw an error during
    //// a callback. By allowing this optional paramter for StaffModel function, it forces the ajax
    //// call to be synchronous when running the Jasmine tests.  However, the viewModel will not pass
    //// this parameter so the asynncIndicator would be undefined which is set to "true". Ajax would
    //// be async when called by viewModel.
    function StaffModel(asyncIndicator) {
        if (asyncIndicator == undefined) {
            asyncIndicator = true;
        }

        this.Create = function (staff, callback) {
            $.ajax({
                async: asyncIndicator,
                method: "POST",
                url: "http://localhost:5419/Api/Staff/InsertStaff",
                data: staff,
                dataType: "json",
                success: function (result) {
                    callback(result);
                },
                error: function () {
                    alert('Error while adding staff.  Is your service layer running?');
                }
            });
        };

        this.Delete = function (id, callback) {
            $.ajax({
                async: asyncIndicator,
                method: "POST",
                url: "http://localhost:5419/Api/Staff/DeleteStaff?id=" + id,
                data: '',
                dataType: "json",
                success: function (result) {
                    callback(result);
                },
                error: function () {
                    alert('Error while deleteing staff.  Is your service layer running?');
                }
            });
        };

        this.GetDetail = function (id, callback) {
            $.ajax({
                async: asyncIndicator,
                method: "GET",
                url: "http://localhost:5419/Api/Staff/GetStaff?id=" + id,
                data: "",
                dataType: "json",
                success: function (result) {
                    callback(result);
                },
                error: function () {
                    alert('Error while loading staff detail.  Is your service layer running?');
                }
            });
        };
    }

    return StaffModel;
});