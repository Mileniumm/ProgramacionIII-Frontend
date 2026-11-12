using AbstractFactory.Entities;

namespace AbstractFactory.DAO;

// el producto abstracto: lo que tiene que saber hacer cualquier DAO de usuarios
public interface IDAOUser
{
    List<User> GetAll();
    User? GetById(long id);
    User Create(User user);
    bool Delete(long id);
}
