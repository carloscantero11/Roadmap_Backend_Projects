# 📌 Rastreador de Tareas

El Rastreador de tareas es un proyecto que te permite rastrear y gestionar tus tareas. En esta tarea, crearás una interfaz de línea de comandos (CLI) sencilla para rastrear tus tareas pendientes, las realizadas y las en las que estás trabajando actualmente. Este proyecto te ayudará a practicar tus habilidades de programación, incluyendo el manejo del sistema de archivos, la gestión de entradas de usuario y la creación de una aplicación CLI sencilla.

## ℹ️ Requisitos
La aplicación debe ejecutarse desde la línea de comandos, aceptar las acciones y entradas del usuario como argumentos y almacenar las tareas en un archivo JSON. El usuario debe poder:

- Agregar, actualizar y eliminar tareas
- Marcar una tarea como en progreso o terminada
- Enumerar todas las tareas
- Enumere todas las tareas que se realizan
- Enumere todas las tareas que no se han realizado
- Enumere todas las tareas que están en curso
- A continuación se presentan algunas restricciones para guiar la implementación:

Puedes utilizar cualquier lenguaje de programación para construir este proyecto.

- Utilice argumentos posicionales en la línea de comandos para aceptar entradas del usuario.
- Utilice un archivo JSON para almacenar las tareas en el directorio actual.
- Se debe crear el archivo JSON si no existe.
- Utilice el módulo del sistema de archivos nativo de su lenguaje de programación para interactuar con el archivo JSON.
- No utilice ninguna biblioteca o marco externo para crear este proyecto.
- Asegúrese de manejar los errores y casos extremos con elegancia.

### 🧠 Ejemplo:
La lista de comandos y su uso se muestra a continuación:

``` js
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress

```

### 📑 Propiedades de la tarea
Cada tarea debe tener las siguientes propiedades:

- **id:** Un identificador único para la tarea
- **description:** Una breve descripción de la tarea
- status:El estado de la tarea ( todo, in-progress, done)
- **createdAt:** La fecha y hora en que se creó la tarea
- **updatedAt:** La fecha y hora en que se actualizó la tarea por última vez

Asegúrese de agregar estas propiedades al archivo JSON al agregar una nueva tarea y actualizarlas al actualizar una tarea.

<br/>
<hr/>
<br/>

## 🧑‍💻 Empezando
A continuación se muestran algunos pasos que le ayudarán a comenzar con el proyecto CLI de Task Tracker:

### 🔸 Configurar su entorno de desarrollo
- Elija un lenguaje de programación con el que se sienta cómodo (por ejemplo, Python, JavaScript, etc.).
- Asegúrese de tener un editor de código o IDE instalado (por ejemplo, VSCode, PyCharm).

### 🔹 Inicialización del proyecto
- Cree un nuevo directorio de proyecto para su CLI de Task Tracker.
- Inicialice un sistema de control de versiones (por ejemplo, Git) para administrar su proyecto.

### 🔸 Implementación de funciones
- Comience por crear una estructura CLI básica para manejar las entradas del usuario.
- Implemente cada característica una por una, asegurándose de probarla exhaustivamente antes de pasar a la siguiente, por ejemplo, implementar primero la funcionalidad de agregar tareas, luego enumerar, luego actualizar, marcar como en progreso, etc.

### 🔹 Pruebas y depuración
- Pruebe cada función individualmente para garantizar su correcto funcionamiento. Revise el archivo JSON para verificar que las tareas se almacenen correctamente.
- Depurar cualquier problema que surja durante el desarrollo.

### 🔸 Finalización del proyecto
- Asegúrese de que todas las funciones estén implementadas y probadas.
- Limpia tu código y agrega comentarios donde sea necesario.
- Escriba un buen archivo Léame sobre cómo utilizar la CLI del Rastreador de tareas.

<br/>
<hr/>
<br/>

Al finalizar este proyecto, habrá desarrollado una herramienta práctica que le ayudará a usted y a otros a gestionar tareas eficientemente. Este proyecto sienta las bases para proyectos de programación más avanzados y aplicaciones prácticas.

🌟 **¡Feliz codificación!** 🌟