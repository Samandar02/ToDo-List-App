using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Backend.Models
{
    public class Item
    {
        public int id { get; set; }
        public string Text { get; set; }
        public string OwnerId { get; set; }
    }
}
