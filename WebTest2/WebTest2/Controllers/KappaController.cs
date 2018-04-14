using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebTest2.Models;

namespace WebTest2.Controllers
{
    [Route("api/[controller]")]
    public class KappaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IEnumerable<Kappa> GetAll(){

            return new Kappa[] { new Kappa() { Name = "benis" }};
        }
    }
}