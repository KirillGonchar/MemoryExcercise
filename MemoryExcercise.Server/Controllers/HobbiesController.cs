using MemoryExcercise.Server.Models;
using MemoryExcercise.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace MemoryExcercise.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HobbiesController : ControllerBase
    {
        private readonly ILogger<HobbiesController> _logger;
        private readonly HobbiesService _hobbiesService;

        public HobbiesController(ILogger<HobbiesController> logger, HobbiesService hobbiesService)
        {
            _logger = logger;
            _hobbiesService = hobbiesService;
        }

        [HttpGet(Name = "GetHobbies")]
        public async Task<IEnumerable<Hobby>> Get()
        {
            return await _hobbiesService.GetAsync();
        }
        [HttpPost]
        public IActionResult Push(Hobby hobby)
        {
            return Ok(new { Consumes = "application/json", Value = hobby.HobbyName});
        }
    }
}
