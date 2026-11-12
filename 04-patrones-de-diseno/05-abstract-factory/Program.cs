using AbstractFactory.DAO;
using AbstractFactory.DAO.EntityFramework;
using AbstractFactory.DAO.Mock;
using AbstractFactory.Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// EF usa una base en memoria para poder probarlo sin instalar MySQL.
// en el TP iría UseMySql con la cadena de conexión
builder.Services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("abstract-factory"));

// acá se elige la familia de DAOs, según "Persistencia" en appsettings.json.
// es el único lugar que cambia para pasar de una familia a la otra
var persistencia = builder.Configuration["Persistencia"] ?? "Mock";

if (persistencia == "EF")
{
    builder.Services.AddScoped<IDAOFactory, EFDAOFactory>();
}
else
{
    builder.Services.AddScoped<IDAOFactory, MockDAOFactory>();
}

var app = builder.Build();

// un usuario de ejemplo en la base de EF, para que se note qué familia responde
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    if (!context.Users.Any())
    {
        context.Users.Add(new User { Name = "Ana (EF)", Email = "ana.ef@ejemplo.com" });
        context.SaveChanges();
    }
}

app.Logger.LogInformation("Familia de DAOs en uso: {Persistencia}", persistencia);

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

app.Run();
