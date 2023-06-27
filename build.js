const fs = require("fs/promises");
const path = require("path");

(async function () {
  const dirents = await fs.readdir(__dirname, { withFileTypes: true });
  const files = dirents
    .filter(
      (dirent) =>
        dirent.isFile() &&
        path.extname(dirent.name) === ".json" &&
        dirent.name !== "package.json" &&
        dirent.name !== "index.json" &&
        dirent.name !== "vercel.json"
    )
    .map((dirent) =>
      dirent.name.substring(
        0,
        dirent.name.length - path.extname(dirent.name).length
      )
    );

  await fs.writeFile('index.json', JSON.stringify(files));
})();
