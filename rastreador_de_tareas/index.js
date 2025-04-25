#!/usr/bin/env node;
"use strict";

const { table } = require("console");
const fs = require("fs");
const path = require("path");

// Ruta de mi archivo dataTask.json
const datapath = path.join(__dirname, "dataTask.json");

//----------------------------------------------------------------------------\\

// Cargar Tareas
function cargarTareas() {
  if (!fs.existsSync(datapath)) {
    return [];
  }
  const data = fs.readFileSync(datapath, "utf-8");
  return JSON.parse(data);
}

// Guardar Tareas
function guardarTareas(tareas) {
  fs.writeFileSync(datapath, JSON.stringify(tareas, null, 2));
}

// Crear una nueva tarea
function crearTareas(description) {
  const now = new Date();
  const cargar = cargarTareas();

  const id_ = Math.max(...cargar.map((t) => t.id), 0) + 1;

  const tarea = {
    id: id_,
    description,
    status: "todo", // El estado inicial.
    createdAt: now,
    updatedAt: now,
  };

  cargar.push(tarea);
  guardarTareas(cargar);
  console.log(`\n✅ La tarea fue guardada exitosamente.  ID: (${tarea.id})\n`);
}

// Actualizar Tareas
function actualizarTareas(id, nuevaDescripcion) {
  const cargar = cargarTareas();
  const index = cargar.findIndex((t) => t.id === Number(id));

  if (index === -1) {
    console.log(`No se encontro ninguna tarea con el id: ${id} \n`);
    return;
  }

  cargar[index].description = nuevaDescripcion;
  cargar[index].updatedAt = new Date();

  guardarTareas(cargar);
  console.log(`✅ Tarea ID (${id}) actualizada correctamente.\n`);
}

// Eliminar Tareas
function eliminarTareas(id) {
  const cargar = cargarTareas();
  const tarea = cargar.filter((t) => t.id !== Number(id));

  if (cargar.length === tarea.length) {
    console.log(`❌ No se encontre ninguna tarea con el ID: ${id}\n`);
    return;
  }

  guardarTareas(tarea);
  console.log(`Tarea ID: ${id} eliminada correctamente. 🗑️\n`);
}

// Marcar tarea como en progreso
function marcarEnProgreso(id) {
  const tareas = cargarTareas();
  const index = tareas.findIndex((t) => t.id === Number(id));

  if (index === -1) {
    console.log(`❌ No se encontró ninguna tarea con el ID: ${id}\n`);
    return;
  }

  tareas[index].status = "in-progress";
  tareas[index].updatedAt = new Date();
  guardarTareas(tareas);
  console.log(`🔄 Tarea ID (${id}) marcada como "in-progress".\n`);
}

// Marcar tarea como terminada
function marcarComoHecha(id) {
  const tareas = cargarTareas();
  const index = tareas.findIndex((t) => t.id === Number(id));

  if (index === -1) {
    console.log(`❌ No se encontró ninguna tarea con el ID: ${id}\n`);
    return;
  }

  tareas[index].status = "done";
  tareas[index].updatedAt = new Date();
  guardarTareas(tareas);
  console.log(`✅ Tarea ID (${id}) marcada como "done".\n`);
}

// Listar tareas
function listarTareas(filtro = null) {
  const tareas = cargarTareas();
  let filtradas = tareas;

  if (filtro) {
    filtradas = tareas.filter((t) => t.status === filtro);
  }

  if (filtradas.length === 0) {
    console.log("📭 No hay tareas para mostrar.\n");
    return;
  }

  const formato = filtradas.map((t) => ({
    ID: t.id,
    Descripción: t.description,
    Estado: t.status,
    Creada: new Date(t.createdAt).toLocaleString(),
    Actualizada: new Date(t.updatedAt).toLocaleString(),
  }));

  console.log("\n📋 Lista de tareas:\n");
  table(formato);
}

function ayudaConsola() {
  console.log("\nComandos del gestor de taras:\n  ");
  console.log(`(1) task-cli add "Descripción de la tarea"       ===>     Añadir tarea
(2) task-cli update (id) "Nueva descripción"     ===>     Actualizar tarea
(3) task-cli delete (id)                         ===>     Eliminar tarea
(4) task-cli mark-in-progress (id)               ===>     Marcar tarea como en progreso
(5) task-cli mark-done (id)                      ===>     Marcar tarea como terminada
(6) task-cli list                                ===>     Listar todas las tareas
(7) task-cli list todo                           ===>     Listar tareas por hacer
(8) task-cli list in-progress                    ===>     Listar tareas en progreso
(9) task-cli list done                           ===>     Listar tareas terminadas
`);
}

// Función principal
function main() {
  // Leer los argumentos de la terminal
  const args = process.argv.slice(2);
  const comando = args[0];
  const input = args[1];
  console.log("task-cli help    ===>     Mostrar comandos.\n");

  if (comando === "help") {
    ayudaConsola();
  }

  // Manejo de los comandos
  if (comando === "add") {
    if (!input) {
      console.log("❌ No hay descripción de la tarea.\n");
      process.exit(1);
    }
    crearTareas(input);
  }

  if (comando === "update") {
    const id = args[1];
    const nuevaDescripcion = args.slice(2).join(" ");

    if (!id || !nuevaDescripcion) {
      console.log(
        "❌ Debes indicar el ID y la nueva descripción en el comando\n"
      );
      process.exit(1);
    }
    actualizarTareas(id, nuevaDescripcion);
  }

  if (comando === "delete") {
    const id = args[1];

    if (!id) {
      console.log("❌ Debes indicar el ID de la tarea a eliminar\n");
      process.exit(1);
    }
    eliminarTareas(id);
  }

  if (comando === "mark-in-progress") {
    const id = args[1];
    if (!id) {
      console.log("❌ Debes indicar el ID de la tarea a marcar en progreso.\n");
      process.exit(1);
    }
    marcarEnProgreso(id);
  }

  if (comando === "mark-done") {
    const id = args[1];
    if (!id) {
      console.log(
        "❌ Debes indicar el ID de la tarea a marcar como terminada.\n"
      );
      process.exit(1);
    }
    marcarComoHecha(id);
  }

  if (comando === "list") {
    // 'todo', 'in-progress', 'done'
    const filtro = args[1]; // 'todo', 'in-progress', 'done'
    listarTareas(filtro);
  }
}

main();
