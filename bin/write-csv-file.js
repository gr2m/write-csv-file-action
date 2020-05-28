const core = require("@actions/core");

const run = require("..");

const columns = core
  .getInput("columns")
  .split(/,/)
  .map((name) => name.trim());
const data = columns.map((name) => {
  const value = core.getInput(name);

  if (!value) throw new Error(`inputs["${name}"] must be set`);

  return value;
});

run({
  path: core.getInput("path"),
  columns,
  data,
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
