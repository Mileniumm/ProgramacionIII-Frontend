namespace Builder;

public class Pedido
{
    public string Cliente { get; }
    public IReadOnlyList<string> Productos { get; }
    public TipoEnvio Envio { get; }
    public decimal? Descuento { get; }

    // internal: el pedido lo arma PedidoBuilder, el resto del código no usa este constructor
    internal Pedido(string cliente, List<string> productos, TipoEnvio envio, decimal? descuento)
    {
        Cliente = cliente;
        Productos = productos;
        Envio = envio;
        Descuento = descuento;
    }

    public override string ToString()
    {
        string descuento = Descuento is null ? "sin descuento" : $"{Descuento}% de descuento";
        return $"Cliente: {Cliente}\n" +
               $"Productos: {string.Join(", ", Productos)}\n" +
               $"Envío: {Envio}\n" +
               $"Descuento: {descuento}";
    }
}
