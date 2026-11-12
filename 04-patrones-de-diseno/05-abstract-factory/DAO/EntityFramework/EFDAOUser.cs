using AbstractFactory.Entities;
using Microsoft.EntityFrameworkCore;

namespace AbstractFactory.DAO.EntityFramework;

// producto concreto de la familia EF: guarda los usuarios con Entity Framework
public class EFDAOUser : IDAOUser
{
    private readonly AppDbContext context;

    public EFDAOUser(AppDbContext context)
    {
        this.context = context;
    }

    public List<User> GetAll() => context.Users.AsNoTracking().ToList();

    public User? GetById(long id) => context.Users.Find(id);

    public User Create(User user)
    {
        context.Users.Add(user);
        context.SaveChanges();
        return user;
    }

    public bool Delete(long id)
    {
        var user = GetById(id);
        if (user is null) return false;
        context.Users.Remove(user);
        context.SaveChanges();
        return true;
    }
}
