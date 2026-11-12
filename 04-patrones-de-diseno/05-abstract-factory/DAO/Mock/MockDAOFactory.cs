namespace AbstractFactory.DAO.Mock;

// fábrica concreta de la familia Mock: todo lo que crea trabaja en memoria
public class MockDAOFactory : IDAOFactory
{
    public IDAOUser CreateDAOUser() => new MockDAOUser();
}
