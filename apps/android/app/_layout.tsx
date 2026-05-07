import '../global.css';

import 'expo-dev-client';

import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from '@/lib/useColorScheme';
import { NAV_THEME } from '@/theme';

export default function RootLayout() {
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <>
      <StatusBar key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`} style={isDarkColorScheme ? 'light' : 'dark'} />

      <NavThemeProvider value={NAV_THEME[colorScheme]}>
        <Stack screenOptions={{ headerShown: false }} />
      </NavThemeProvider>
    </>
  );
}
