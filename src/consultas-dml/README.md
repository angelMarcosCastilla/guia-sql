# SQL DML
## ¿qué son las setencias DML?
 DDL (Lenguaje de Manipulación de Datos). nos permiten manipular los datos en una base de datos relacional,  como ingresar, eliminar, actualizar, seleccionar.

## INSERT
`INSERT` nos permite ingresar datos a nuestras base de datos.
 ```SQL
  -- Sintaxis
  INSERT INTO <noombre_tabla>(...campos) VALUES (...datos)

  --Ejemplo:
  INSERT INTO cursos (nombre, precio) VALUES ('base de datos', 30.00) 
 ```
 podemos insertar varios registro a las vez.
 ```SQL
  -- Sintaxis
  INSERT INTO <noombre_tabla>(...campos) VALUES
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
  -- Sintaxis
  INSERT INTO <noombre_tabla>(...campos) VALUES (...datos)

  --Ejemplo:
  INSERT INTO cursos (nombre, precio) VALUES ('base de datos', 30.00) 
 ```