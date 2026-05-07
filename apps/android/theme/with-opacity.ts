export function withOpacity(color: string, opacity: number): string {
  if (opacity < 0 || opacity > 1) {
    throw new Error('Opacity should be between 0 and 1.');
  }

  if (isNamedColor(color)) {
    return withOpacityNamedColor(color, opacity);
  } else if (color.startsWith('#')) {
    return withOpacityHex(color, opacity);
  } else if (color.startsWith('rgba')) {
    return withOpacityRgba(color, opacity);
  } else if (color.startsWith('rgb')) {
    return withOpacityRgb(color, opacity);
  } else if (color.startsWith('hsla')) {
    return withOpacityHsla(color, opacity);
  } else if (color.startsWith('hsl')) {
    return withOpacityHsl(color, opacity);
  }

  throw new Error('Unsupported color format');
}

function withOpacityHex(hex: string, opacity: number): string {
  const hexCode = hex.replace('#', '');
  const expandedHex =
    hexCode.length === 3
      ? hexCode
          .split('')
          .map((value) => value + value)
          .join('')
      : hexCode;

  const r = parseInt(expandedHex.slice(0, 2), 16);
  const g = parseInt(expandedHex.slice(2, 4), 16);
  const b = parseInt(expandedHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function withOpacityRgb(rgb: string, opacity: number): string {
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) {
    throw new Error('Invalid RGB color format');
  }

  return `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${opacity})`;
}

function withOpacityRgba(rgba: string, opacity: number): string {
  const match = rgba.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-1]?(?:\.\d+)?)\)$/);
  if (!match) {
    throw new Error('Invalid RGBA color format');
  }

  return `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${opacity})`;
}

function withOpacityHsl(hsl: string, opacity: number): string {
  const match = hsl.match(/^hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%,\s*(\d+(?:\.\d+)?)%\)$/);
  if (!match) {
    throw new Error('Invalid HSL color format');
  }

  return `hsla(${match[1]}, ${match[2]}%, ${match[3]}%, ${opacity})`;
}

function withOpacityHsla(hsla: string, opacity: number): string {
  const match = hsla.match(/^hsla\((\d+),\s*(\d+)%?,\s*(\d+)%?,\s*([0-1]?(?:\.\d+)?)\)$/);
  if (!match) {
    throw new Error('Invalid HSLA color format');
  }

  return `hsla(${match[1]}, ${match[2]}%, ${match[3]}%, ${opacity})`;
}

function isNamedColor(color: string): boolean {
  const namedColors = new Set([
    'red',
    'green',
    'blue',
    'yellow',
    'black',
    'white',
    'gray',
    'orange',
    'purple',
    'brown',
    'pink',
    'cyan',
    'magenta',
    'lime',
    'teal',
    'indigo',
    'violet',
    'gold',
    'silver',
  ]);

  return namedColors.has(color.toLowerCase());
}

function withOpacityNamedColor(color: string, opacity: number): string {
  return `rgba(${namedColorToRgb(color)}, ${opacity})`;
}

function namedColorToRgb(color: string): string {
  const colors: Record<string, string> = {
    red: '255, 0, 0',
    green: '0, 255, 0',
    blue: '0, 0, 255',
    yellow: '255, 255, 0',
    black: '0, 0, 0',
    white: '255, 255, 255',
    gray: '128, 128, 128',
    orange: '255, 165, 0',
    purple: '128, 0, 128',
    brown: '165, 42, 42',
    pink: '255, 192, 203',
    cyan: '0, 255, 255',
    magenta: '255, 0, 255',
    lime: '0, 255, 0',
    teal: '0, 128, 128',
    indigo: '75, 0, 130',
    violet: '238, 130, 238',
    gold: '255, 215, 0',
    silver: '192, 192, 192',
  };

  return colors[color.toLowerCase()] || '0, 0, 0';
}