# Integraciones

Cómo activar con credenciales reales las integraciones que un cliente pedirá. Todas las
webs las traen **preparadas o simuladas de forma limpia**; aquí está el "último paso".

> Regla de oro: nunca subas claves secretas al repositorio. Lo que empieza por `pk_`
> (Stripe) o los IDs de formulario son públicos y pueden ir en el código; lo que empieza
> por `sk_` (secretas) va en variables de entorno del servidor.

---

## 1. Formulario de contacto → email

Las webs usan **Formspree** (sin backend, plan gratuito generoso). Alternativa: **Resend**.

### Formspree (recomendado para empezar)

1. Crea una cuenta en [formspree.io](https://formspree.io) con `aaronrj.webdev@gmail.com`
   (o el correo del cliente).
2. **New form** → copia el ID (formato `xxxx…`). Tu endpoint es `https://formspree.io/f/<ID>`.
3. Busca `your-form-id` en el código y sustitúyelo:
   - Restaurante: `sites/01-restaurante/src/pages/index.astro` (formulario de reservas).
   - Marca personal: `sites/03-marca-personal/src/pages/index.astro` (contacto).
   - Tienda: `sites/02-tienda/src/pages/index.astro` (newsletter).
4. Listo: el `<form method="POST">` ya envía. Configura en Formspree el email de destino y
   (opcional) la redirección de "gracias".

### Resend (emails propios / más control)

Requiere una pequeña función serverless (p. ej. en Vercel) porque la API key es secreta:

```js
// api/contact.js (Vercel Function)
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY); // en variables de entorno
export default async function handler(req, res) {
  const { nombre, email, mensaje } = req.body;
  await resend.emails.send({
    from: 'web@tudominio.com',
    to: 'cliente@sunegocio.com',
    subject: `Nuevo contacto de ${nombre}`,
    replyTo: email,
    text: mensaje,
  });
  res.status(200).json({ ok: true });
}
```

Apunta el `action` del formulario a `/api/contact` y define `RESEND_API_KEY` en el panel
de Vercel. Verifica tu dominio en Resend para mejor entregabilidad.

---

## 2. Botón de WhatsApp

Ya implementado (componente `WhatsAppButton.astro`). Solo cambia el número:

- Edita `site.whatsapp` en `src/data/site.ts` con el número en **formato internacional
  sin `+` ni espacios** (ej.: `34600112233`).
- El enlace es `https://wa.me/<numero>?text=<mensaje>` con un mensaje predefinido.

## 3. Redes sociales

En `src/data/site.ts`, campo `social`. Pon las URLs reales; los enlaces del header/footer
se actualizan solos.

---

## 4. Google Maps (ubicación)

Solo en la web de restaurante (y donde haga falta):

1. Google Maps → busca la dirección → **Compartir → Insertar un mapa** → copia el `src`
   del iframe.
2. Pégalo en `sites/01-restaurante/src/data/site.ts` → `address.embed`.
3. Cambia también `address.maps` por el enlace "Cómo llegar" real.

> El iframe de "insertar mapa" **no requiere API key**. Solo si quieres un mapa
> interactivo personalizado necesitarías la Maps JavaScript API (de pago a cierto volumen).

---

## 5. Analítica web

Preparada para activar. Dos opciones:

### Google Analytics 4

Añade en el `<head>` de `BaseLayout.astro` (idealmente condicionado a producción):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

### Plausible (privacidad, sin cookies — recomendado para RGPD)

```html
<script defer data-domain="tudominio.com" src="https://plausible.io/js/script.js"></script>
```

**Eventos de conversión útiles** (dispáralos en el submit del formulario / add-to-cart):

```js
// GA4
gtag('event', 'generate_lead');          // envío de formulario
gtag('event', 'add_to_cart', { value }); // tienda
// Plausible
plausible('Contacto enviado');
```

> Si usas cookies (GA4), añade un aviso de cookies acorde al RGPD.

---

## 6. Pasarela de pago (solo tienda)

El checkout de la tienda es una **simulación** con la misma UX que el real. Para cobrar de
verdad, conecta **Stripe**. Como una web estática no puede guardar la clave secreta, se
necesita una función serverless (Vercel/Netlify) que cree la sesión de pago.

### Stripe Checkout (lo más simple)

1. Cuenta en [stripe.com](https://stripe.com) → obtén `pk_live_…` (pública) y `sk_live_…` (secreta).
2. Crea una función serverless que cree la Checkout Session con las líneas del carrito:

```js
// api/checkout.js (Vercel Function)
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // sk_… en entorno
export default async function handler(req, res) {
  const { items } = req.body; // [{ slug, qty }] validado contra tu catálogo en servidor
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: items.map(i => ({
      price_data: {
        currency: 'eur',
        product_data: { name: i.name },
        unit_amount: Math.round(i.price * 100),
      },
      quantity: i.qty,
    })),
    success_url: 'https://tienda.com/checkout?ok=1',
    cancel_url: 'https://tienda.com/checkout',
  });
  res.status(200).json({ url: session.url });
}
```

3. En `checkout.astro`, en vez de mostrar el mensaje de éxito simulado, llama a
   `/api/checkout` con el carrito y redirige a `session.url`.
4. **Valida precios en el servidor** (nunca te fíes del precio que manda el cliente).
5. Escucha el webhook `checkout.session.completed` para confirmar el pedido y avisar por email.

> Alternativas según el cliente: **PayPal**, **Redsys** (bancos españoles), o directamente
> **Shopify/WooCommerce** si necesita gestión de inventario y pedidos completa.

---

## Dónde se toca cada cosa (resumen)

| Integración | Fichero |
|-------------|---------|
| Formularios | `src/pages/index.astro` (buscar `your-form-id`) |
| WhatsApp / redes / contacto | `src/data/site.ts` |
| Google Maps | `sites/01-restaurante/src/data/site.ts` (`address.embed`) |
| Analítica | `src/layouts/BaseLayout.astro` (`<head>`) |
| Pago (Stripe) | `sites/02-tienda/src/pages/checkout.astro` + función serverless |
