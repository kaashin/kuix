const { defaults } = require("autoprefixer");


function hexToTailwind(H) {
  let r = 0, g = 0, b = 0, a = 1;

  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }

  // Normal conversion to HSL
  r /= 255;
  g /= 255;
  b /= 255;

  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  const divisions = 9;
  let lRanges = [];

  for (let i = 0; i<divisions; i++) {
    if (i < Math.floor(divisions/2)) {
      lRanges.push(l/(divisions/2) * (i+1));
    } else if (i == Math.floor(divisions/2)) {
      lRanges.push(l);
    } else {
      const increment = (90 - l)/(Math.floor(divisions/2));
      lRanges.push(l + increment*(i-Math.floor(divisions/2)));
    }
  }

  lRanges = lRanges.reverse();

  const tailwindColorRange = lRanges.reduce((acc, cur, index)=>{    
    const newObj = acc[`${(index+1)*100}`] = `hsl(${h}, ${s}%, ${Math.round(cur)}%)`;
    return acc;
  }, {})

  return tailwindColorRange;
}

function getKuixProperties(config) {
  const defaults = { 
    colors: {
      primary: '#00bdd6'
    }
  }

  return {
    colors: {
      primary: config.colors?.primary ? hexToTailwind(config.colors.primary) : hexToTailwind(defaults.colors.primary)
    }
  }
}

module.exports = {
  getKuixProperties
}
