(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{389:function(a,s,t){"use strict";t.r(s);var e=t(51),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sql-ddl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-ddl"}},[a._v("#")]),a._v(" SQL DDL")]),a._v(" "),t("h2",{attrs:{id:"¿que-son-las-setencias-ddl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#¿que-son-las-setencias-ddl"}},[a._v("#")]),a._v(" ¿Qué son las setencias DDL?")]),a._v(" "),t("p",[a._v("DDL (Lenguaje de Definición de Datos). Son sentencias que nos permiten definir, alterar, modificar objetos dentro de mi base de datos. Las cuales mencionamos a continuación:")]),a._v(" "),t("h2",{attrs:{id:"create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[a._v("#")]),a._v(" CREATE")]),a._v(" "),t("p",[a._v("La palabra reservada "),t("code",[a._v("CREATE")]),a._v(" nos permiten crear bases de datos, tablas etc.")]),a._v(" "),t("h3",{attrs:{id:"crear-una-base-de-datos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crear-una-base-de-datos"}},[a._v("#")]),a._v(" Crear una base de datos")]),a._v(" "),t("p",[a._v("Para crear una base de datos escribimos lo siguiente:")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--sintaxis")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nombre de la base de datos"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Ejemplo:")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" cursos_eti\n")])])]),t("h3",{attrs:{id:"crear-una-tabla"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crear-una-tabla"}},[a._v("#")]),a._v(" Crear una tabla")]),a._v(" "),t("p",[a._v("También se usa "),t("code",[a._v("CREATE")]),a._v(" para crear una tabla:")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--sintaxis")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nombre de la tabla"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("campo1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("campo2\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("campo N\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Ejemplo:")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" cursos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    id            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    nombre        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    precio        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DECIMAL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    complejidad   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  \n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("Los nombres de las tablas se deben escribir en plural.")])]),a._v(" "),t("h2",{attrs:{id:"alter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alter"}},[a._v("#")]),a._v(" ALTER")]),a._v(" "),t("p",[a._v("Con "),t("code",[a._v("ALTER")]),a._v(" podemos modificar la estructura de una tabla.")]),a._v(" "),t("h3",{attrs:{id:"eliminar-un-campo-de-una-tabla"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eliminar-un-campo-de-una-tabla"}},[a._v("#")]),a._v(" Eliminar un campo de una tabla")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Sintaxis")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nombre de la tabla"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLUMN")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("campo"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Ejemplo: ")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" cursos "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLUMN")]),a._v(" complejidad\n")])])]),t("h3",{attrs:{id:"modificar-la-estructura-de-un-campo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modificar-la-estructura-de-un-campo"}},[a._v("#")]),a._v(" Modificar la estructura de un campo")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Sintaxis")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nombre de la tabla"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLUMN")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("campo"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cambios\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Ejemplo: ")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" cursos "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLUMN")]),a._v(" nombre "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("70")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),a._v("\n")])])]),t("h3",{attrs:{id:"agregar-campo-a-una-tabla"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agregar-campo-a-una-tabla"}},[a._v("#")]),a._v(" Agregar campo a una tabla")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Sintaxis")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nombre de la tabla"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nuevo campo"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Ejemplo: ")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" cursos "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" fechainicio "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),a._v("\n")])])]),t("h3",{attrs:{id:"eliminar-restricciones"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eliminar-restricciones"}},[a._v("#")]),a._v(" Eliminar restricciones")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Sintaxis")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nombre de la tabla"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CONSTRAINT")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nombre de la restrinccion"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Ejemplo: ")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" cursos "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CONSTRAINT")]),a._v(" uk_nombre_crs\n")])])]),t("h3",{attrs:{id:"agregar-restricciones"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agregar-restricciones"}},[a._v("#")]),a._v(" Agregar restricciones")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Sintaxis")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nombre de la tabla"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CONSTRAINT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nombre restrinccion"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--Ejemplo: ")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" cursos "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CONSTRAINT")]),a._v(" ck_precio_crs "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CHECK")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("precio "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("a estas alturas aun no conoces las restricciones en SQL visite a este "),t("RouterLink",{attrs:{to:"/extras/"}},[a._v("enlace")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);