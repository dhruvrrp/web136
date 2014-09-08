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

        this.Load = function (staffId, callback) {
            $.ajax({
                method: 'GET',
                url: "http://localhost:5419/Api/Staff/GetStaffInfo?StaffId=" + staffId,
                data: "",
                dataType: "json",
                success: function (result) {
                    // when ajax call recevies data, it'll call the function "callback" which is passed in this as a parameter.
                    // See StaffViewModel.load and see how it's being used
                    callback(result); // "that" is currently pointing to the StaffModel object
                },
                error: function () {

                    alert('Error while loading staff info.');
                    callback("Error while loading staff info");
                }
            });
        };

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

        this.Update = function (staffData, callback) {
            $.ajax({
                method: 'POST',
                url: "http://localhost:5419/Api/Staff/EditStaffInfo",
                data: staffData, // note, staffData must be the same as PLStaff for this to work correctly
                success: function (message) {
                    callback(message);
                },
                error: function () {
                    callback('Error while updating staff info');
                }
            });
        };

        /*
        this.Update = function (staffData, password) {
            $.ajax({
                async: asyncIndicator,
                method: "POST",
                url: "http://localhost:5419/Api/Staff/EditStaff?id=" + id + "&email=" + email + "&password=" + password,
                data: "",
                dataType: "json",
                success: function (result) {
                    callback(result);
                },
                error: function () {
                    alert('Error while updating staff detail.  Is your service layer running?');
                }
            });
        */
    }
    return StaffModel;
}
);