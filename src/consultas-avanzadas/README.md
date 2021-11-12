# CONSULTAS AVANZADAS

Para estos ejemplos usaremos una base de datos de prueba, pude descargar en en este [link](https://github.com/andresWeitzel/Base-de-datos-SQL-Northwind)

## Like

`LIKE` nos permite realizar búsqueda inexacta esta se apoya de dos comodines.

- % : Representa un conjunto  de caracteres
- \_ : representa un solo carácter

```sql
USE Northwind
GO

-- Mostrar a todos los clientes cuyo teléfono inicie con 02...
SELECT * FROM Customers WHERE Phone LIKE '02%'
GO

-- Mostrar los clientes cuyo nombre de compañía inicie con la letra B
SELECT * FROM Customers WHERE CompanyName LIKE 'B%'
GO

-- Mostrar los clientes cuyo nombre de compañía termine en "n"
SELECT * FROM Customers WHERE CompanyName LIKE '%n'
GO

-- Mostrar los clientes cuya dirección contenga al número 22
SELECT * FROM Customers WHERE Address LIKE '%22%'
GO

-- Mostrar los productos cuyo nombre inicie con una vocal
SELECT * FROM Products
	WHERE ProductName LIKE '[a,e,i,o,u]%'
	ORDER BY ProductName
GO
-- Mostrar los nombres de productos, cuya segunda letra sea la "a"
SELECT * FROM Products WHERE ProductName LIKE '_a%'
GO
```

## Top

`TOP`, Se utiliza para especificar el número de registros que se devolverá.

```sql
-- Los 5 productos más caros
SELECT TOP 5 * FROM Products ORDER BY UnitPrice DESC
GO
```

## Order by

`ORDER BY` nos permite ordenar de forma `ASC` ascendente o `DESC` descendente, por defecto si no especificamos en que orden se ordenara esta se hará en forma ascendente.

```sql
-- Consulta para que los productos se ordenen de forma ascendente
SELECT * FROM Products ORDER BY UnitPrice
SELECT * FROM Products ORDER BY UnitPrice ASC
GO

-- Consulta para que los productos se ordenen de forma Descendente
SELECT * FROM Products ORDER BY UnitPrice DESC
GO

-- Los 5 productos más caros
SELECT TOP 5 * FROM Products ORDER BY UnitPrice DESC
GO
```

# As

`AS` se utiliza para cambiar el nombre de una columna o tabla con un alias este alias solo existe durante la duración de la consulta.

```sql
SELECT CategoryID AS 'codigo'
	FROM Products
GO
-- En la consulta la columna tendria el nombre codigo.
```

## And, Or , Not

Estos son operadores que se utilizan para filtrar registro mediante condiciones.
| operador | descripcción |
|----------|---------------------------------------------------|
| AND | Muestra registro si las condiciones son verdaderas|
| OR | Muestra registro si una de las condiciones son verdaderas|
| NOT | Muestra registro si la condición es falsa|

```sql
-- Seleccionar los productos que su nombre sean Ikura o Tofu
SELECT * FROM Products
	WHERE	ProductName = 'Ikura' OR
			ProductName = 'Tofu'

-- Seleccionar los productos que sean de categoria 2 y que en su stock tenga mas de 35

SELECT * FROM Products
	WHERE	CategoryID = 2 AND
			UnitsInStock > 35

--Seleccionar los productos que no sean de categoria 5
SELECT * FROM Products
	WHERE NOT CategoryID = 5

GO
```

## In

`IN` nos permite especificar varios valores en una clásulas.

```sql
 -- Selecionar los productos con su categoria sea de 1, 3, 5
	SELECT *
		FROM Products
		WHERE CategoryID  IN (1, 3, 5);
	GO
```

## Between

`BETWEEN` selecciona valores dentro de un rango.

```sql
 -- Selecionar los productos con su categoria se encuentre entre 10 y 15
	SELECT *
		FROM Products
		WHERE CategoryID  BETWEEN 10 AND 15
	GO
```

## Consultas de resumen

Su nombre mismo nos dice, esto nos ayudará a realizar consultas que no serian tan detalladas, para utilizar estas consultas usamos `GROUP BY` para agrupar los valores.

Para estos ejemplos de consulta de resumen usaremos una base de datos de prueba, pude descargar en este [link](https://github.com/andresWeitzel/Base-de-datos-SQL-Northwind)

Es común usar estas funciones para las consultas de resumen.

| funciones | descripcción                   |
| --------- | ------------------------------ |
| COUNT()   | Sirve para contar valores      |
| MAX()     | Obtiene valores máximo         |
| MIN()     | Obtiene valores mínimo         |
| SUM()     | Obtiene la suma de valores     |
| AVG()     | Obtiene el promedio de valores |




```sql
-- Queremos  saber cúantos clientes hay por cada país
SELECT Country, COUNT(Country)
	FROM Customers
	GROUP BY Country
GO

-- Queremos  saber la cantidad de stock que hay por categoría

SELECT CategoryID, SUM(UnitsInStock) AS 'sumatoria'
	FROM Products
	GROUP BY CategoryID
	ORDER BY 2
GO

-- Se desea saber cuanto cuesta el producto mas caro por categoria
SELECT CategoryID, MAX(UnitPrice)
	FROM Products 
	GROUP BY  CategoryID
GO

```
## Having
En pocas Palabras la clásula  `HAVING` es el `WHERE`, pero para las consultas agrupadas

```sql
USE Northwind
GO

--Mostrar la cantidad de producto por categoria, y que cuya categoria
--sea mayor a 5
SELECT CategoryID, COUNT(ProductID) AS 'Cantidad'
	FROM Products
	GROUP BY CategoryID
	HAVING CategoryID > 5
GO
```

## Consultas multitablas

Las consultas multitabla son llamadas así porque están basadas en más de una tabla

:::tip
Para realizar consultas multitablas deberíamos tener en cuenta las relaciones que hay entre ellas  
:::

Para estos ejemplos usaremos una base de datos de prueba, pude descargar en este [link](https://github.com/andresWeitzel/Base-de-datos-SQL-Northwind)

### Inner join

`INNER JOIN` selecciona los registros que tienen valores coincidentes en ambas tablas.

```sql
--Mostrar las lista de productos indicando su proveedor y unidades de stocks
SELECT  Products.ProductID, Products.ProductName,
		Suppliers.CompanyName, Suppliers.Country,
		Products.UnitsInStock
	FROM Products
	INNER JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID
GO

-- Mostrar la lista de la tabla pedidos(Orders) Idpedido, nombre de la compañia, fecha de pedido
SELECT
	Orders.OrderID,
	Customers.CompanyName,
	Customers.Country,
	Orders.OrderDate
	FROM Orders
	INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID
GO
```

Podemos realizar consultas de 3 tablas:

```sql
-- mostrar de la tabla producto(Products) el IDproducto, nombre Producto, categoria, proveedor, precio, stock
SELECT  Products.ProductID,
		Products.ProductName,
		Categories.CategoryID,
		Suppliers.CompanyName,
		Products.UnitPrice,
		Products.UnitsInStock
	FROM Products
	INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID
	INNER JOIN Suppliers ON	Products.SupplierID = Suppliers.SupplierID
GO

-- Mostrar de la tabla pedidos(Orders) lo siguiente campos:
--Idpedido, nombre de la compañia, telèfono del cliente, apellidos, nombre del empleado,
-- fecha del pedido y codigo del pais.
SELECT
		Orders.OrderID,
		Customers.CompanyName,
		Customers.Phone,
		Employees.LastName,
		Employees.FirstName,
		Orders.OrderDate,
		Orders.ShipCountry
	FROM Orders
		INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID
		INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
GO
```
