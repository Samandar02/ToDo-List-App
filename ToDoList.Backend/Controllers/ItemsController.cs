using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Backend.Contexts;
using ToDoList.Backend.Models;

namespace ToDoList.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        ItemsDbContext _context = null;
        public ItemsController(ItemsDbContext context)
        {
            _context = context;
        }
        //[HttpGet]
        //public ActionResult<Item> Get()
        //{
        //    var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        //    return Ok(_context.Items.Where(q => q.OwnerId.ToString() == userId));
        //}
        [HttpGet("{Id}")]
        public ActionResult<IEnumerable<Item>> Get([FromRoute] string id)
        {
            return _context.Items.Where(q => q.OwnerId == id).ToList();
        }
        [HttpPost]
        public IActionResult Post([FromBody] Item item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            item.OwnerId = userId;
            _context.Items.Add(item);
            _context.SaveChangesAsync();

            return CreatedAtAction("GetQuiz", new { id = item.id }, item);
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _context.Items.Remove(_context.Items.FirstOrDefault(item => item.id == id));
            _context.SaveChanges();
        }
    }
}