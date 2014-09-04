define(['Models/SharedStudentEnrollmentModel'], function (sharedStudentEnrollmentModel) {
    function SharedStudentEnrollmentViewModel() {
        this.Load = function (studentID) {
            alert("studentID" + studentID);

            var sharedStudentEnrollmentModelObj = new sharedStudentEnrollmentModel();
            // Because the Load() is a async call (asynchronous), we'll need to use
            // the callback approach to handle the data after data is loaded.
            sharedStudentEnrollmentModelObj.Load(function (enrollmentData, studentID) {
                // courseList - presentation layer model retrieved from /Course/GetCourseList route.
                // courseListViewModel - view model for the html content
                var sharedStudentEnrollmentViewModel = new Array();
                // DTO from the JSON model to the view model. In this case, courseListViewModel doesn't need the "id" attribute
                alert("enrollmentData.length : " + enrollmentData.length);

                for (var i = 0; i < enrollmentData.length; i++) {
                    alert("test");
                    sharedStudentEnrollmentViewModel[i] = {
                        title: enrollmentData[i].Title,
                        description: enrollmentData[i].Description
                    };
                }
                alert("prebinding");
                // this is using knockoutjs to bind the viewModel and the view (Home/Index.cshtml)
                ko.applyBindings({ viewModel: sharedStudentEnrollmentViewModel },
                    document.getElementById("divSharedStudentEnrollment"));
            });
        };
    }
    return SharedStudentEnrollmentViewModel;
}
);