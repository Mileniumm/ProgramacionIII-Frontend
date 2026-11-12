namespace Singleton;

// sealed para que nadie pueda heredar y crear otra instancia desde una subclase
public sealed class ConfiguracionSistema
{
    // la única instancia. C# la crea una sola vez, antes del primer uso de la clase
    private static readonly ConfiguracionSistema instance = new ConfiguracionSistema();

    // el único punto de acceso
    public static ConfiguracionSistema Instance => instance;

    public string NombreAplicacion { get; set; } = "Sistema de gestión";

    // constructor privado: desde afuera no se puede hacer new ConfiguracionSistema()
    private ConfiguracionSistema()
    {
        Console.WriteLine("Se creó la configuración (este mensaje sale una sola vez)");
    }
}
