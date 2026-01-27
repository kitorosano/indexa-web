# 📚 Indexa - Frontend

> **Una aplicación web moderna y eficiente para indexar y gestionar los temarios de tus libros físicos, facilitando la búsqueda y organización de contenido.**

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Prettier](https://img.shields.io/badge/prettier-192a32?style=for-the-badge&logo=prettier&logoColor=dc524a)](https://prettier.io/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

## 🎯 Descripción

**Indexa Frontend** es la interfaz de usuario de una herramienta diseñada para digitalizar y organizar los índices de tu biblioteca personal. Con esta aplicación puedes crear un catálogo completo de los temarios de tus libros físicos, permitiéndote encontrar rápidamente en qué libro y página se encuentra la información que necesitas.

Este repositorio contiene el **cliente front-end** construido con HTML, CSS y JavaScript vanilla, que se comunica con un backend en Node.js para la gestión de datos.

## ✨ Características

- 📖 **Gestión de Libros**: Agrega y administra información de tus libros físicos
- 🔍 **Búsqueda Inteligente**: Encuentra temas específicos en toda tu biblioteca
- 📝 **Índices Detallados**: Registra capítulos, secciones y páginas
- 🏷️ **Categorización**: Organiza tus libros por categorías y etiquetas tematicas
- 💾 **Persistencia de Datos**: Tus datos se almacenan de forma segura en la base de datos
- 📱 **Diseño Responsivo**: Accede desde cualquier dispositivo
- ⚡ **Interfaz Rápida**: JavaScript vanilla para una experiencia fluida
- 🔐 **API REST**: Comunicación segura con el backend

## 🛠️ Tecnologías Frontend

- **HTML5**: Estructura semántica y moderna
- **CSS3**: Diseño responsivo y atractivo
- **JavaScript (Vanilla)**: Lógica de la aplicación sin frameworks
- **Fetch API**: Comunicación con el backend

### Stack Completo del Sistema

- **Frontend**: HTML5 + CSS3 + JavaScript (ES6+)
- **Backend**: Node.js + Express.js
- **Base de Datos**: MySQL
- **API**: RESTful

## 🏗️ Arquitectura

Este proyecto sigue una arquitectura **cliente-servidor** separada en dos repositorios:

- **Frontend** (este repositorio): Interfaz de usuario en HTML/CSS/JS
- **Backend** ([indexa-api](https://github.com/kitorosano/indexa-api)): API REST en Node.js

```
indexa-web/
├── assets/
│   └── images/        # Recursos gráficos
│       └── ...
├── css/               # Archivos CSS
│   └── ...
├── html/              # Archivos HTML
│   └── ...
├── js/                # Archivos JavaScript
│   └── ...
├── .env               # Variables de entorno (no incluido en el repositorio)
├── .env.example       # Variables de entorno de ejemplo
├── .gitignore         # Archivos y carpetas ignorados por Git
├── index.html         # Página principal
├── LICENSE            # Licencia del proyecto
└── README.md          # Documentación del proyecto
```

## 🚀 Instalación y Configuración

### Prerequisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)
- Backend de Indexa corriendo ([indexa-api](https://github.com/kitorosano/indexa-api))

### Configuración

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/kitorosano/indexa-web.git
   cd indexa-web
   ```

2. **Configura las variables de entorno**

   ```bash
   cp .env.example .env
   ```

   Edita el archivo `.env` con la URL de tu backend:

   ```env
   API_URL=
   ```

3. **Inicia un servidor local**

   ```bash
   # Con Node.js
   npx http-server

   # Con Live Server de VSCode
   # Haz clic derecho en index.html y selecciona "Open with Live Server"
   ```

4. **Accede a la aplicación**
   - Servidor node-http-server: `http://localhost:8080` (o el puerto que uses)
   - Servidor Live Server: `http://127.0.0.1:5500` (o el puerto que use Live Server)

> **Nota**: Asegúrate de tener el backend corriendo antes de usar la aplicación. Consulta el repositorio [indexa-api](https://github.com/kitorosano/indexa-api) para instrucciones de instalación del backend.

## 🔗 Repositorios Relacionados

- **Backend API**: [indexa-api](https://github.com/kitorosano/indexa-api) - API REST en Node.js con MySQL

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autores

**kitorosano**

- GitHub: [@kitorosano](https://github.com/kitorosano)

**theodonzio**

- GitHub: [@theodonzio](https://github.com/theodonzio)

---

⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub.
