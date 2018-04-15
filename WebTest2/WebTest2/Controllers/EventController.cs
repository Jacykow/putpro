using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebTest2.Models;
using System.Data.SqlClient;

namespace WebTest2.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IEnumerable<int> GetAll()
        {
            List<int> list = new List<int>();
            using (var connection = new SqlConnection("Server=tcp:webtest220180414052420dbserver.database.windows.net,1433;Initial Catalog=WebTest220180414052420_db;Persist Security Info=False;User ID=wojtekgej;Password=W0jtekT0G3j;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
            {
                var command = new SqlCommand("SELECT Id FROM events WHERE ChainStart=1", connection);
                connection.Open();
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(int.Parse("" + reader[0]));
                    }
                }
            }
            return list;
        }

        [HttpGet("{id}")]
        public Event Get(string id)
        {
            if(id == "random")
            {
                int[] t = GetAll().ToArray();
                return Get("" + t[new Random().Next() % t.Length]);
            }
            int idN = int.Parse(id);
            Event e = new Event() { Title = "Testing... id: " + idN };
            using (var connection = new SqlConnection("Server=tcp:webtest220180414052420dbserver.database.windows.net,1433;Initial Catalog=WebTest220180414052420_db;Persist Security Info=False;User ID=wojtekgej;Password=W0jtekT0G3j;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
            {
                var command = new SqlCommand("SELECT * FROM events WHERE Id=" + idN, connection);
                connection.Open();
                using (var reader = command.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        e.Id = int.Parse("" + reader["Id"]);
                        e.Title = "" + reader["Title"];
                        e.Text = "" + reader["Text"];
                        e.ImageUrl = "" + reader["ImageUrl"];
                        e.ChoiceAText = "" + reader["ChoiceAText"];
                        if ("" + reader["ChoiceBText"] == "")
                        {
                            e.ChoiceAId = 0;
                            e.ChoiceBText = null;
                            e.ChoiceBId = 0;
                        }
                        else
                        {
                            e.ChoiceBText = "" + reader["ChoiceBText"];
                            e.ChoiceAId = new Random().NextDouble() < 0.01 * int.Parse("" + reader["ChoiceAChance"]) ?
                                int.Parse("" + reader["ChoiceAId1"]) : int.Parse("" + reader["ChoiceAId2"]);
                            e.ChoiceBId = new Random().NextDouble() < 0.01 * int.Parse("" + reader["ChoiceBChance"]) ?
                                int.Parse("" + reader["ChoiceBId1"]) : int.Parse("" + reader["ChoiceBId2"]);
                        }
                        e.Values = new Dictionary<string, int>();
                        string v = "" + reader["Values"];
                        v.Replace(" ", "");
                        string[] t = v.Split(':', ',');
                        for (int x = 1; x < t.Length; x += 2)
                        {
                            e.Values[t[x - 1]] = int.Parse(t[x]);
                        }
                    }
                }
            }
            return e;
        }
    }
}