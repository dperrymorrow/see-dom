const tmp = require("tmp");
const fs = require("fs")
const open = require("open")
const path = require("path")

module.exports = function ( options = {} ) {
  let parsed = { css: [], ...options };
  let styles = "";

  parsed.css = Array.isArray(parsed.css) ? parsed.css : [parsed.css];

  parsed.css.forEach(css => {
    const src = path.resolve(process.cwd() + parsed.css);
    styles += fs.readFileSync(src);
  });

  return  {
    view(title="untitled") {
      const name = tmp.tmpNameSync() + ".html";

      const head = /*html*/ `
        <head>
          <title>${title}</title>
          <style>${styles}</style>
        </head>
      `;

      fs.writeFileSync(name, `${head}\n${document.body.outerHTML}`);
      open("file://" + name);
    }
  }
}
