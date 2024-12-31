#!/usr/bin/env node

import boxen from "boxen";
import pc from "picocolors";

const bold = pc.bold;
const dimmy = pc.dim;
const blueish = pc.blue;
const cyanish = pc.cyan;
const greyish = pc.gray;
const greenish = pc.green;

const content = `${greyish(new Date().toLocaleString())}\n${bold(dimmy("( ._.)"))}\n${bold(cyanish("basanta@void:~"))}${greenish("$")} cat info.json | jq\n${bold("{")}\n  ${bold(blueish('"name"'))}: ${greenish('"Basanta Rai"')},\n  ${bold(blueish('"about"'))}: ${greenish('"Software Developer"')},\n  ${bold(blueish('"github"'))}: ${greenish('"https://github.com/iambasantarai"')},\n  ${bold(blueish('"web"'))}: ${greenish('"https://www.basantarai.com.np"')}\n${bold("}")}`;

console.log(
  boxen(content, {
    padding: 1,
    borderStyle: "round",
    dimBorder: true,
    borderColor: "gray",
  }),
);
