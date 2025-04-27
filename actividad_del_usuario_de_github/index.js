#!/usr/bin/env node
"use strict";

// Importamos el módulo HTTPS
const https = require("https");

// Función para obtener la actividad reciente de un usuario de GitHub
function fetchGithubActivity(username) {
  const url = `https://api.github.com/users/${username}/events`;

  const options = {
    headers: {
      "User-Agent": "node.js",
      Accept: "application/vnd.github.v3+json",
    },
  };


  // Hacemos una petición HTTPS a la API de GitHub
  https
    .get(url, options, (res) => {
      let data = "";

      // Recibimos los datos en fragmentos
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        if (res.statusCode === 200) {
          try {
            const events = JSON.parse(data);
            displayActivity(events);
          } catch (error) {
            console.log("Error al analizar la respuesta:", error.message);
          }
        } else if (res.statusCode === 404) {
          console.log("Usuario no encontrado");
        } else {
          console.error(`Error al obtener datos: Código ${res.statusCode}`);
        }
      });
    })
    .on("error", (err) => {
      console.error("Error de conexión:", err.message);
    });
}


// Función para mostrar la actividad del usuario en la terminal
function displayActivity(events) {
  if (events.length === 0) {
    console.log("No hay actividad reciente.");
    return;
  }

  // Iteramos sobre cada evento y mostramos un mensaje personalizado
  events.forEach((event) => {
    switch (event.type) {
      case "PushEvent":
        console.log(`Pushed commits to ${event.repo.name}`);
        break;
      case "IssuesEvent":
        console.log(`Opened an issue in ${event.repo.name}`);
        break;
      case "WatchEvent":
        console.log(`Starred ${event.repo.name}`);
        break;
      default:
        console.log(`Did ${event.type} in ${event.repo.name}`);
    }
  });
}


// Función principal
function main() {
  const args = process.argv.slice(2);
  const username = args[0];

  // Validación por si no se pasa el nombre de usuario
  if (!username) {
    console.log("Escribir: github-activity <username>");
    process.exit(1);
  }

  fetchGithubActivity(username);
}


// Ejecutamos la función principal
main();
