function generateMorandiPalette() {
  const tones = 12; // 色调数
  const steps = 10; // 每个色调的颜色数
  const hueStep = 360 / tones; // 每个色调的色相间隔

  const groups = [];

  for (let i = 0; i < tones; i++) {
    const hue = Math.round(i * hueStep);
    const colors = [];
    
    for (let j = 0; j < steps; j++) {
      const saturation = Math.round(30 + (40 * (steps - j - 1) / (steps - 1))); 
      const lightness = Math.round(90 - (j * 50 / (steps - 1))); 
      colors.push({
        h: hue,
        s: saturation,
        l: lightness,
        a: 1
      });
    }
    
    groups.push({
      title: `Tone ${i + 1}`,
      colors: colors
    });
  }

  return groups;
}
window.onload = () => {
  const groups = generateMorandiPalette();
  const htmlContent = groups
    .map((group) => {
      const blocks = group.colors
        .map((color) => {
          const hslaValue = `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`;
          return `<p class="color-block" style="background-color: ${hslaValue}" onclick="copyColor('${hslaValue}')"></p>`;
        })
        .join("");
      return blocks;
    })
    .join("");
  document.getElementById("colors").innerHTML = htmlContent;
};

function copyColor(color) {
  const tempInput = document.createElement("input");
  tempInput.value = color;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert(`Color ${color} copied to clipboard!`);
}
