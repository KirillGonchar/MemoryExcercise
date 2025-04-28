using MemoryExcercise.Server.Model;
using Microsoft.AspNetCore.Mvc;

namespace MemoryExcercise.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HobbiesController : ControllerBase
    {
        private readonly ILogger<HobbiesController> _logger;

        private static readonly IEnumerable<Hobby> _hobbiesListWithDescription = new List<Hobby>
        {
            new Hobby { HobbyName = "Hiking", HobbyDescription = "Exploring nature trails and mountain paths on foot" },
            new Hobby { HobbyName = "Photography", HobbyDescription = "Capturing moments and scenes through a camera lens" },
            new Hobby { HobbyName = "Cooking", HobbyDescription = "Creating delicious meals through culinary experimentation" },
            new Hobby { HobbyName = "Gardening", HobbyDescription = "Growing and nurturing plants and flowers" },
            new Hobby { HobbyName = "Reading", HobbyDescription = "Enjoying books across various genres and topics" },
            new Hobby { HobbyName = "Painting", HobbyDescription = "Expressing creativity through colors on canvas" },
            new Hobby { HobbyName = "Knitting", HobbyDescription = "Creating garments and items with yarn and needles" },
            new Hobby { HobbyName = "Chess", HobbyDescription = "Strategic board game of tactical thinking" },
            new Hobby { HobbyName = "Cycling", HobbyDescription = "Riding bicycles for exercise and exploration" },
            new Hobby { HobbyName = "Fishing", HobbyDescription = "Catching fish in lakes, rivers, or oceans" },
            new Hobby { HobbyName = "Woodworking", HobbyDescription = "Crafting items from wood using various techniques" },
            new Hobby { HobbyName = "Dancing", HobbyDescription = "Moving rhythmically to music for expression or exercise" },
            new Hobby { HobbyName = "Bird watching", HobbyDescription = "Observing and identifying different bird species" },
            new Hobby { HobbyName = "Pottery", HobbyDescription = "Creating ceramic objects by molding clay" },
            new Hobby { HobbyName = "Yoga", HobbyDescription = "Practice combining physical poses with mindful breathing" },
            new Hobby { HobbyName = "Rock climbing", HobbyDescription = "Ascending rock formations using physical strength and technique" },
            new Hobby { HobbyName = "Calligraphy", HobbyDescription = "Artistic, decorative handwriting or lettering" },
            new Hobby { HobbyName = "Skiing", HobbyDescription = "Gliding over snow with special equipment" },
            new Hobby { HobbyName = "Surfing", HobbyDescription = "Riding waves using a surfboard" },
            new Hobby { HobbyName = "Quilting", HobbyDescription = "Sewing together layers of fabric into blankets" },
            new Hobby { HobbyName = "Model building", HobbyDescription = "Constructing miniature replicas of objects or scenes" },
            new Hobby { HobbyName = "Bread making", HobbyDescription = "Creating homemade loaves through baking techniques" },
            new Hobby { HobbyName = "Astronomy", HobbyDescription = "Observing celestial objects and phenomena" },
            new Hobby { HobbyName = "Beekeeping", HobbyDescription = "Managing honeybee colonies for honey production" },
            new Hobby { HobbyName = "Candle making", HobbyDescription = "Creating decorative wax candles for light or scent" },
            new Hobby { HobbyName = "Archery", HobbyDescription = "Shooting arrows using a bow at targets" },
            new Hobby { HobbyName = "Meditation", HobbyDescription = "Practice of training attention and awareness" },
            new Hobby { HobbyName = "Scuba diving", HobbyDescription = "Underwater exploration using special breathing equipment" },
            new Hobby { HobbyName = "Geocaching", HobbyDescription = "Outdoor treasure hunting using GPS coordinates" },
            new Hobby { HobbyName = "Origami", HobbyDescription = "Japanese art of paper folding" },
            new Hobby { HobbyName = "Wine tasting", HobbyDescription = "Sampling and evaluating different wines" },
            new Hobby { HobbyName = "Magic tricks", HobbyDescription = "Performing illusions to entertain and amaze" },
            new Hobby { HobbyName = "Stamp collecting", HobbyDescription = "Gathering and organizing postage stamps from various places" },
            new Hobby { HobbyName = "Jewelry making", HobbyDescription = "Crafting ornamental pieces worn as personal adornment" },
            new Hobby { HobbyName = "Martial arts", HobbyDescription = "Traditional combat practices for self-defense and discipline" },
            new Hobby { HobbyName = "Crossword puzzles", HobbyDescription = "Solving word games with intersecting clues" },
            new Hobby { HobbyName = "Soap making", HobbyDescription = "Creating bars of soap using oils and lye" },
            new Hobby { HobbyName = "Robotics", HobbyDescription = "Building and programming automated mechanical devices" },
            new Hobby { HobbyName = "Homebrewing", HobbyDescription = "Making beer or other fermented beverages at home" },
            new Hobby { HobbyName = "Fossil hunting", HobbyDescription = "Searching for preserved remains of ancient organisms" },
            new Hobby { HobbyName = "Stand-up comedy", HobbyDescription = "Performing humorous monologues before a live audience" },
            new Hobby { HobbyName = "Mushroom foraging", HobbyDescription = "Searching for edible fungi in natural settings" },
            new Hobby { HobbyName = "Juggling", HobbyDescription = "Keeping multiple objects in continuous motion through air" },
            new Hobby { HobbyName = "Podcasting", HobbyDescription = "Creating audio content for online distribution" },
            new Hobby { HobbyName = "Stargazing", HobbyDescription = "Observing stars, planets, and constellations at night" },
            new Hobby { HobbyName = "Ice skating", HobbyDescription = "Gliding on ice using metal-bladed boots" },
            new Hobby { HobbyName = "Kayaking", HobbyDescription = "Paddling a small watercraft using a double-bladed oar" },
            new Hobby { HobbyName = "Bonsai", HobbyDescription = "Growing and training miniature trees in containers" },
            new Hobby { HobbyName = "Glassblowing", HobbyDescription = "Shaping molten glass by blowing through a tube" },
            new Hobby { HobbyName = "Board games", HobbyDescription = "Playing tabletop games with specific rules and objectives" }
        };

        public HobbiesController(ILogger<HobbiesController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetHobbies")]
    //    [Consumes("application/json")]
        public IEnumerable<Hobby> Get()
        {
            return _hobbiesListWithDescription.ToArray();
        }
    }
}
