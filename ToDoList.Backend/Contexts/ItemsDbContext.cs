using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Backend.Models;

namespace ToDoList.Backend.Contexts
{
    public class ItemsDbContext:DbContext
    {
        public ItemsDbContext(DbContextOptions<ItemsDbContext> options):base(options)
        {

        }
        public DbSet<Item> Items { get; set; }
    }
}
