using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MemoryExcercise.Server.Models
{
    public class Hobby
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("hobbyName")]
        public string? HobbyName { get; set; } = null!;
        [BsonElement("hobbyDescription")]
        public string? HobbyDescription { get; set; } = null!;
    }
}
