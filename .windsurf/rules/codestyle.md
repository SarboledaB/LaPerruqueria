---
trigger: manual
---

# Reglas de Diseño para Agentes de IA: Ecommerce Web

## Enfoque General

- Mantener siempre el contexto de ecommerce visual moderno, priorizando el impacto visual, la legibilidad y la conversión.
- Diseñar con enfoque mobile-first y considerar responsividad como principio base.
- Asumir tecnologías modernas como React, Tailwind CSS o CSS modular, salvo que se indique lo contrario.
- Seguir principios de experiencia de usuario (UX), diseño de interfaz (UI), accesibilidad y performance.

## Estructura de Product Card (Tarjeta de Producto)

Una tarjeta de producto debe contener como mínimo:

- Imagen del producto con alternativa visual en caso de ausencia.
- Nombre o título del producto, con un máximo de dos líneas.
- Precio actual visible y, si aplica, precio anterior tachado.
- Botón de acción principal (por ejemplo, "Agregar al carrito").
- Etiquetas destacadas como "Nuevo", "Oferta", "Top ventas".
- Rating o valoraciones si están disponibles.

## Buenas Prácticas Visuales

- Usar imágenes proporcionales y consistentes, idealmente 1:1 o 4:5.
- Utilizar colores llamativos y coherentes con la identidad de marca.
- Mantener un diseño visual limpio, con espacios en blanco bien distribuidos.
- Aplicar estados visuales al pasar el cursor (hover), como sombras o cambios de color.
- Garantizar que el diseño sea modular, reutilizable y escalable.

## Diseño de Listas de Productos

- Mostrar entre tres y cinco productos por fila en pantallas grandes y uno o dos en pantallas móviles.
- Implementar paginación o scroll infinito, según el tipo de ecommerce y volumen de productos.
- Usar filtros visibles y funcionales por categoría, precio, disponibilidad y otros criterios relevantes.
- Incluir controles de ordenamiento por relevancia, precio o popularidad.

## Experiencia de Usuario y Conversión

- Utilizar textos claros y orientados a la acción (por ejemplo, "Compra ahora", "Envío gratis").
- Mostrar mensajes de urgencia o escasez cuando sea apropiado (por ejemplo, "Últimas unidades").
- Optimizar los tiempos de carga mediante técnicas como lazy loading o renderizado del lado del servidor.
- Incluir microinteracciones sutiles para mejorar la respuesta visual del sistema.

## Accesibilidad

- Garantizar un contraste adecuado entre texto y fondo.
- Usar etiquetas ARIA para mejorar la accesibilidad técnica.
- Incluir descripciones alternativas para todas las imágenes relevantes.
- Asegurar que todos los elementos interactivos sean accesibles mediante teclado.

## Testing y Consistencia

- Probar el diseño en múltiples dispositivos y navegadores para garantizar consistencia.
- Utilizar herramientas de validación visual y de accesibilidad como Lighthouse o axe-core.
- Validar que el diseño soporte estados vacíos, errores o contenido inesperado como textos largos o imágenes ausentes.colaboración entre humanos e inteligencias artificiales.
