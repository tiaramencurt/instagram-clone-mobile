# Instagram Clone Mobile (Expo & React Native)

Este de repositorio contiene un clon móvil de alto realismo de la interfaz de usuario de Instagram en su variante de modo oscuro (*Dark Mode*). El proyecto está desarrollado utilizando **React Native**, **TypeScript**, **Expo** y consumo asíncrono de API nativa.

---

## Referencia de Diseño (Figma)
El modelado visual, las dimensiones de layout, la iconografía y la distribución de componentes fueron tomados como base de las siguientes referencias de la comunidad de Figma:
* [Instagram UI Kit (Figma Community)](https://www.figma.com/community/file/1004033523744290376)
* [Instagram - UI Kit 2.0 (Figma Community)](https://www.figma.com/community/file/1341818988006002653)

---

## Guía de Inicialización del Entorno

Siga estos pasos de manera secuencial dentro del directorio raíz del proyecto para inicializar la aplicación:

### Paso 1: Instalación de dependencias
```bash
npm install --legacy-peer-deps

```

*Este comando lee el archivo `package.json` del proyecto y descarga automáticamente en la carpeta local `node_modules` todas las librerías necesarias de React Native, Expo, Axios (para la API de gatos), TypeScript y los paquetes de iconos vectoriales que utiliza nuestra interfaz. El flag `--legacy-peer-deps` se utiliza para omitir conflictos estrictos de dependencias cruzadas entre las librerías nativas de Expo y React.*

### Paso 2: Inicialización del servidor de desarrollo de Expo

```bash
npx expo start --tunnel

```

*`npx` ejecuta la versión local e instalada de las herramientas CLI de Expo. Inicializa Metro Bundler (el compilador de código) y genera un túnel de conexión externo (Ngrok). Esto permite que el código QR generado en la terminal pueda ser escaneado y ejecutado en dispositivos físicos mediante **Expo Go**, sorteando bloqueos de redes locales (LAN), firewalls escolares o diferencias en los puntos de acceso Wi-Fi. Presionando la tecla `w` en la consola se abrirá automáticamente la versión web adaptada.*

---

## Arquitectura de Archivos y Árbol de Directorios

El proyecto organiza su estructura de código de manera modular y mantenible. A continuación se desglosa el árbol jerárquico bajo el directorio principal:

```text
instagram-clone-mobile/
├── app.json                  # Configuración global de metadatos de Expo
├── App.styles.ts             # Hoja de estilos global unificada para el contenedor raíz y TabBar
├── App.tsx                   # Punto de entrada principal y gestor de navegación del aplicativo
├── index.ts                  # Punto de registro raíz de componentes de Expo
├── package.json              # Manifiesto de dependencias de la aplicación
├── tsconfig.json             # Configuración del compilador de TypeScript
└── src/                      # Directorio principal del código fuente
    ├── components/           # Componentes de UI reutilizables y atómicos
    │   ├── Header/
    │   │   ├── index.tsx          # Componente estático del cabezal con logo y acciones
    │   │   └── Header.styles.ts   # Estilos particulares del Header
    │   ├── PostCard/
    │   │   ├── index.tsx          # Card interactiva que encapsula la publicación
    │   │   └── PostCard.styles.ts # Estilos de márgenes, aspecto 1:1 y tipografías de la card
    │   └── StoryBar/
    │       ├── index.tsx          # Listado horizontal de historias con gradientes
    │       └── StoryBar.styles.ts # Estilos de burbujas, badges de interacción y fuentes
    ├── data/
    │   └── mockData.ts       # Datos simulados de historias, perfil de usuario activo y constantes
    ├── screens/              # Pantallas principales del flujo de navegación
    │   ├── Detail/
    │   │   ├── index.tsx          # Vista detallada de publicación interactiva con sistema de comentarios
    │   │   └── Detail.styles.ts   # Estilos de barra trasera, caja de texto e inputs de comentarios
    │   ├── Home/
    │   │   ├── index.tsx          # Feed principal de publicaciones integrado con FlatList
    │   │   └── Home.styles.ts     # Contenedor del feed y cargador de carga asíncrona (loaders)
    │   └── Profile/
    │       ├── index.tsx          # Pantalla de perfil, estadísticas y mosaico elástico
    │       └── Profile.styles.ts  # Adaptación responsiva para mosaicos en web/móvil
    └── services/
        └── catApi.ts         # Origen de datos e integración asíncrona con TheCatAPI mediante Axios

```

---

## Justificación de Componentes Atómicos y Props Heredadas

Para asegurar la modularidad, escalabilidad y reusabilidad del código según las buenas prácticas de React, el diseño se divide en piezas de interfaz especializadas:

### 1. `Header`

* **Justificación Conceptual**: Componente estático superior que contiene la identidad de marca (logo de Instagram) y accesos directos a notificaciones y mensajería directa. Al aislarse de la lógica del feed, reduce renderizados innecesarios y optimiza el rendimiento del scroll.
* **Flujo de Datos (Props)**:
* `onNotificationsPress?: () => void`: Función callback opcional heredada para manejar el tap del icono de notificaciones.
* `onMessagesPress?: () => void`: Función callback opcional heredada para manejar la navegación a la mensajería.



### 2. `StoryBar`

* **Justificación Conceptual**: Barra horizontal que contiene las historias activas. Centraliza el uso del componente `LinearGradient` de Expo para pintar el característico gradiente cromático de Instagram en las historias activas, abstrayendo esta complejidad del flujo de renderizado del feed principal.
* **Flujo de Datos (Props)**: Consume internamente datos tipados `Story[]` desde `mockData.ts`, abstrayendo datos locales para no sobrecargar el componente padre `Home`.

### 3. `PostCard`

* **Justificación Conceptual**: La unidad atómica más compleja del Feed. Encapsula la foto del post, interacción de "Me Gusta" nativo (mediante estado local reactivo), guardado de publicación y renderizado de la metadata asociada (usuario, pie de foto y tags).
* **Flujo de Datos (Props)**:
* `id: string`: Clave única para renderizar el avatar aleatorio de usuario del post.
* `imageUrl: string`: URL directa de la imagen a renderizar (mantenida bajo un aspecto 1:1 estricto con `aspectRatio`).
* `onPress: () => void`: Evento de callback heredado que se ejecuta al presionar la imagen, disparando la navegación nativa hacia el detalle.



---

## Declaración de Manejo de Estados y Hooks Utilizados

La aplicación evita dependencias de librerías de navegación pesadas (como React Navigation) a través de una arquitectura de **Navegación Controlada por Estados**, lo cual minimiza la latencia en transiciones y optimiza el control del historial:

### Estados Globales (Declarados en `App.tsx`)

* `currentScreen` (`useState<ScreenView>`): Controla de manera activa qué pantalla se está renderizando (`home`, `detail` o `profile`).
* `previousScreen` (`useState<ScreenView>`): Almacena la última ruta activa. Permite que al presionar la flecha "volver atrás" desde `Detail`, el usuario sea redirigido de manera precisa a la pestaña desde la cual originó el click (`Home` o `Profile`).
* `selectedPost` (`useState<CatPost | null>`): Almacena la referencia del post seleccionado, pasándolo de manera directa al componente `Detail` para su renderización dinámica.

### Estados Locales por Componente

* **En `Home.tsx**`:
* `posts` (`useState<CatPost[]>`): Almacena las publicaciones asíncronas obtenidas de la API de gatos.
* `loading` (`useState<boolean>`): Bandera booleana para mostrar un loader mientras el servicio asíncrono responde.
* `useEffect`: Hook encargado de disparar la llamada asíncrona a `catApi.ts` una sola vez en el montaje inicial del componente (`[]`).


* **En `Detail.tsx**`:
* `comments` (`useState`): Lista de objetos con los comentarios de la publicación. Permite agregar nuevos comentarios reactivos en tiempo real.
* `newComment` (`useState<string>`): Enlace directo de dos vías (*Two-Way Binding*) con el input de texto de la barra de comentarios.


* **En `PostCard.tsx**`:
* `liked` (`useState<boolean>`): Maneja el estado individual de "Me Gusta" de la publicación, cambiando el icono del corazón y sumando matemáticamente al contador de likes.
* `saved` (`useState<boolean>`): Controla si el usuario seleccionó guardar de forma local la publicación actual en sus marcadores.