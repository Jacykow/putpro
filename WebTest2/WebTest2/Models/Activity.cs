using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebTest2.Models
{
    public class Activity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl1{ get; set; }
        public string ImageUrl2 { get; set; }
        public int Price { get; set; }
        public int Stress { get; set; }
        public int Addiction { get; set; }
        public int Rehabilitation { get; set; }
    }
}
