using MemoryExcercise.Server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace MemoryExcercise.Server.Services
{
    public class HobbiesService
    {
        private readonly IMongoCollection<Hobby> _hobbiesCollection;

        public HobbiesService(IOptions<MemoryExcerciseDatabaseSettings> memoryExcerciseDatabaseSettings)
        {
            var mongoClient = new MongoClient(memoryExcerciseDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(memoryExcerciseDatabaseSettings.Value.DatabaseName);
            _hobbiesCollection = mongoDatabase.GetCollection<Hobby>(memoryExcerciseDatabaseSettings.Value.HobbiesCollectionName);
        }
        public async Task<List<Hobby>> GetAsync()
        {
            return await _hobbiesCollection.Find(_ => true).ToListAsync();
        }
        public async Task<Hobby?> GetAsync(string id)
        {
            return await _hobbiesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        }
        public async Task CreateAsync(Hobby newHobby)
        {
            await _hobbiesCollection.InsertOneAsync(newHobby);
        }
        public async Task UpdateAsync(string id, Hobby updatedHobby)
        {
            await _hobbiesCollection.ReplaceOneAsync(x => x.Id == id, updatedHobby);
        }
        public async Task RemoveAsync(string id)
        {
            await _hobbiesCollection.DeleteOneAsync(x => x.Id == id);
        }
    }
}
