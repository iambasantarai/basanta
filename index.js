#!/usr/bin/env node

import boxen from "boxen";
import pc from "picocolors";

const bold = pc.bold;
const dimmy = pc.dim;
const blueish = pc.blue;
const cyanish = pc.cyan;
const greyish = pc.gray;
const greenish = pc.green;

const info = {
  name: "Basanta Rai",
  about: "Software Developer",
  github: "https://github.com/iambasantarai",
  web: "https://www.basantarai.com.np",
};

function colorize(json) {
  let colorized = `${bold("{")}\n`;
  for (const [key, value] of Object.entries(json)) {
    colorized += `  ${bold(blueish(`"${key}"`))}: ${greenish(JSON.stringify(value))},\n`;
  }
  colorized = colorized.trimEnd().replace(/,$/, "") + `\n${bold("}")}`;
  return colorized;
}

const content = `${greyish(new Date().toLocaleString())}\n${bold(dimmy("( ._.)"))}\n${bold(cyanish("basanta@void:~"))}${greenish("$")} cat info.json | jq\n${colorize(info)}`;

console.log(
  boxen(content, {
    padding: 0.75,
    borderStyle: "round",
    dimBorder: true,
    borderColor: "gray",
  }),
);
