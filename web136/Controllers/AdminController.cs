namespace Web136.Controllers
{
    using System.Web.Mvc;

    public class AdminController : Controller
    {
        public ActionResult Index(int id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult Edit(int id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult StudentList(int id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult InstructorList(int id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult ClassList(int id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult NewStudent(int id)
        {
            ViewBag.id = id;
            return this.View();
        }

        public ActionResult NewInstructor(int id)
        {
            ViewBag.id = id;
            return this.View();
        }
        public ActionResult NewCourse(int id)
        {
            ViewBag.id = id;
            return this.View();
        }
        public ActionResult EditCourse(int id)
        {
            ViewBag.id = id;
            return this.View();
        }
        public ActionResult EditStudent(int id)
        {
            ViewBag.id = id;
            return this.View();
        }
        public ActionResult EditInstructor(int id)
        {
            ViewBag.id = id;
            return this.View();
        }
    }
}
