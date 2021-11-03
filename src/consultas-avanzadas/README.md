# CONSULTAS AVANZADAS

##  Like
`LIKE` nos permite realizar busqueda inexacta esta se apoya de dos comodines
- % : resprenseta un conjunto  de caracteres
- _ : un solo carácter

Ejemplos: para estos ejemplos usaremos una base de datos de prueba, pude descarar en enste [link](https://github.com/andresWeitzel/Base-de-datos-SQL-Northwind)

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
`TOP`, Se utiliza para especificar el número de registros que se devolverá
```sql
-- Los 5 productos más caros
SELECT TOP 5 * FROM Products ORDER BY UnitPrice DESC
GO
```

## Order by
`ORDER BY` nos permite ordenar de forma `ASC` ascendente o `DESC` descendente, por defecto sino no espeficamos en que orden se ordenara esta se hara en forma ascendente

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