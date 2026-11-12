using Prototype;

// el prototipo: un guerrero base ya configurado
Personaje prototipo = new Personaje
{
    Nombre = "Guerrero",
    Vida = 100,
    Nivel = 1,
    Habilidades = new List<string> { "Golpe", "Escudo" }
};

// dos clones a partir del mismo prototipo
Personaje clon1 = prototipo.Clonar();
Personaje clon2 = prototipo.Clonar();

// modifico la vida y las habilidades del primer clon
clon1.Nombre = "Guerrero veterano";
clon1.Vida = 150;
clon1.Habilidades.Add("Carga");

// y el segundo clon por su lado
clon2.Nombre = "Guerrero herido";
clon2.Vida = 40;
clon2.Habilidades.Remove("Escudo");

Console.WriteLine("Después de modificar los clones:");
Console.WriteLine($"Prototipo: {prototipo}");
Console.WriteLine($"Clon 1:    {clon1}");
Console.WriteLine($"Clon 2:    {clon2}");
Console.WriteLine();

Console.WriteLine("¿Son el mismo objeto?");
Console.WriteLine($"Prototipo y clon 1: {ReferenceEquals(prototipo, clon1)}");
Console.WriteLine($"Clon 1 y clon 2:    {ReferenceEquals(clon1, clon2)}");
Console.WriteLine();

Console.WriteLine("¿Comparten la lista de habilidades?");
Console.WriteLine($"Prototipo y clon 1: {ReferenceEquals(prototipo.Habilidades, clon1.Habilidades)}");
Console.WriteLine($"Clon 1 y clon 2:    {ReferenceEquals(clon1.Habilidades, clon2.Habilidades)}");
Console.WriteLine();

// pregunta 1: ¿qué pasa si cambio el prototipo después de clonar?
prototipo.Nivel = 5;
prototipo.Habilidades.Add("Grito de guerra");

Console.WriteLine("Después de modificar el prototipo:");
Console.WriteLine($"Prototipo: {prototipo}");
Console.WriteLine($"Clon 1:    {clon1}");
Console.WriteLine($"Clon 2:    {clon2}");
