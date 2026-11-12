namespace AbstractFactory.DAO;

// la fábrica abstracta: dice qué DAOs se pueden crear, pero no de qué familia son.
// si mañana hay más entidades se agrega acá un método por cada una (CreateDAORole, etc.)
public interface IDAOFactory
{
    IDAOUser CreateDAOUser();
}
