# Skills reutilizables

Herramientas para producir y mantener webs de cliente rápido y con buen acabado.
Cada carpeta es una *skill* de Claude Code con un `SKILL.md` (instrucciones que Claude
sigue cuando la invocas).

| Skill | Para qué sirve |
|-------|----------------|
| [`generar-web-local`](generar-web-local/SKILL.md) | Crear una web de negocio local desde los datos del cliente. |
| [`auditar-web`](auditar-web/SKILL.md) | Auditar una web (rendimiento, SEO, accesibilidad, responsive) y devolver un informe. |
| [`desplegar-web`](desplegar-web/SKILL.md) | Publicar el proyecto en Vercel / Netlify / Hostinger, con checklist. |

## Cómo instalarlas

Las skills se cargan desde `~/.claude/skills/` (todas tus sesiones) o desde
`.claude/skills/` (solo ese proyecto). Copia las carpetas que quieras:

```bash
# Disponibles en todos tus proyectos:
mkdir -p ~/.claude/skills
cp -R portafolio-web/skills/generar-web-local ~/.claude/skills/
cp -R portafolio-web/skills/auditar-web       ~/.claude/skills/
cp -R portafolio-web/skills/desplegar-web     ~/.claude/skills/
```

Reinicia Claude Code y aparecerán. Se invocan escribiendo `/generar-web-local`,
`/auditar-web` o `/desplegar-web`, o pidiéndolo en lenguaje natural
("genérame una web para una peluquería").

## Cómo usarlas (resumen)

1. **generar-web-local** → le das nombre, sector, colores y secciones; te monta un
   proyecto Astro + Tailwind con la misma calidad que las webs del portafolio.
2. **auditar-web** → le das una URL o una carpeta del proyecto; te devuelve un informe
   priorizado de mejoras.
3. **desplegar-web** → te guía paso a paso para publicar y te deja una checklist final.
