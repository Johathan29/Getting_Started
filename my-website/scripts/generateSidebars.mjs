import fs from 'fs';
import path from 'path';

/**
 * Genera un objeto sidebar recursivo a partir de la estructura de carpetas
 */
function generateSidebar(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const items = entries
    .filter((entry) => !entry.name.startsWith('_'))
    .map((entry) => {
      const fullPath = path.join(dir, entry.name);
      const relativePath = fullPath.replace(`${process.cwd()}/docs/`, '').replace(/\\/g, '/');

      if (entry.isDirectory()) {
        return {
          type: 'category',
          label: entry.name.charAt(0).toUpperCase() + entry.name.slice(1),
          items: generateSidebar(fullPath),
        };
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        return relativePath.replace(/\.md$/, '');
      }
    })
    .filter(Boolean);

  return items;
}

/**
 * Genera y escribe sidebars para frontend y backend
 */
function writeSidebar(name) {
  const docsPath = path.resolve(`./docs/${name}`);
  const sidebar = { docs: generateSidebar(docsPath) };
  const outputPath = `./sidebars${name.charAt(0).toUpperCase() + name.slice(1)}.js`;

  fs.writeFileSync(
    outputPath,
    `// AUTO-GENERADO - no editar manualmente\nexport default ${JSON.stringify(sidebar, null, 2)};\n`
  );

  console.log(`✅ Sidebar generado: ${outputPath}`);
}

['frontend', 'backend'].forEach(writeSidebar);
