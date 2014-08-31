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

        public ActionResult EditStudent(string id)
        {
            return this.View();
        }

        public ActionResult GetClassEnrollment(string schedule_id)
        {
            return this.View();
        }

        public ActionResult GetTAInfo()
        {
            return this.View();
        }


    }
}
