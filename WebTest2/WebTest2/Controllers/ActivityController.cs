using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using WebTest2.Models;

namespace WebTest2.Controllers
{
    [Route("api/[controller]")]
    public class ActivityController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IEnumerable<string> GetAll()
        {
            List<string> list = new List<string>();
            using (var connection = new SqlConnection("Server=tcp:webtest220180414052420dbserver.database.windows.net,1433;Initial Catalog=WebTest220180414052420_db;Persist Security Info=False;User ID=wojtekgej;Password=W0jtekT0G3j;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
            {
                var command = new SqlCommand("SELECT Name FROM activities", connection);
                connection.Open();
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add("" + reader[0]);
                    }
                }
            }
            return list;
        }

        [HttpGet("{name}")]
        public Activity Get(string name)
        {
            Activity a = new Activity() { Name = "Error" };
            using (var connection = new SqlConnection("Server=tcp:webtest220180414052420dbserver.database.windows.net,1433;Initial Catalog=WebTest220180414052420_db;Persist Security Info=False;User ID=wojtekgej;Password=W0jtekT0G3j;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
            {
                var command = new SqlCommand("SELECT * FROM activities WHERE Name='" + name +"'", connection);
                connection.Open();
                using (var reader = command.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        a.Id = int.Parse("" + reader["Id"]);
                        a.Name = "" + reader["Name"];
                        a.ImageUrl1 = "" + reader["ImageUrl1"];
                        a.ImageUrl2 = "" + reader["ImageUrl2"];
                        a.Price = int.Parse("" + reader["Price"]);
                        a.Stress = int.Parse("" + reader["Stress"]);
                        a.Addiction = int.Parse("" + reader["Addiction"]);
                        a.Rehabilitation = int.Parse("" + reader["Rehabilitation"]);
                    }
                }
            }
            return a;
        }
    }
}