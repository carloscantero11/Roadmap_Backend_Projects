# 📌 Actividad del usuario de GitHub

En este proyecto, crearás una interfaz de línea de comandos (CLI) sencilla para obtener la actividad reciente de un usuario de GitHub y mostrarla en la terminal. Este proyecto te ayudará a practicar tus habilidades de programación, incluyendo el trabajo con API, el manejo de datos JSON y la creación de una aplicación CLI sencilla.

## ℹ️ Requisitos
La aplicación debe ejecutarse desde la línea de comandos, aceptar el nombre de usuario de GitHub como argumento, obtener la actividad reciente del usuario mediante la API de GitHub y mostrarla en la terminal. El usuario debe poder:

- Proporcione el nombre de usuario de GitHub como argumento al ejecutar la CLI.

  ```bash
  github-activity <username>
  ```
- Obtenga la actividad reciente del usuario de GitHub especificado mediante la API de GitHub. Puede usar el siguiente punto de conexión para obtener la actividad del usuario:

  ```bash
  # https://api.github.com/users/<username>/events
  # Example: https://api.github.com/users/kamranahmedse/events
  ```
- Muestra la actividad obtenida en la terminal.

  ```bash
  Output:
  - Pushed 3 commits to kamranahmedse/developer-roadmap
  - Opened a new issue in kamranahmedse/developer-roadmap
  - Starred kamranahmedse/developer-roadmap
  - ...
  ```
Puede obtener más información sobre la API de GitHub aquí .

- Maneje errores con elegancia, como nombres de usuario no válidos o fallas de API.
- Utilice un lenguaje de programación de su elección para construir este proyecto.
- No utilice ninguna biblioteca o marco externo para obtener la actividad de GitHub.

<br/>
<hr/>
<br/>

Si buscas crear una versión más avanzada de este proyecto, puedes considerar añadir funciones como filtrar la actividad por tipo de evento, mostrarla en un formato más estructurado o almacenar en caché los datos obtenidos para mejorar el rendimiento. También puedes explorar otros puntos finales de la API de GitHub para obtener información adicional sobre el usuario o sus repositorios. 🌟