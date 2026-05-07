import { SymbolView } from 'expo-symbols';

import type { IconProps } from './types';

import { useColorScheme } from '../../../lib/useColorScheme';

function Icon({
  materialCommunityIcon: _materialCommunityIcon,
  materialIcon: _materialIcon,
  sfSymbol,
  name,
  color,
  size = 24,
  ...props
}: IconProps) {
  const { colors } = useColorScheme();

  return (
    <SymbolView
      name={name ?? 'questionmark'}
      tintColor={rgbaToHex(color ?? colors.foreground)}
      size={size}
      resizeMode="scaleAspectFit"
      {...props}
      {...sfSymbol}
    />
  );
}

export { Icon };

function rgbaToHex(color: string): string {
  if (!color) return 'black';

  const rgbaRegex = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d*\.?\d+))?\s*\)$/i;
  const match = color.match(rgbaRegex);

  if (!match) {
    return color;
  }

  const r = Math.min(255, parseInt(match[1], 10));
  const g = Math.min(255, parseInt(match[2], 10));
  const b = Math.min(255, parseInt(match[3], 10));
  const a = match[4] !== undefined ? Math.round(parseFloat(match[4]) * 255) : 255;

  const toHex = (value: number) => value.toString(16).padStart(2, '0');

  return `#${toHex(r)}${toHex(g)}${toHex(b)}${a < 255 ? toHex(a) : ''}`;
}