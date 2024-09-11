const esbuild = require("exbuild");

esbuild.build({
  entryPoints: ["src/init.js"],
  outfile: "dist/index.js",
  bundle: true,
  platform: "node",
});
