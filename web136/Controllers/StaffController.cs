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

        public ActionResult GetClassEnrollment(string id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult GetTAInfo()
        {
            return this.View();
        }


    }
}
