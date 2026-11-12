# Abstract Factory: acceso a datos

La aplicación ya usaba DAOs para acceder a la base. Acá apliqué Abstract Factory para tener dos familias de DAOs, una con Entity Framework y otra con una base de datos falsa en memoria (MockDatabase), y poder cambiar entre las dos sin tocar la clase que los usa.

Es una Web API chica armada igual que el TP3: entidades, DAOs, un controller y la configuración en `Program.cs`.

## Cómo correrlo

```bash
dotnet run
```

Se abre Swagger en `http://localhost:5180/swagger`. También se puede probar con `AbstractFactory.http` desde WebStorm o VS Code.

Para cambiar de familia, en `appsettings.json` cambiá `"Persistencia"` a `"EF"` o `"Mock"` y volvé a correrlo. También se puede elegir sin tocar el archivo:

```bash
dotnet run -- --Persistencia=EF
```

Los usuarios de ejemplo dicen de qué familia vienen: con Mock aparecen "Laura (Mock)" y "Martín (Mock)", con EF aparece "Ana (EF)". La base de EF es en memoria (`UseInMemoryDatabase`) para poder probarla sin instalar MySQL; en el TP se usaría `UseMySql` con la cadena de conexión.

## Cómo está armado

| Pieza del patrón | En el proyecto |
| --- | --- |
| Fábrica abstracta | `IDAOFactory`, con `CreateDAOUser()` |
| Fábricas concretas | `EFDAOFactory` y `MockDAOFactory` |
| Producto abstracto | `IDAOUser` |
| Productos concretos | `EFDAOUser` y `MockDAOUser` |
| Cliente | `UsersController`, que recibe la fábrica por el constructor |
| Dónde se elige la familia | `Program.cs`, al registrar `IDAOFactory` |

```
DAO/
├── IDAOUser.cs
├── IDAOFactory.cs
├── EntityFramework/   AppDbContext, EFDAOUser, EFDAOFactory
└── Mock/              MockDatabase, MockDAOUser, MockDAOFactory
```

Las interfaces de la consigna (`DAOUser` y `DAOFactory`) las llamé `IDAOUser` e `IDAOFactory`, con la I adelante como se nombran las interfaces en C#.

## Requisitos

- [x] Interfaz `IDAOUser`.
- [x] Interfaz `IDAOFactory`.
- [x] `EFDAOFactory` y `MockDAOFactory` implementan `IDAOFactory` con su método de creación.
- [x] `EFDAOUser` y `MockDAOUser` implementan `IDAOUser`.
- [x] La fábrica se inyecta en `Program.cs` para cambiar de base.
- [x] Las dos familias se prueban sin modificar `IDAOFactory`: solo cambia la configuración.

## Preguntas para debatir

**1. ¿Por qué `DAOFactory` no debería crear directamente `EFDAOUser`?**
Porque `IDAOFactory` es la abstracción: dice qué se puede crear, no cómo. Si creara un `EFDAOUser`, quedaría atada a Entity Framework y no se podría cambiar a Mock sin modificarla. Decidir la clase concreta es trabajo de cada fábrica concreta.

**2. ¿Qué pasaría si la fábrica `EFDAOFactory` devolviera un exportador de notas PDF y uno de asistencias Excel?**
Estaría mezclando cosas que no tienen nada que ver. Una fábrica abstracta crea una familia de objetos relacionados, en este caso los DAOs de una misma forma de guardar datos. Los exportadores no son acceso a datos ni dependen de EF, así que la fábrica tendría dos responsabilidades. Además, `MockDAOFactory` también tendría que devolver exportadores aunque no tengan nada de mock. Los exportadores van en su propia fábrica, como en el ejercicio de Factory Method.

**3. ¿Qué clases habría que modificar si además incorporamos acceso por SQL directo?**
Ninguna de las que ya existen. Se agregan `SqlDAOUser` (implementa `IDAOUser` con consultas SQL) y `SqlDAOFactory` (implementa `IDAOFactory`), y en `Program.cs` se suma la opción para registrarla. El controller y las interfaces quedan igual.

**4. ¿Qué ventaja obtenemos al pasar la fábrica por el constructor?**
El controller no sabe con qué familia trabaja: recibe una `IDAOFactory` y listo. Quién la elige es `Program.cs` con la inyección de dependencias. Así se cambia de base sin tocar el controller, y en un test se le puede pasar una fábrica de prueba. Además, la dependencia queda a la vista: mirando el constructor se sabe qué necesita la clase para funcionar.
