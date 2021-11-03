# SQL DML
## ¿qué son las setencias DML?
 DDL (Lenguaje de Manipulación de Datos). nos permiten manipular los datos en una base de datos relacional,  como ingresar, eliminar, actualizar, seleccionar.

## INSERT
`INSERT` nos permite ingresar datos a nuestras base de datos.
 ```SQL
  -- Sintaxis
  INSERT INTO <nombre_tabla>(...campos) VALUES (...datos)

  --Ejemplo:
  INSERT INTO cursos (nombre, precio) VALUES ('base de datos', 30.00) 
 ```
 podemos insertar varios registro a las vez.
 ```SQL
  -- Sintaxis
  INSERT INTO <nombre_tabla>(...campos) VALUES
   (...datos),
   (...datos)
  --Ejemplo:
  INSERT INTO cursos (nombre, precio) VALUES 
    ('Desarrollo web', 100.00),
    ('React js', 150.00) 
 ```

## SELECT
`SELECT` nos permite hacer consulta a una base de datos.
 ```SQL
  -- Sintaxis -  selecionar todo los campos de mi tabla
  SELECT * FROM <nombre_tabla> 
  --Ejemplo:
  SELECT * FROM cursos
 ```
 podemos selecionar registro mediante una condición
  ```SQL
  -- Sintaxis 
  SELECT * FROM <nombre_tabla> WHERE <condición>
  --Ejemplo:
  SELECT * FROM cursos WHERE id = 1
 ```
Quieres conocer consultas mas avanzadas visite este [link]()

## UPDATE
`UPDATE` nos permite actualizar los valores de un registro en una base de datos

```sql
  --Sintaxis
  UPDATE <nombre de la tabla> SET <...campo = nuevo valor> WHERE condición

  --Ejemplo:
  UPDATE cursos set nombre = "Vuejs" WHERE id = 1
```

:::warning !Importante!
cuando hacemos una actualización  en una base de datos, debemos especificar que registro vamos actualizar, mediante `WHERE` que nos permite hacer una condicion, ya que si no hacemos eso la actualización se haría en toda nuestra tabla
:::

## DELETE
`UPDATE` nos permite eliminar registro de una base de datos

```sql
  --Sintaxis
  DELETE  FROM <nombre de la tabla> WHERE condición

  --Ejemplo:
  UPDATE FROM cursos WHERE id = 1
```

:::danger ! Tener en cuenta !
  cuando hacemos un delete debemos asegurarnos que tenga una condicion con `WHERE`, sino se eliminaría todo los registro de la tabla. 
  y te puden despedir del trabajo 😭😢
:::