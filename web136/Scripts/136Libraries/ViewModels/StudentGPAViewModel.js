// StudentViewModel depends on the Models/StudentModel to process requests (Load)
define(['Models/StudentModel'], function (StudentModel) {
    console.log("StudentGPAViewModel");
    function StudentGPAViewModel(id) {
        var StudentModelObj = new StudentModel();
        var that = this;
        var initialBind = true;
        var studentListViewModel = ko.observableArray();

        this.Initialize = function () {

        that.GetGPA(id);
        };
    this.GetGPA = function(data) {
        StudentModelObj.GetStudentGPA(data, function (result) {
            console.log("Result" +result);

            document.getElementById("GPA").innerHTML = result;
        });
        
    };
     
    }

    return StudentGPAViewModel;
}
);