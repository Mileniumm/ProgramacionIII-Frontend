namespace Builder;

public class PedidoBuilder
{
    private string? cliente;
    private readonly List<string> productos = new();
    private TipoEnvio envio = TipoEnvio.Estandar;
    private decimal? descuento;

    // cada método guarda un dato y devuelve this, así se pueden encadenar las llamadas

    public PedidoBuilder ParaCliente(string cliente)
    {
        this.cliente = cliente;
        return this;
    }

    public PedidoBuilder AgregarProducto(string producto)
    {
        productos.Add(producto);
        return this;
    }

    public PedidoBuilder ConEnvioEstandar()
    {
        envio = TipoEnvio.Estandar;
        return this;
    }

    public PedidoBuilder ConEnvioExpress()
    {
        envio = TipoEnvio.Express;
        return this;
    }

    public PedidoBuilder ConDescuento(decimal porcentaje)
    {
        if (porcentaje <= 0 || porcentaje > 100)
            throw new ArgumentOutOfRangeException(nameof(porcentaje), "El descuento tiene que estar entre 1 y 100.");

        descuento = porcentaje;
        return this;
    }

    // recién acá se valida y se crea el pedido
    public Pedido Build()
    {
        if (string.IsNullOrWhiteSpace(cliente))
            throw new InvalidOperationException("El pedido necesita un cliente.");

        if (productos.Count == 0)
            throw new InvalidOperationException("El pedido necesita al menos un producto.");

        // le paso una copia de la lista para que el pedido no cambie si después se sigue usando el builder
        return new Pedido(cliente, new List<string>(productos), envio, descuento);
    }
}
