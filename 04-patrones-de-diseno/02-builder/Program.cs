using Builder;

// pedido 1: envío estándar, sin descuento
Pedido pedidoAna = new PedidoBuilder()
    .ParaCliente("Ana López")
    .AgregarProducto("Teclado mecánico")
    .AgregarProducto("Mouse inalámbrico")
    .ConEnvioEstandar()
    .Build();

// pedido 2: envío express y con descuento
Pedido pedidoJuan = new PedidoBuilder()
    .ParaCliente("Juan Pérez")
    .AgregarProducto("Monitor 24\"")
    .ConEnvioExpress()
    .ConDescuento(10)
    .Build();

Console.WriteLine("Pedido 1");
Console.WriteLine(pedidoAna);
Console.WriteLine();
Console.WriteLine("Pedido 2");
Console.WriteLine(pedidoJuan);
Console.WriteLine();

// pedido sin productos: Build() no lo deja crear
try
{
    Pedido pedidoVacio = new PedidoBuilder()
        .ParaCliente("Sofía Díaz")
        .ConEnvioExpress()
        .Build();
}
catch (InvalidOperationException error)
{
    Console.WriteLine($"No se pudo crear el pedido: {error.Message}");
}
