namespace AbstractFactory.DAO.EntityFramework;

// fábrica concreta de la familia EF: todo lo que crea usa el AppDbContext
public class EFDAOFactory : IDAOFactory
{
    private readonly AppDbContext context;

    public EFDAOFactory(AppDbContext context)
    {
        this.context = context;
    }

    public IDAOUser CreateDAOUser() => new EFDAOUser(context);
}
