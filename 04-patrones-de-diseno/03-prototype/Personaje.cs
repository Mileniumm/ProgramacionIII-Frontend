namespace Prototype;

public class Personaje : IPrototype<Personaje>
{
    public string Nombre { get; set; } = string.Empty;
    public int Vida { get; set; }
    public int Nivel { get; set; }
    public List<string> Habilidades { get; set; } = new();

    public Personaje Clonar()
    {
        // MemberwiseClone copia todos los campos de una. Los números y el string quedan bien,
        // pero de la lista copia solo la referencia: el clon y el original compartirían la misma lista
        Personaje copia = (Personaje)MemberwiseClone();

        // por eso le creo una lista nueva con las mismas habilidades
        copia.Habilidades = new List<string>(Habilidades);

        return copia;
    }

    public override string ToString() =>
        $"{Nombre} | Vida: {Vida} | Nivel: {Nivel} | Habilidades: {string.Join(", ", Habilidades)}";
}
