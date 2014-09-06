// InstructorViewModel depends on the Models/InstructorModel to process requests (Load)
define(['Models/InstructorModel'], function (InstructorModel) {
    console.log("InstructorViewModel");
    function InstructorViewModel() {

        var InstructorModelObj = new InstructorModel();
        var that = this;
        var initialBind = true;
        var InstructorListViewModel = ko.observableArray();

        this.Initialize = function () {

            var viewModel = {
                id: ko.observable("2"),
                first: ko.observable("Bruce"),
                last: ko.observable("Wayne"),
                title: ko.observable("Prof"),
                add: function (data) {
                    that.CreateInstructor(data);
                }
            };

            ko.applyBindings(viewModel, document.getElementById("divInstructor"));
        };

        this.Edit = function (id) {


            InstructorModelObj.GetDetail(id, function (result) {
                var instructor = {

                    first: ko.observable(result.FirstName),
                    last: ko.observable(result.LastName),
                    title: ko.observable(result.Title),
                    edit: function (data) {
                        
                        that.EditInstructor(data, id);
                    }
                };

                if (initialBind) {
                    ko.applyBindings(instructor, document.getElementById("divEditInstructor"));
                }
            });

        };

        this.EditInstructor = function (data, id) {
            console.log("WHYYYYY" + id);
            var model = {
                
                InstructorId: id,
                FirstName: data.first(),
                LastName: data.last(),
                title: data.title()
            }
            console.log("hello?");
            InstructorModelObj.Edit(model, function (result) {
                if (result == "ok") {
                    alert("Editing instructor successful");
                } else {
                    alert("Error occurred" + result);
                }
            });

        };

        this.CreateInstructor = function (data) {
            var model = {
                InstructorId: data.id(),
                FirstName: data.first(),
                LastName: data.last(),
                Title: data.title()
            }

            InstructorModelObj.Create(model, function (result) {
                if (result == "ok") {
                    alert("Create Instructor successful");
                } else {
                    alert("Error occurred");
                }
            });

        };

        this.GetAll = function () {

            InstructorModelObj.GetAll(function (instructorList) {
                InstructorListViewModel.removeAll();

                for (var i = 0; i < instructorList.length; i++) {
                    InstructorListViewModel.push({
                        id: instructorList[i].InstructorId,
                        first: instructorList[i].FirstName,
                        last: instructorList[i].LastName,
                        title: instructorList[i].Title
                    });
                }

                if (initialBind) {
                    ko.applyBindings({ viewModel: InstructorListViewModel }, document.getElementById("divInstructorListContent"));
                    initialBind = false; // this is to prevent binding multiple time because "Delete" functio calls GetAll again
                }
            });
        };

        this.GetDetail = function (id) {

            InstructorModelObj.GetDetail(id, function (result) {

                var Instructor = {
                    id: result.InstructorId,
                    first: result.FirstName,
                    last: result.LastName,
                    title: result.title
                };

                if (initialBind) {
                    ko.applyBindings({ viewModel: Instructor }, document.getElementById("divInstructorContent"));
                }
            });
        };

        ko.bindingHandlers.DeleteInstructor = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                $(element).click(function () {
                    var id = viewModel.id;

                    InstructorModelObj.Delete(id, function (result) {
                        if (result != "ok") {
                            alert("Error occurred");
                        } else {
                            InstructorListViewModel.remove(viewModel);
                        }
                    });
                });
            }
        }
    }

    return InstructorViewModel;
}
);