# 🎮 Tres en Raya - Juego Arcade

Un juego clásico de Tres en Raya (Tic-Tac-Toe) desarrollado con React y Vite, con un diseño moderno inspirado en videojuegos arcade.

![Tres en Raya Game](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-4.5.0-purple?style=for-the-badge&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)

## ✨ Características

- 🎯 **Juego clásico de Tres en Raya** con lógica completa
- 🎨 **Diseño arcade moderno** con efectos neón y animaciones
- 📱 **Responsive design** para móviles y tablets
- 🎊 **Efectos visuales** incluyendo confeti al ganar
- 💾 **Persistencia local** - el juego se guarda automáticamente
- ⚡ **Desarrollo rápido** con Vite y React
- 🎮 **Interfaz intuitiva** con feedback visual

## 🚀 Tecnologías Utilizadas

- **React 18.2.0** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 4.5.0** - Herramienta de construcción frontend moderna
- **CSS3** - Estilos avanzados con animaciones y efectos
- **JavaScript ES6+** - Lógica del juego y funcionalidades
- **Canvas Confetti** - Efectos de celebración

## 🎯 Cómo Jugar

1. **Inicio**: El juego comienza con el jugador X
2. **Turnos**: Los jugadores alternan colocando X y O en el tablero
3. **Objetivo**: Formar una línea horizontal, vertical o diagonal con 3 símbolos iguales
4. **Victoria**: El primer jugador en lograr esto gana
5. **Empate**: Si el tablero se llena sin ganador, es un empate

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd gato-master
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Comandos disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye para producción
npm run preview      # Vista previa de la construcción

# Linting
npm run lint         # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
gato-master/
├── src/
│   ├── components/
│   │   ├── Square.jsx      # Componente de casilla individual
│   │   └── Winner.jsx      # Modal de ganador
│   ├── logic/
│   │   └── board.js        # Lógica del juego
│   ├── style/
│   │   ├── App.css         # Estilos específicos de la app
│   │   └── index.css       # Estilos globales y del juego
│   ├── constants.js        # Constantes del juego
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Punto de entrada
├── public/                # Archivos públicos
├── dist/                  # Archivos de construcción
├── package.json           # Dependencias y scripts
└── README.md             # Documentación
```

## 🎨 Características del Diseño

### Efectos Visuales
- **Colores neón**: Verde (#00ff88), Rosa (#ff0080), Azul (#0080ff)
- **Gradientes**: Fondos con degradados modernos
- **Animaciones**: Efectos de hover, entrada y transiciones suaves
- **Glow effects**: Bordes brillantes y sombras neón
- **Partículas**: Efectos de fondo con elementos flotantes

### Responsive Design
- **Desktop**: Diseño optimizado para pantallas grandes
- **Tablet**: Adaptación para tablets y pantallas medianas
- **Mobile**: Interfaz táctil optimizada para móviles

## 🔧 Funcionalidades Técnicas

### Persistencia de Datos
- El estado del juego se guarda automáticamente en `localStorage`
- Al recargar la página, el juego continúa desde donde se quedó
- Opción de reiniciar el juego en cualquier momento

### Lógica del Juego
- Detección automática de victoria en todas las direcciones
- Prevención de jugadas inválidas
- Indicador visual del turno actual
- Modal de resultado con animaciones

### Optimizaciones
- Componentes reutilizables
- CSS optimizado con variables CSS
- Animaciones suaves y eficientes
- Código limpio y bien estructurado

## 🚀 Despliegue

### Construcción para Producción
```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/` y están listos para desplegar en cualquier hosting estático.

### Plataformas de Despliegue Recomendadas
- **Netlify**: Despliegue automático desde Git
- **Vercel**: Optimizado para aplicaciones React
- **GitHub Pages**: Hosting gratuito para proyectos
- **Firebase Hosting**: Plataforma de Google

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.


## 🙏 Agradecimientos

- React Team por el framework
- Vite por las herramientas de desarrollo
- Canvas Confetti por los efectos de celebración
- La comunidad de desarrolladores por el apoyo

---

⭐ **¡Si te gustó este proyecto, dale una estrella en GitHub!**
