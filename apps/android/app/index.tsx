import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/nativewindui/Text';
import { ThemeToggle } from '@/components/nativewindui/ThemeToggle';
import { useColorScheme } from '@/lib/useColorScheme';

export default function Index() {
  const { colors } = useColorScheme();

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="min-h-full px-5 py-14">
      <View className="gap-6 rounded-[28px] border border-border bg-card p-6 shadow-sm shadow-black/10">
        <View className="gap-3">
          <Text variant="caption1" className="tracking-[0.3em] text-muted-foreground uppercase">
            NativeWindUI
          </Text>
          <Text variant="largeTitle" className="font-semibold leading-[1.05]">
            Expo Router is now wired for utility-first native UI.
          </Text>
          <Text variant="body" color="tertiary">
            The app now has the NativeWind theme pipeline, typed helpers, and a starter screen that
            uses the custom Text and theme toggle primitives.
          </Text>
        </View>

        <View className="flex-row flex-wrap gap-3">
          <FeaturePill label="Theme-aware colors" />
          <FeaturePill label="NativeWind className" />
          <FeaturePill label="Expo Router ready" />
        </View>

        <View className="gap-4 rounded-2xl bg-background/60 p-4">
          <Text variant="heading">What is working</Text>
          <View className="gap-3">
            <FeatureRow title="Global CSS" description="Tailwind layers and design tokens are loaded from global.css." />
            <FeatureRow title="Navigation theme" description="React Navigation uses the NativeWind color palette." />
            <FeatureRow title="Typography" description="The starter screen uses the custom Text component instead of react-native Text." />
          </View>
        </View>

        <View className="flex-row items-center justify-between gap-4">
          <ThemeToggle />
          <Pressable className="rounded-full bg-primary px-4 py-3 active:opacity-80">
            <Text variant="callout" className="font-semibold text-primary-foreground">
              Built for {colors.background === 'rgb(0, 0, 0)' ? 'dark' : 'light'} mode
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

function FeaturePill({ label }: { label: string }) {
  return (
    <View className="rounded-full border border-border bg-background px-3 py-2">
      <Text variant="caption1" className="font-medium tracking-wide text-muted-foreground">
        {label}
      </Text>
    </View>
  );
}

function FeatureRow({ title, description }: { title: string; description: string }) {
  return (
    <View className="gap-1 border-l-2 border-primary/25 pl-3">
      <Text variant="subhead" className="font-semibold">
        {title}
      </Text>
      <Text variant="footnote" color="tertiary">
        {description}
      </Text>
    </View>
  );
}
