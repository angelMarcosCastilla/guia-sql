# SQL DDL
## ¿qué son las setencias DDL?
 DDL (Lenguaje de Definición de Datos). Son sentencias que nos permiten definir, alterar, modificar objetos dentro de mi base de datos. Las cuales mencionamos a continuación:

## CREATE

la palabra reservada `CREATE` nos permiten crear bases de datos, tablas etc.

### Crear una base de datos
Para crear una base de datos escribimos los siguiente
```sql
  --sintaxis
  CREATE DATABASE <nombre de la base de datos>

  --Ejemplo:

  CREATE DATABASE cursos_eti
```

### Crear una tabla
Tambien se usa `CREATE` para crear una tabla:

```sql
  --sintaxis
  CREATE TABLE <nombre de la tabla>(
    ...campo1,
    ...campo2
    ...campo N
  )

  --Ejemplo:

  CREATE TABLE cursos(
    id            INT,
    nombre        VARCHAR(50),
    precio        DECIMAL(7,2),
    complejidad   CHAR(1)
  )
  
```
:::tip
  Los nombres de las tablas se deben escribir en plural.
:::

## ALTER
Con alter podemos modificar la estructura de una tabla

### Eliminar un campo de una tabla

```sql 
  --Sintaxis
  ALTER TABLE <nombre de la tabla> DROP COLUMN <campo>

  --Ejemplo: 
  ALTER TABLE cursos DROP COLUMN complejidad
```

### Modificar la estructura de un campo

```sql 
  --Sintaxis
  ALTER TABLE <nombre de la tabla> ALTER COLUMN <campo> ...cambios

  --Ejemplo: 
  ALTER TABLE cursos ALTER COLUMN nombre VARCHAR(70) NOT NULL
```

### Agregar campo a una tabla

```sql 
  --Sintaxis
  ALTER TABLE <nombre de la tabla> ADD <nuevo campo>

  --Ejemplo: 
  ALTER TABLE cursos ADD fechainicio DATE NOT NULL
```

### Eliminar restrincciones

```sql 
  --Sintaxis
  ALTER TABLE <nombre de la tabla> DROP CONSTRAINT  <nombre de la restrinccion>

  --Ejemplo: 
  ALTER TABLE cursos DROP CONSTRAINT uk_nombre_crs
```


### Agregar restrincciones

```sql 
  --Sintaxis
  ALTER TABLE <nombre de la tabla> ADD CONSTRAINT <nombre restrinccion>

  --Ejemplo: 
  ALTER TABLE cursos ADD CONSTRAINT ck_precio_crs CHECK (precio > 0)
```

:::warning 
  a estas alturas aun no conoces las restrincciones en SQL visite a este [enlace](/extras/)
:::