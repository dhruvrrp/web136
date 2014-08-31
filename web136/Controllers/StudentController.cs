namespace Web136.Controllers
{
    using System.Web.Mvc;

    public class StudentController : Controller
    {
        public ActionResult Index(string id)
        {
            ViewBag.Id = id;
            return this.View();
        }

        public ActionResult Edit(string id)
        {
            ViewBag.Id = id;
            return this.View();
        }

        public ActionResult ViewEnrollments(string id)
        {
            ViewBag.Id = id;
            return this.View();
        }

        public ActionResult AddEnrollment(string id)
        {
            ViewBag.Id = id;
            return this.View();
        }

        public ActionResult ViewGPA(string id)
        {
            ViewBag.Id = id;
            return this.View();
        }
    }
}
