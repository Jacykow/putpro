using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebTest2.Models;

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
        public IEnumerable<Event> GetAll()
        {
            return new Event[] { new Event() { Title = "Test w chuuuj" } };
        }

        [HttpGet("{id}")]
        public Event Get(int id)
        {
            return new Event() { Title = "Test na numerku: " + id };
        }
    }
}