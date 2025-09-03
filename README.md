# Portafolio FESC 2025

Este proyecto inicial fue desarrollado por el **Ingeniero Manuel Parada** con el propósito de presentar el **portafolio institucional** y mostrar cómo están distribuidos los equipos de la **Fábrica de Software**.  

El enlace a continuación corresponde a la **primera versión del proyecto**, creada antes del proceso de refactorización:  
👉 [Versión inicial del proyecto](https://portafolio.2025.ingsoftwarefesc.com/#inicio)

---

## Tecnologías y Entorno de Desarrollo

Este proyecto utiliza **Vue 3** con **Vite** como base de configuración.

### Customize configuration

Para más detalles de configuración, consultar la [documentación oficial de Vite](https://vite.dev/config/).

---

## Project Setup

Instalar dependencias del proyecto:

```sh
npm install
```

### Compile and Hot-Reload for Development

Ejecutar el proyecto en modo desarrollo con recarga automática:

```sh
npm run dev
```

### Compile and Minify for Production

Compilar y optimizar para entorno de producción:

```sh
npm run build
```

---

# Portafolio-Fabrica-Software

Este repositorio corresponde al **proyecto base** antes de aplicar refactorizaciones posteriores.  
Fue la primera versión implementada por el **Ingeniero Manuel Parada**, y sirve como referencia del **diseño y la organización original** de la Fábrica de Software.  

---
Durante esta primera refactorización se aplicaron mejoras enfocadas en **legibilidad, mantenibilidad y arquitectura ligera** del proyecto. Se estandarizaron nombres de variables y componentes, se reorganizaron assets eliminando duplicados, se ajustó la lógica de `Welcome.vue` para asignar correctamente equipos y tecnologías, y se aplicó el patrón **Strategy** para el renderizado dinámico en secciones de Team y Tech.  

### Principios y buenas prácticas implementadas  
- **KISS (Keep It Simple, Stupid):** simplificación del código, evitando complejidad innecesaria.  
- **DRY (Don’t Repeat Yourself):** eliminación de duplicidad en componentes y funciones.  
- **Nombres claros y consistentes:** variables, props y componentes ahora siguen un estándar uniforme.  
- **Organización de assets y rutas:** corrección de duplicados y estandarización de nombres.  
- **Accesibilidad:** mejoras en modales con cierre por tecla ESC y click fuera.  
- **Patrones de diseño:** aplicación inicial del patrón **Strategy** para el renderizado dinámico en secciones de Team y Tech.  

### Cambios realizados  
- Refactorización de componentes (`TeamTextSection`, `Welcome`, `TeamLaravelVue`, `TeamNetAngular`) con lógica más clara y texto dinámico.  
- Reestructuración de imágenes y recursos estáticos, eliminando duplicados y mejorando la compilación.  
- Mejora del `ModalDev` con funciones de accesibilidad (cierre con tecla ESC y click fuera).  
- Limpieza de archivos de configuración que no se utilizaban en el entorno local.  
- Actualización del `README.md` y preparación de la base técnica para pruebas y accesibilidad.  

---

## 🔮 Próximas Implementaciones
1. **Aplicar patrones de diseño** en los componentes.  
2. **Añadir testing** unitario e integración.  
3. **Mejorar accesibilidad** (`alt` en imágenes, contraste).  
4. **Implementar un campo de proyectos** que muestre todos los desarrollos realizados en la Unidad de Desarrollo.  

---

## 👥 Autoría y Mantenimiento
- Versión inicial: **Ing. Manuel Parada**  
- Refactorización y mantenimiento actual: **Erick Sebastián Pérez Carvajal** – Unidad de Desarrollo FESC  

