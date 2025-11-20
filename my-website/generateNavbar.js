import fs from "fs";
import path from "path";

function getSubfolders(dir) {
  // Devuelve todas las subcarpetas dentro del directorio
  return fs
    .readdirSync(dir)
    .filter((name) =>
      fs.lstatSync(path.join(dir, name)).isDirectory()
    );
}

/**
 * Genera dinámicamente los children del navbar para frontend y backend.
 */
export function generateNavbarItems() {
  const sections = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "systems", label: "Systems" },
  ];

  return sections.map(({ id, label }) => {
    const dirPath = path.join(process.cwd(), "docs", id);
    const folders = getSubfolders(dirPath);

    const children = folders.map((folder) => ({
      label: folder.charAt(0).toUpperCase() + folder.slice(1),
      to: `/${id}/${folder}/intro`, // cada carpeta tiene su intro.md
    }));

    // Agregamos un "inicio" general
    children.unshift({
      label: "Introducción",
      to: `/${id}/intro`,
    });

    return {
      label,
      position: "left",
      items: children,
    };
  });
}
