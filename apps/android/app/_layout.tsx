import '../global.css';

import 'expo-dev-client';

import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

import { useColorScheme } from '@/lib/useColorScheme';
import { NAV_THEME } from '@/theme';
import { COLORS } from '@/theme/colors';

function createPaperTheme(isDarkColorScheme: boolean) {
  const baseTheme = isDarkColorScheme ? MD3DarkTheme : MD3LightTheme;
  const colors = isDarkColorScheme ? COLORS.dark : COLORS.light;

  return {
    ...baseTheme,
    roundness: 28,
    colors: {
      ...baseTheme.colors,
      primary: colors.primary,
      secondary: colors.secondary,
      tertiary: colors.accent,
      background: colors.background,
      surface: colors.card,
      surfaceVariant: colors.grey5,
      surfaceDisabled: colors.grey4,
      onSurface: colors.foreground,
      onSurfaceVariant: colors.grey,
      outline: colors.grey5,
      outlineVariant: colors.grey4,
      error: colors.destructive,
      onError: COLORS.white,
      errorContainer: colors.destructive,
      onErrorContainer: COLORS.white,
      primaryContainer: colors.secondary,
      onPrimaryContainer: colors.secondaryForeground,
      secondaryContainer: colors.secondary,
      onSecondaryContainer: colors.secondaryForeground,
      tertiaryContainer: colors.accent,
      onTertiaryContainer: colors.accentForeground,
      inversePrimary: colors.primary,
      inverseSurface: colors.card,
      inverseOnSurface: colors.foreground,
      surfaceTint: colors.primary,
      backdrop: isDarkColorScheme ? 'rgba(0, 0, 0, 0.55)' : 'rgba(0, 0, 0, 0.32)',
    },
  };
}

export default function RootLayout() {
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const resolvedColorScheme = colorScheme ?? 'light';
  const paperTheme = createPaperTheme(isDarkColorScheme);

  return (
    <>
      <StatusBar key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`} style={isDarkColorScheme ? 'light' : 'dark'} />

      <PaperProvider theme={paperTheme}>
        <NavThemeProvider value={NAV_THEME[resolvedColorScheme]}>
          <Stack screenOptions={{ headerShown: false }} />
        </NavThemeProvider>
      </PaperProvider>
    </>
  );
}
