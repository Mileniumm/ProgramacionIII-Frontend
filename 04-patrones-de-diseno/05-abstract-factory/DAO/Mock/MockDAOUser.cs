using AbstractFactory.Entities;

namespace AbstractFactory.DAO.Mock;

// producto concreto de la familia Mock: trabaja sobre las listas de MockDatabase
public class MockDAOUser : IDAOUser
{
    public List<User> GetAll() => MockDatabase.Users.ToList();

    public User? GetById(long id) => MockDatabase.Users.SingleOrDefault(user => user.Id == id);

    public User Create(User user)
    {
        // como no hay base de datos, el id lo calculo a mano
        user.Id = MockDatabase.Users.Count == 0 ? 1 : MockDatabase.Users.Max(existing => existing.Id) + 1;
        MockDatabase.Users.Add(user);
        return user;
    }

    public bool Delete(long id) => MockDatabase.Users.RemoveAll(user => user.Id == id) > 0;
}
