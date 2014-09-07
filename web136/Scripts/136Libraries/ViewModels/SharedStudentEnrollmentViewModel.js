define(['Models/SharedStudentEnrollmentModel'], function (sharedStudentEnrollmentModel) {
    function SharedStudentEnrollmentViewModel(studentID) {

        var sID = studentID;
        var that = this;
        var sharedStudentEnrollmentModelObj = new sharedStudentEnrollmentModel(studentID);
        var initialBind = true;

        this.Load = function (studentID) {

            sharedStudentEnrollmentModelObj.Load(studentID, function (enrollmentData) {
               /*
               this.del = function(){
                    that.deleteEnrollment(studentID);
                };*/
                var button = {
                    scheduleID: "",
                    addEnroll: function (data) {
                        that.AddEnrollment(data);
                    }
                };

                if (initialBind) {
                    ko.applyBindings(button, document.getElementById("addButton"));
                }

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
        
        this.AddEnrollment = function (data) {
            var enrollment = {
                StudentId: sID,
                ScheduleId: data.scheduleID
            }
            sharedStudentEnrollmentModelObj.AddEnrollment(enrollment,
                function (result)
                {
                    if (result == "ok")
                    {
                        alert("ok");
                    }
                    else
                    {
                        alert("bad");
                    }
                }

        )};

        /*
        this.deleteEnrollment(studentID, scheduleID)
        {
            sharedStudentEnrollmentModelObj.deleteEnroll(studentID, scheduleID);
        };*/
    }
    return SharedStudentEnrollmentViewModel;
}
);