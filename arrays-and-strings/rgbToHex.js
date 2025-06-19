function rgb2hex(r, g, b) {
    const toHex = (n) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

console.log(rgb2hex(105, 55, 203));
// "#6937cb"
