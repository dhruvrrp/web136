// StudentViewModel depends on the Models/StudentModel to process requests (Load)
define(['Models/StudentModel'], function (StudentModel) {
    console.log("StudentEditViewModel");
    function StudentEditViewModel(id) {
        var StudentModelObj = new StudentModel();
        var that = this;
        var initialBind = true;
        var studentListViewModel = ko.observableArray();

        this.Initialize = function () {


            StudentModelObj.GetDetail(id, function (result) {
                var student = {
                    
                    first: ko.observable(result.FirstName),
                    last: ko.observable(result.LastName),
                    email: ko.observable(result.Email),
                    password: ko.observable(result.Password),
                    shoesize: ko.observable(result.ShoeSize),
                    weight: ko.observable(result.Weight),
                    ssn: ko.observable(result.SSN),
                    edit: function (data) {
                        that.EditStudent(data);
                    }
                };

                if (initialBind) {
                    ko.applyBindings( student, document.getElementById("divEditStudent"));
                }
            });

        };

        this.EditStudent = function (data) {
            var model = {

                StudentId: id,
                SSN: data.ssn(),
                FirstName: data.first(),
                LastName: data.last(),
                Email: data.email(),
                Password: data.password(),
                ShoeSize: data.shoesize(),
                Weight: data.weight()
            }

            StudentModelObj.Edit(model, function (result) {
                if (result == "ok") {
                    alert("Editing student successful");
                } else {
                    alert("Error occurred" + result);
                }
            });

        };
    }

    return StudentEditViewModel;
}
);