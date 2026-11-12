using AbstractFactory.Entities;

namespace AbstractFactory.DAO.Mock;

// base de datos de mentira en memoria, como la MockDatabase del TP
public static class MockDatabase
{
    public static List<User> Users { get; } = new();

    static MockDatabase()
    {
        Users.Add(new User { Id = 1, Name = "Laura (Mock)", Email = "laura.mock@ejemplo.com" });
        Users.Add(new User { Id = 2, Name = "Martín (Mock)", Email = "martin.mock@ejemplo.com" });
    }
}
