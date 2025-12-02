# Venta de Autos - React Vite

Proyecto de e-commerce para la venta de autos, desarrollado con **React** y **Vite**, desplegado en **Netlify**.

## 🚀 Características

- Listado de autos con imágenes y precios
- Carrito de compras con:
  - Incrementar / disminuir cantidad
  - Eliminar productos
  - Total calculado automáticamente
- Login simulado con persistencia en localStorage
- Rutas protegidas (solo el carrito y la página de admin, requiere login)
- Reseñas y contacto
- Página de administación para agregar-editar-eliminar un producto
- SPA routing compatible con Netlify (archivo `_redirects`)

## 📂 Tecnologías

- React 18 + Hooks
- Vite 7
- React Router v6 (ruteo)
- React Helmet (SEO y metadatos)
- React Toastify (notificaciones)
- Bootstrap 5
- Netlify para deployment
- MockAPI para datos de autos
- Node.js ≥ 18 y npm

## ⚙️ Instalación y uso en local

1. Clonar el repositorio:
   git clone https://github.com/matias-giudice/venta-de-autos-reactjs.git

2. Entrar al directorio del proyecto:
   cd venta-de-autos-reactjs

3. Instalar dependencias:
   npm install

4. Ejecutar en modo desarrollo:
   npm run dev

   - La aplicación estará disponible en http://localhost:5173/

5. Generar build de producción:
   npm run build

   - El contenido se genera en la carpeta dist/ y puede desplegarse en cualquier servidor estático (Netlify, Vercel, GitHub Pages, etc.).

## 🌐 Deploy
Proyecto desplegado en Netlify: https://venta-de-autos-reactjs.netlify.app/

## 📝 Notas

- Login simulado: cualquier email y contraseña funciona.
- Carrito protegido: solo se puede acceder si estás logueado.