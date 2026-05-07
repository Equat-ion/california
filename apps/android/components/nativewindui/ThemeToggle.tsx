import { Pressable, View } from 'react-native';

import { Icon } from '@/components/nativewindui/Icon';
import { cn } from '@/lib/cn';
import { useColorScheme } from '@/lib/useColorScheme';
import { COLORS } from '@/theme/colors';

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Pressable onPress={toggleColorScheme} className="self-start rounded-full border border-border bg-card px-4 py-3 active:opacity-70">
      {({ pressed }) => (
        <View className={cn('flex-row items-center gap-2', pressed && 'opacity-60')}>
          <Icon name={colorScheme === 'dark' ? 'moon.stars' : 'sun.min'} color={colorScheme === 'dark' ? COLORS.white : COLORS.black} />
          <View>
            <View />
          </View>
        </View>
      )}
    </Pressable>
  );
}