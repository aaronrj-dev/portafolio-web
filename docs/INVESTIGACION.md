# Investigación de diseño (Fase 0)

> Hallazgos que guían el diseño de los 3 sitios del portafolio. Fecha: julio 2026.
> El objetivo de estas webs es **impresionar a clientes potenciales**: elegancia, madurez,
> profesionalidad y simplicidad. *Menos es más.*

## Principios transversales (aplican a las 3 webs)

1. **Mobile-first de verdad.** El 60–74 % del tráfico de negocios locales y tiendas es móvil.
   Diseñamos primero la columna estrecha y ampliamos hacia escritorio.
2. **Velocidad = conversión.** Cada segundo de retraso reduce conversión de forma medible.
   → salida estática, imágenes optimizadas (AVIF/WebP), cero JS innecesario.
3. **Espacio en blanco generoso + tipografía cuidada.** Es lo que separa "plantilla barata"
   de "estudio profesional". Paleta contenida (1 color de marca + neutros).
4. **Microinteracciones sutiles**, no espectáculo: transiciones al hacer scroll, hover
   suave en botones y tarjetas. Siempre respetando `prefers-reduced-motion`.
5. **Prueba social visible**, no escondida en el pie: reseñas, valoraciones y fotos reales
   cerca de las llamadas a la acción (sube la conversión un 15–30 %).
6. **Accesibilidad (WCAG 2.1)**: contraste AA, foco visible, navegación por teclado,
   `alt` en imágenes, HTML semántico. Es profesionalidad *y* SEO.
7. **CTA único y claro por pantalla.** Cada sección empuja a una acción evidente
   (reservar / comprar / contactar).

## Web 1 — Restaurante / negocio local

**Tendencias 2026 relevantes:**
- **Hero visual potente** (foto o vídeo a pantalla completa). Sube el tiempo en página.
- **Storytelling** de marca: origen, producto de temporada, sostenibilidad (73 % de
  clientes prefieren negocios con conciencia eco).
- **Reserva directa** sin fricción (evita comisiones de terceros).
- Estética cálida y apetecible pero **editorial y contenida** (referencias: Noma,
  Eleven Madison Park, Dishoom — minimalismo llevado por la fotografía).
- Menú/carta legible, con precios claros; galería tipo revista.

**Decisiones de diseño:** paleta cálida arena + un acento marino profundo; tipografía
serif para titulares (carácter) + sans para texto (legibilidad); hero a pantalla completa;
carta como contenido estructurado (fácil de editar por el cliente).

## Web 2 — Tienda online (e-commerce boutique)

**Tendencias 2026 relevantes:**
- **Layout minimalista** centrado en el producto; la fotografía es la protagonista.
- **Prueba social integrada** en la ficha (estrellas, fotos de clientes) por encima del pliegue.
- **Checkout simplificado**: invitado, pocos campos, varios métodos de pago.
- **Microinteracciones** (hover, vista rápida, feedback al añadir al carrito) → +20 % conversión.
- Zoom / vistas de producto de alta calidad.

**Decisiones de diseño:** estilo boutique limpio, mucho blanco, rejilla de producto amplia;
carrito lateral (drawer) con feedback inmediato; checkout de un paso simulado con nota clara
de cómo conectar Stripe real.

## Web 3 — Landing de marca personal / servicio profesional

**Tendencias 2026 relevantes:**
- **Un solo objetivo por página** y una CTA dominante; eliminar toda fricción.
- **Propuesta de valor específica** (lo específico convierte; lo genérico no).
- Estructura probada: titular claro → prueba (portfolio/testimonios) → servicios →
  captación de lead.
- **Formularios cortos**: cada campo extra baja la conversión ~11 %. Pedir lo mínimo.
- Minimalismo que además demuestra capacidad técnica (carga rápida, detalle cuidado).

**Decisiones de diseño:** página única de una columna, ritmo vertical claro; portfolio como
galería sobria; testimonios con foto y nombre; formulario de contacto de 3 campos.

## Stack elegido y por qué

**Astro 5 + Tailwind CSS 4, salida estática.**
- **Cero JS por defecto** → Lighthouse muy alto, SEO y velocidad excelentes.
- **Componentes reutilizables** → base directa para la skill "generar web de negocio"
  y para producir webs de cliente rápido.
- **HTML estático** → se despliega igual en Vercel, Netlify o Hostinger (importa para
  clientes de bajo presupuesto).
- **Islands** puntuales solo donde hace falta interactividad (carrito de la tienda).

## Fuentes consultadas

- [Restaurant Websites: 35+ Inspiring Design Examples (2026) — SiteBuilderReport](https://www.sitebuilderreport.com/inspiration/restaurant-websites)
- [2026 Restaurant Website Trends — Mobal](https://www.mobal.io/blog-posts/restaurant-website-design-trends-for-2026-the-future-of-digital-dining)
- [Food & Drink Websites — Awwwards](https://www.awwwards.com/websites/food-drink/)
- [Ecommerce Design Trends for 2026 — Code Theorem](https://codetheorem.co/blogs/ecommerce-design-trends/)
- [Ecommerce Design Trends 2026 — DesignStudio](https://www.designstudiouiux.com/blog/ecommerce-web-design-trends/)
- [Web Design Trends 2026: E-Commerce Conversions — Nexito Media](https://www.nexitomedia.com/blog/web-design-trends-2026-ecommerce-conversion-focused-design)
- [40 best landing page examples of 2026 — Unbounce](https://unbounce.com/landing-page-examples/best-landing-page-examples/)
- [15 Best Lead Generation Landing Page Examples 2026 — Landingi](https://landingi.com/landing-page/lead-generation-examples/)
- [12 Landing Page Best Practices of 2026 — Leadfeeder](https://www.leadfeeder.com/blog/conversion-optimization/landing-pages-convert/)
