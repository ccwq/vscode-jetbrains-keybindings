import fs from "fs"

const pkg = JSON.parse(fs.readFileSync("package.json"))

let bingdings = `|  <div style="width:60px">Key</div>  | Action/When  | Description |\n`
bingdings+="| ---- | ------- | ------- | \n"
    
bingdings += pkg.contributes.keybindings.map(rule => {
    let shortcut = `${rule.key}`;
    shortcut = shortcut.replace(/ /g, "&nbsp;&nbsp;&nbsp;");
    shortcut = shortcut.replace(/`/g, "\\`")
    shortcut = shortcut.replace(/ctrl/g, `<span style=color:#74ebd6>ctrl</span>`)
    shortcut = shortcut.replace(/shift/g, `<span style=color:#8ccbde>shift</span>`)
    shortcut = shortcut.replace(/alt/g, `<span style=color:#9fade5>alt</span>`)
    shortcut = shortcut.replace(/\+/g, `<span style="color:#ff989c;padding:0 0.125em">+</span>`)
    let condi = ""
    if (rule.when) { 
        condi = 
        `<br/><span style="color:#8cccdd;padding-right:0.25em;">when:</span><span style="color:#ff989c">${rule.when || "-"}</span>`;
    }
    return `|${shortcut}|${rule.command}${condi}|${rule.jetbrains}|`
}).join("\n")

let mdString = fs.readFileSync("README.md", "utf8")
mdString = mdString.replace(
    /(<!-- generate-start-->\n)[\s\S]+(\n<!-- generate-end -->)/,
    `$1${bingdings}$2`
);

fs.writeFileSync("README.md", mdString)
