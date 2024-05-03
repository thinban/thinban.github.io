const fs = require('fs');
const path = require('path');

function generateMarkdownTree(dir, base) {
    const files = fs.readdirSync(dir);
    const tree = files.map(file => {
        const filePath = path.join(dir, file);
        const relativePath = path.relative(base, filePath);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            return {
                text: file,
                items: generateMarkdownTree(filePath, base)
            };
        } else if (path.extname(file) === '.md') {
            return {
                text: file.replace('.md', ''),
                link: relativePath.replace('.md', '')
            };
        }
    }).filter(e => e && e.text && !['.vitepress', 'node_modules'].includes(e.text)); // 过滤掉空项
    return tree;
}

function buildJson(dir) {
    let tree = generateMarkdownTree(dir, dir);
    // return JSON.stringify({
    //     text: path.basename(dir),
    //     items: tree
    // }, null, 2);
    return JSON.stringify(tree, null, 2);
}

const directoryPath = './posts';
const jsonOutput = buildJson(directoryPath);
console.log(jsonOutput);
// fs.writeFileSync('output.json', jsonOutput);
