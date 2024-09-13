const groups = [
  {
    title: "Pastel Pink to Deep Rose",
    colors: [
      { h: 350, s: 70, l: 90, a: 1 },
      { h: 350, s: 70, l: 85, a: 1 },
      { h: 350, s: 70, l: 80, a: 1 },
      { h: 350, s: 70, l: 75, a: 1 },
      { h: 350, s: 70, l: 70, a: 1 },
      { h: 350, s: 70, l: 65, a: 1 },
      { h: 350, s: 70, l: 60, a: 1 },
      { h: 350, s: 70, l: 55, a: 1 },
      { h: 350, s: 70, l: 50, a: 1 },
      { h: 350, s: 70, l: 45, a: 1 },
    ],
  },
  {
    title: "Sky Blue to Navy",
    colors: [
      { h: 200, s: 70, l: 90, a: 1 },
      { h: 200, s: 70, l: 85, a: 1 },
      { h: 200, s: 70, l: 80, a: 1 },
      { h: 200, s: 70, l: 75, a: 1 },
      { h: 200, s: 70, l: 70, a: 1 },
      { h: 200, s: 70, l: 65, a: 1 },
      { h: 200, s: 70, l: 60, a: 1 },
      { h: 200, s: 70, l: 55, a: 1 },
      { h: 200, s: 70, l: 50, a: 1 },
      { h: 200, s: 70, l: 45, a: 1 },
    ],
  },
  {
    title: "Mint Green to Forest Green",
    colors: [
      { h: 150, s: 50, l: 90, a: 1 },
      { h: 150, s: 50, l: 85, a: 1 },
      { h: 150, s: 50, l: 80, a: 1 },
      { h: 150, s: 50, l: 75, a: 1 },
      { h: 150, s: 50, l: 70, a: 1 },
      { h: 150, s: 50, l: 65, a: 1 },
      { h: 150, s: 50, l: 60, a: 1 },
      { h: 150, s: 50, l: 55, a: 1 },
      { h: 150, s: 50, l: 50, a: 1 },
      { h: 150, s: 50, l: 45, a: 1 },
    ],
  },
  {
    title: "Sunset Orange to Brick Red",
    colors: [
      { h: 20, s: 80, l: 90, a: 1 },
      { h: 20, s: 80, l: 85, a: 1 },
      { h: 20, s: 80, l: 80, a: 1 },
      { h: 20, s: 80, l: 75, a: 1 },
      { h: 20, s: 80, l: 70, a: 1 },
      { h: 20, s: 80, l: 65, a: 1 },
      { h: 20, s: 80, l: 60, a: 1 },
      { h: 20, s: 80, l: 55, a: 1 },
      { h: 20, s: 80, l: 50, a: 1 },
      { h: 20, s: 80, l: 45, a: 1 },
    ],
  },
];

window.onload = () => {
  const htmlContent = groups.map((group) => {
    const blocks = group.colors.map((color) => {
      const hslaValue = `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`;
      return `<p class="color-block" style="background-color: ${hslaValue}" onclick="copyColor('${hslaValue}')"></p>`;
    }).join('');
    return blocks;
  }).join('');
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
