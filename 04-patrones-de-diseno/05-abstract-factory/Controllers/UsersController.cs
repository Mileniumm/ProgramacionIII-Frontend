using AbstractFactory.DAO;
using AbstractFactory.Entities;
using Microsoft.AspNetCore.Mvc;

namespace AbstractFactory.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private readonly IDAOUser userDAO;

    // recibe la fábrica abstracta por el constructor: no sabe si es EF o Mock,
    // solo le pide un DAO de usuarios y trabaja con la interfaz
    public UsersController(IDAOFactory factory)
    {
        userDAO = factory.CreateDAOUser();
    }

    [HttpGet]
    public ActionResult<List<User>> GetAll() => Ok(userDAO.GetAll());

    [HttpGet("{id:long}")]
    public ActionResult<User> GetById(long id) => userDAO.GetById(id) is { } user ? Ok(user) : NotFound();

    [HttpPost]
    public ActionResult<User> Create(User user)
    {
        if (user.Id != 0) return BadRequest("El Id se genera al crear el usuario; omitilo o enviá 0.");
        var created = userDAO.Create(user);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    [HttpDelete("{id:long}")]
    public IActionResult Delete(long id) => userDAO.Delete(id) ? NoContent() : NotFound();
}
