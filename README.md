# Ejercicio Ionic: Hyrule Compendium Explorer 🗡️🛡️

Aplicación desarrollada en **Ionic** que permite explorar el compendio de *The Legend of Zelda: Breath of the Wild / Tears of the Kingdom* consumiendo la API de Hyrule Compendium con navegación por categorías, carga diferida (*infinite scroll*) e interacción mediante deslizamiento de elementos.

---

## 🎯 Requisitos del Ejercicio

### 1. Menú Superior de Categorías (Slides / Segment)
El menú superior debe permitir seleccionar entre las 5 categorías disponibles utilizando un componente de diapositivas o pestañas desplazables (*slides* / *scrollable segment*) con los siguientes iconos de Ionicons:

* 🐾 `paw` ➔ `creatures`
* 💀 `skull` ➔ `monsters`
* 🛠️ `construct` ➔ `materials`
* 🛡️ `shield` ➔ `equipment`
* 🎁 `gift` ➔ `treasure`

**Endpoint base:**
```http
GET https://api.hyrule-compendium.com/v3/compendium/category/{categoria}
```

### 2. Paginación y Scroll Infinito (`ion-infinite-scroll`)
* **Carga inicial:** Al seleccionar una categoría se muestran únicamente los **primeros 20 elementos**.
* **Scroll Infinito:** Al desplazar hacia el final de la pantalla, se cargarán de forma progresiva **10 elementos adicionales** (o los restantes si quedan menos de 10) hasta completar la lista total de la categoría.

### 3. Acciones Deslizables (`ion-item-sliding`)
* Cada elemento de la lista debe implementarse con `ion-item-sliding`.
* Al desplazar el elemento hacia la **izquierda** (`ion-item-options side="end"`), aparecerá un botón de información (`ion-item-option`).
* Al pulsar sobre el botón de información, se mostrará un **Toast** centrada en pantalla (`position="middle"`) con la descripción del elemento durante **2 segundos** (`duration={2000}`).

---

## 🛠️ Tecnologías Utilizadas

* **Ionic Framework** (Angular / React / Vue)
* **HttpClient** para consumo de APIs REST.
* **Ionic Components:**
  * `ion-segment` / `ion-slides` (Categorías)
  * `ion-list`, `ion-item-sliding`, `ion-item-options`, `ion-item-option` (Lista interactiva)
  * `ion-infinite-scroll`, `ion-infinite-scroll-content` (Paginación al hacer scroll)
  * `ToastController` / `ion-toast` (Notificación contextual)

---

## 🚀 Instalación y Puesta en Marcha

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd hyrule-compendium-ionic
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   ionic serve
   ```

---

## 👨‍💻 Autor

Creado por **Francisco Belda**.

Aprende más sobre Ionic, desarrollo móvil y tecnologías web en su canal de YouTube:

👉 [Canal de YouTube de Francisco Belda](https://www.youtube.com/@franciscobelda)
