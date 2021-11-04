# CONCEPTOS EXTRAS 

## Restricciones
Los `CONSTRAINT` Son restricciones que se utilizan para limitar el tipo de dato  puede recibir una columna.

Las Restricciones son reglas que el Motor de base de datos de SQL Server aplica de forma automática.

:::warning ¡ Tener en cuenta !
Aunque las restricciones se pueden crear después de haber creado la tabla, se recomienda hacerlo en el momento de crear la tabla, así podríamos evitar conflictos
:::

|Tipos de restrinciones|    Descripción     |
|----------------------|--------------------|
|   NOT NULL           | Especifica que un campo no debe ser nulo
|   PRIMARY KEY        | El campo es de clave  primaria
|   UNIQUE             | Los valores de un campo no se debe repetir
|   FOREIGN KEY        | El campo es de una clave externa
|   CHECK              | Se utiliza para limitar rango de valores
|   DEFAULT            | Establece un valor por defecto a una columna

### NOT NULL
La restricción `NOT NULL` nos indica que un campo no debe estar vacío, debe tener un valor si o sí.

```sql
 CREATE TABLE  usuarios (
   id                 INT IDENTITY(1,1),
   nombre             VARCHAR(50) NOT NULL,
   apellido           VARCHAR(50) NOT NULL,
   numerocelular      CHAR(9) 
 )
  --En esta tabla hemos creados restricciones  de tipo NOT NULL a 
  --los campos nombre y apellido
 ```
 
### PRIMARY KEY
  La clave primaria o `PRIMARY KEY`, identifica de manera única cada fila de una tabla 

  la clave primaria no se debe repetir y debe ser único
```sql
 CREATE TABLE  usuarios (
   id                 INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
   nombre             VARCHAR(50) NOT NULL,
   apellido           VARCHAR(50) NOT NULL,
   numerocelular      CHAR(9) 

 )
 --Nuestro campo id seria nuestra clave primaria
 ```

 ### UNIQUE
 las restrinciones `UNIQUE` nos indican que los campos deben ser unicos 

:::tip
  las restricciones tienen que llevar un nombre descriptivo.`<tipoRestricción>_<campo>_<nombreTabla>`
  - UNIQUE      : uk
  - FOREIGN KEY : fk
  - CHECK       : ck
:::
```sql
CREATE TABLE  usuarios (
  id                 INT IDENTITY(1,1),
  nombre             VARCHAR(50) NOT NULL,
  apellido           VARCHAR(50) NOT NULL,
  numerocelular      CHAR(9) 

  CONSTRAINT uk_numerocelular_usr  UNIQUE (numerocelular)
)

 --Creamos una restricción UNIQUE para el campo numerocelular
 ```
### FOREIGN KEY
Las restricciones `FOREIGN KEY`, Es una o varias columnas que sirven para señalar cuál es la clave primaria de otra tabla.

 ```sql
 CREATE TABLE  usuarios (
   id                 INT IDENTITY(1,1),
   nombre             VARCHAR(50) NOT NULL,
   apellido           VARCHAR(50) NOT NULL,
   numerocelular      CHAR(9),
   pais               INT NOT NULL

   CONSTRAINT fk_pais_usr  FOREIGN KEY (pais) REFERENCES paises(idpais)
 )

 --Nuestro campos país contiene un id de una tabla paises,
 -- Creamos una restrinción para espeficiar que, País sería una 
 --llave secundaria, que viene a ser la llave primaria de la tabla paises
 ```
 ### CHECK
Las restricciones `CHECK`, nos permite limitar los rangos de una tabla.

 ```sql
 CREATE TABLE  usuarios (
   id                 INT IDENTITY(1,1),
   nombre             VARCHAR(50) NOT NULL,
   apellido           VARCHAR(50) NOT NULL,
   numerocelular      CHAR(9),
   pais               INT NOT NULL,
   edad               TINYINT

   CONSTRAINT ck_edad_usr CHECK (edad > 0)
 )

 --creamos una restricción de tipos CHECK 
 --para indicar que la edad no debe ser menor a 0
 ```

## Fechas y Horas
|   funciones     |   descripcción    |
|-----------------|-------------------|
|  GETDAY()	      | Retorna la fecha y hora del sistemas
|  YEAR()		      | Obtiene el año de una fecha
|  MONTH()	      | Obtiene el mes de una fecha
|  DAY()			    | Obtiene el día de una fecha
|  hOUR()	        | Obtiene la hora de un valor de tiempo
|  MINUTE()		    | Obtiene los minutos de un valor de  tiempo
|  SECOND()		    | Obtiene los segundos de un  valor de tiempo

Ejemplos: 

```sql
  --obtemenos la fecha actual del sistema
  SELECT GETDAY() 

  --Obtenemos el día de una fecha
  SELECT DAY('15/05/2000') --nos da 15
  --Obtenemos el mes de una fecha
  SELECT DAY('15/05/2000') --nos da 5
  --Obtenemos el año de una fecha
  SELECT DAY('15/05/2000') --nos da 2000
 
```
:::warning Tenemos que tener en cuenta:
  El formato de la fecha que pasaremos como argumentos, debe ser igual a lo que tenemos configurado en nuestro sistema.
:::

## Consultas de resumen
Su nombre mismo nos dice, esto nos ayudará a realizar consultas que no serian tan detalladas, para utilizar estas consultas usamos `GROUP BY` para agrupar los valores.

|   funciones     |   descripcción    |
|-----------------|-------------------|
|  COUNT()	      | Sirve para contar valores
|  MAX()		      | Obtiene valores máximo
|  MIN()	        | Obtiene valores mínimo
|  SUM()			    | Obtiene la suma de valores
|  AVG()	        | Obtiene el promedio de valores

Ejemplos: para estos ejemplos usaremos una base de datos de prueba, pude descargar en este [link](https://github.com/andresWeitzel/Base-de-datos-SQL-Northwind)

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

```