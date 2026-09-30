import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const app = await readFile(new URL("../public/app.js", import.meta.url), "utf8");

assert.match(app, /ticket\.title/, "Issue 2: renderer must use ticket.title");
assert.doesNotMatch(app, /ticket\.name/, "Issue 2: ticket.name must be removed");
assert.match(app, /JSON\.stringify\(\{ title:/, "Issue 1: request must send title");
assert.doesNotMatch(app, /JSON\.stringify\(\{ problem:/, "Issue 1: problem key must be removed");
assert.match(
  app,
  /refreshButton\.addEventListener\("click", loadTickets\)/,
  "Issue 3: Refresh must call loadTickets",
);

console.log("Tinkora complete: all three guided repairs are present.");
