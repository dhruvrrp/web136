define(['Models/SharedStudentEnrollmentModel'], function (sharedStudentEnrollmentModel) {
    function SharedStudentEnrollmentViewModel() {
        this.Load = function (studentID) {

            var sharedStudentEnrollmentModelObj = new sharedStudentEnrollmentModel(studentID);
            
            sharedStudentEnrollmentModelObj.Load(studentID, function (enrollmentData) {
               
                var sharedStudentEnrollmentViewModel = new Array();


                for (var i = 0; i < enrollmentData.length; i++) {
                    sharedStudentEnrollmentViewModel[i] = {
                        title: enrollmentData[i].Title,
                        description: enrollmentData[i].Description
                    };
                }

                ko.applyBindings({ viewModel: sharedStudentEnrollmentViewModel },
                    document.getElementById("divSharedStudentEnrollment"));
            });
        };
    }
    return SharedStudentEnrollmentViewModel;
}
);