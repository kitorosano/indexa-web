# 📚 Indexa - Frontend

Una aplicación web moderna y eficiente para indexar y gestionar los temarios de tus libros físicos, facilitando la búsqueda y organización de contenido.

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

## 🏗️ Arquitectura

Este proyecto sigue una arquitectura **cliente-servidor** separada en dos repositorios:

- **Frontend** (este repositorio): Interfaz de usuario en HTML/CSS/JS
- **Backend** ([indexa-api](https://github.com/kitorosano/indexa-api)): API REST en Node.js
- **Base de Datos**: MySQL para persistencia de datos

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

3. **Inicia un servidor local** (opcional)

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

## 📁 Estructura del Proyecto

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

## 🔗 Repositorios Relacionados

- **Backend API**: [indexa-api](https://github.com/kitorosano/indexa-api) - API REST en Node.js con MySQL

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autores

**kitorosano**

- GitHub: [@kitorosano](https://github.com/kitorosano)

---

⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub.
