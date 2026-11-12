using Singleton;

// dos módulos de la aplicación piden la configuración por separado
ConfiguracionSistema configVentas = ConfiguracionSistema.Instance;
ConfiguracionSistema configReportes = ConfiguracionSistema.Instance;

// esto no compila porque el constructor es privado:
// ConfiguracionSistema otra = new ConfiguracionSistema();

Console.WriteLine($"¿Ventas y Reportes usan el mismo objeto? {ReferenceEquals(configVentas, configReportes)}");
Console.WriteLine();

Console.WriteLine($"Nombre antes del cambio: {configReportes.NombreAplicacion}");

// cambio el nombre desde el módulo de ventas...
configVentas.NombreAplicacion = "Gestión Académica ISCGB";

// ...y el de reportes ve el mismo cambio, porque es el mismo objeto
Console.WriteLine($"Ventas ve:   {configVentas.NombreAplicacion}");
Console.WriteLine($"Reportes ve: {configReportes.NombreAplicacion}");
