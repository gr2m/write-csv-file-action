module.exports = run;

const { dirname } = require("path");
const { existsSync, appendFileSync } = require("fs");

const { stringify } = require("csv-string");
const makeDir = require("make-dir");

async function run({ path, columns, data }) {
  const rows = [];

  if (!existsSync(path)) {
    rows.push(stringify(columns));
  }

  rows.push(stringify(data));

  await makeDir(dirname(path));
  appendFileSync(path, rows.join(""));
}
