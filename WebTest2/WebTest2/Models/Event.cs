using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebTest2.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string ImageUrl { get; set; }
        public string ChoiceAText { get; set; }
        public int ChoiceAId1 { get; set; }
        public int ChoiceAId2 { get; set; }
        public int ChoiceAChance { get; set; }
        public string ChoiceBText { get; set; }
        public int ChoiceBId1 { get; set; }
        public int ChoiceBId2 { get; set; }
        public int ChoiceBChance { get; set; }
        public int Stress { get; set; }
        public int Friends { get; set; }
        public string SpecialId { get; set; }
        public int SpecialAmount { get; set; }
    }
}
