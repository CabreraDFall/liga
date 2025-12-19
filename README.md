# 🎱 Liga de Billar - Sistema de Gestión y Estadísticas

Sistema web completo para gestionar y visualizar estadísticas de torneos de billar. Diseñado con una interfaz moderna, animaciones suaves y visualización de datos en tiempo real.

## 📋 Características

### ✨ Funcionalidades Principales

- **📊 Tabla de Clasificación**: Visualización ordenada de jugadores con partidos jugados y puntos totales
- **📝 Historial de Partidos**: Lista completa de todos los matches disputados
- **🔍 Búsqueda Inteligente**: Filtro de partidos por nombre de jugador
- **📋 Copiar Resultados**: Exporta partidos filtrados al portapapeles en formato texto
- **📈 Estadísticas Detalladas**: Récords, promedios y destacados del torneo
- **🎨 Ordenamiento Dinámico**: Ordena la tabla por cualquier columna (jugador, partidos, puntos)

### 🎯 Sistema de Puntuación

- Los **puntos** equivalen a la **suma total de partidas ganadas** por cada jugador
- Cada partida individual ganada suma +1 punto
- Sistema típico: **Match a 3 partidas** (el primero en ganar 3)

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- No requiere servidor ni instalación adicional

### Pasos para usar

1. **Descargar el proyecto**
   - Descarga todos los archivos: `index.html`, `styles.css`, `app.js`

2. **Abrir la aplicación**
   - Doble click en `index.html` o
   - Arrastra `index.html` a tu navegador

3. **¡Listo!** La aplicación carga automáticamente

## 📁 Estructura del Proyecto

```
liga/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y diseño visual
├── app.js             # Lógica de la aplicación
└── README.md          # Este archivo
```

## ⚙️ Configuración de Datos

### Agregar/Modificar Partidos

Los datos se gestionan en el archivo `app.js`, en el array `initialMatches`:

```javascript
const initialMatches = [
    { player1: "David", score1: 2, player2: "Edwin", score2: 1, date: "2025-01-01" },
    { player1: "Alberto", score1: 1, player2: "David", score2: 2, date: "2025-01-02" },
    // ... más partidos
];
```

**Formato de cada partido:**
- `player1`: Nombre del jugador local
- `score1`: Partidas ganadas por jugador local
- `player2`: Nombre del jugador visitante  
- `score2`: Partidas ganadas por jugador visitante
- `date`: Fecha del match (formato: YYYY-MM-DD)

### Normalización de Nombres

La aplicación normaliza automáticamente variaciones de nombres:
- `Habram`, `Habrán`, `Habran` → `Abraham`
- `Tsazar` → `Tsezar`
- `Temu` → `Temo`

Puedes agregar más variaciones en la función `normalizeName()` del archivo `app.js`.

## 🎨 Características de Diseño

- **🌙 Modo Oscuro Premium**: Tema oscuro con efectos glassmorphism
- **🎨 Gradientes Vibrantes**: Paleta de colores moderna y atractiva
- **✨ Micro-animaciones**: Transiciones suaves en hover y clicks
- **📱 Diseño Responsive**: Se adapta a móviles, tablets y escritorio
- **⚡ Rendimiento Optimizado**: Carga rápida y navegación fluida

## 📊 Secciones de la Aplicación

### 1. Clasificación
- Tabla ordenada por puntos
- Badges dorados/plateados/bronce para top 3
- Click en columnas para ordenar
- Vista compacta: Posición, Jugador, PJ, PTS

### 2. Partidos
- Lista cronológica de matches
- Búsqueda en tiempo real
- Botón de copiar resultados filtrados
- Formato de copia: `Jugador1 Score1 - Score2 Jugador2`

### 3. Estadísticas
- Total de partidos jugados
- Total de jugadores
- Partidas totales
- Promedio por match
- Récords: Mejor jugador, Más victorias, Más partidos

## 🔧 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
  --primary: #6366f1;      /* Color principal */
  --secondary: #ec4899;    /* Color secundario */
  --accent: #10b981;       /* Color de acento */
}
```

### Cambiar Textos

Los textos principales están en `index.html`:
- Título: `<h1>🎱 Liga de Billar</h1>`
- Subtítulo: `<p class="subtitle">Sistema de Gestión y Estadísticas</p>`

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, flexbox, grid
- **JavaScript (Vanilla)**: Lógica sin frameworks
- **Google Fonts**: Tipografía Inter y Outfit

## 📝 Notas Importantes

- Los datos se cargan solo desde `initialMatches` (sin persistencia)
- No hay backend ni base de datos
- Ideal para torneos con actualización manual
- Los filtros y ordenamientos son en tiempo real

## 🎯 Próximas Mejoras Posibles

- [ ] Exportar estadísticas a PDF
- [ ] Gráficos de rendimiento por jugador  
- [ ] Historial de enfrentamientos directos
- [ ] Modo de impresión optimizado
- [ ] Temas de color personalizables

## 📄 Licencia

Este proyecto es de código abierto y puede ser usado libremente para torneos personales o comunitarios.

## 🤝 Contribuciones

¿Tienes ideas para mejorar la aplicación? ¡Todos los cambios son bienvenidos!

---

**Desarrollado con 🎱 para torneos de billar**

*Última actualización: Diciembre 2025*
