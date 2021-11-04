# SQL DDL

## ¿Qué son las setencias DDL?

DDL (Lenguaje de Definición de Datos). Son sentencias que nos permiten definir, alterar, modificar objetos dentro de mi base de datos. Las cuales mencionamos a continuación:

## CREATE

La palabra reservada `CREATE` nos permiten crear bases de datos, tablas etc.

### Crear una base de datos

Para crear una base de datos escribimos lo siguiente:

```sql
  --sintaxis
  CREATE DATABASE <nombre de la base de datos>

  --Ejemplo:

  CREATE DATABASE cursos_eti
```

### Crear una tabla

También se usa `CREATE` para crear una tabla:

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

Con `ALTER` podemos modificar la estructura de una tabla.

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

### Eliminar restricciones

```sql
  --Sintaxis
  ALTER TABLE <nombre de la tabla> DROP CONSTRAINT  <nombre de la restricción>

  --Ejemplo:
  ALTER TABLE cursos DROP CONSTRAINT uk_nombre_crs
```

### Agregar restricciones

```sql
  --Sintaxis
  ALTER TABLE <nombre de la tabla> ADD CONSTRAINT <nombre restricción>

  --Ejemplo:
  ALTER TABLE cursos ADD CONSTRAINT ck_precio_crs CHECK (precio > 0)
```

:::warning
a estas alturas aun no conoces las restricciones en SQL visite a este [enlace](/extras/)
:::
