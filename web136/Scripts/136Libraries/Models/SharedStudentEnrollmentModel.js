﻿define([], function () {

    $.support.cors = true;
    function SharedStudentEnrollmentModel(studentID) {
        // "this" object in Javascript is not the same as C# "this" keyword.
        // In JavaScript, "this" object is the object that is current executing the method
        // so "this" object changes as program calls different methods.
        // The best way to retain the "this" pointer is to assign to another variable.
        // Common name to use it "that".
        var that = this;
        this.Load = function (studentID, callback) {
            $.ajax({
                url: "http://localhost:5419/Api/Student/GetEnrollments?studentID=" + studentID,
                data: "",
                dataType: "json",
                success: function (enrollmentData) {
                    callback(enrollmentData);
                },
                error: function () {
                    alert('Error while loading enrollment list.  Is your service layer running?');
                }
            });
        };

        this.AddEnrollment = function (studentID, scheduleID) {
            var addData = { studentId: studentID, scheduleId: scheduleID };
            $.ajax({
                url: "http://localhost:5419/Api/Student/EnrollSchedule",
                data: addData,
                async: true,
                method: "POST",
                dataType: "json",
                success: function() {
                    alert('Successfully enrolled');
                },
                error: function () {
                    alert('Error while adding enrollment. Is your service layer running?');
                }
            });
        };
    }

    return SharedStudentEnrollmentModel;
});