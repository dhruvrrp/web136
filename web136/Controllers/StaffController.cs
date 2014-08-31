namespace Web136.Controllers
{
    using System.Web.Mvc;

    public class StaffController : Controller
    {
        public ActionResult Index()
        {
            return this.View();
        }

        public ActionResult StudentList()
        {
            return this.View();
        }

        public ActionResult GradeStudent(string id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult GetEnrollments(string id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult GetEnrollmentsByClass(string id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult GetEnrollmentsByProfessor(string id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult GetTAInfo()
        {
            return this.View();
        }

        public ActionResult EditStaff(string id)
        {
            ViewBag.id = id;
            return this.View();
        }
    }
}
