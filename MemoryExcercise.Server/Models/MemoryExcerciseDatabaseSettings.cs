namespace MemoryExcercise.Server.Models
{
    public class MemoryExcerciseDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string HobbiesCollectionName { get; set; } = null!;
    }
}
