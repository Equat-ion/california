import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View, useWindowDimensions } from 'react-native';
import { Avatar, Card, IconButton, Surface, TextInput } from 'react-native-paper';

import { Text } from '@/components/nativewindui/Text';
import { useColorScheme } from '@/lib/useColorScheme';
import { addDays, format, isSameDay, startOfWeek } from 'date-fns';

export default function Index() {
  const { colorScheme } = useColorScheme();
  const { width } = useWindowDimensions();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekDays = useMemo(() => {
    const start = startOfWeek(new Date(), { weekStartsOn: 0 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, []);

  const isTablet = width > 600;

  return (
    <View className="flex-1 bg-background">
      <View pointerEvents="none" className="absolute inset-0">
        <View 
          className="absolute -top-20 right-[-44px] rounded-full bg-primary/10" 
          style={{ height: width * 0.4, width: width * 0.4 }} 
        />
        <View 
          className="absolute top-28 left-[-72px] rounded-full bg-secondary/10" 
          style={{ height: width * 0.3, width: width * 0.3 }} 
        />
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 144 }} showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-4">
          <View className="flex-row items-center justify-between">
            <IconButton icon="menu" size={24} iconColor="var(--android-foreground)" className="text-foreground" style={{ margin: 0 }} />
            <Text variant="largeTitle" className="font-semibold tracking-[-0.02em] text-foreground">
              Today
            </Text>
            <IconButton icon="calendar-month" size={24} iconColor="var(--android-foreground)" className="text-foreground" style={{ margin: 0 }} />
          </View>

          <View className="mt-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingRight: 20 }}>
              {weekDays.map((date) => (
                <DayPill 
                  key={date.toISOString()}
                  label={format(date, 'EEE')} 
                  day={format(date, 'd')} 
                  active={isSameDay(selectedDate, date)}
                  onPress={() => setSelectedDate(date)}
                />
              ))}
            </ScrollView>
          </View>

          <View className={`mt-6 ${isTablet ? 'flex-row gap-3' : 'flex-col gap-4'}`}>
            <Card className="flex-1 bg-card rounded-3xl">
              <Card.Content className="gap-[18px] p-5">
                <View className="flex-row items-center gap-3">
                  <View className="h-11 w-11 items-center justify-center rounded-full bg-secondary/10">
                    <MaterialCommunityIcons name="fire" size={20} className="text-secondary" />
                  </View>
                  <Text variant="title2" className="font-semibold text-foreground">
                    Calories
                  </Text>
                </View>

                <View className="flex-row items-end justify-between gap-3">
                  <MetricBlock value="550" label="Food" align="start" />
                  <MetricBlock value="0" label="Exercise" align="center" />
                  <MetricBlock value="1050" label="Remaining" accent align="end" />
                </View>
              </Card.Content>
            </Card>

            <Card className="flex-1 bg-card rounded-3xl">
              <Card.Content className="gap-[18px] p-5">
                <View className="flex-row items-center gap-3">
                  <View className="h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                    <MaterialCommunityIcons name="chart-pie" size={20} className="text-primary" />
                  </View>
                  <Text variant="title2" className="font-semibold text-foreground">
                    Macros
                  </Text>
                </View>

                <View className="flex-row items-end justify-between gap-3">
                  <MacroBlock value="45" total="140" label="Carbs (g)" align="start" />
                  <MacroBlock value="35" total="140" label="Protein (g)" align="center" />
                  <MacroBlock value="25" total="54" label="Fat (g)" align="end" />
                </View>
              </Card.Content>
            </Card>
          </View>

          <View className="mt-6 gap-4">
            <Card className="bg-card rounded-[32px]">
              <Card.Content className="gap-4 p-5">
                <View className="flex-row items-center gap-3">
                  <Avatar.Text size={40} label="U" className="bg-primary/10" labelStyle={{ color: 'var(--android-primary)' }} />
                  <Text variant="title2" className="font-semibold text-foreground">
                    You
                  </Text>
                </View>

                <View className="overflow-hidden rounded-[24px] h-[210px]">
                  <Image
                    source={{
                      uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvynffI4sa3vDgg8qgrre2Y7Q5zfIL1T0CObnzTlDCRtSFn_Yv-q1mgWjWFttYpOy-3At8N0LeSxUfgiN5vcJr55a5LywuzyxeWfiRWNlds453alzeXjHJgWvxikfOCjC1BG9r4_SqLX1jXztMUbG-5m79iHz9CFUGPjXxlXPrWu-O9B95yLasWFrRidu7arc2qrABZmfOjT29enflrudjU_q4zHKnr67ZuZnq-8yQfHvyNFZFoZ3bFLwjHAcXyFtdNocADWNod9g',
                    }}
                    className="w-full h-full"
                    contentFit="cover"
                  />
                </View>

                <Text variant="body" className="text-foreground leading-6">
                  Grilled salmon (100g), edamame (50g), mango (50g), shredded carrots (30g), seaweed salad (30g), mixed greens (50g), red cabbage (30g), cashews (20g), sesame seeds (5g), lemon wedge (1 piece)
                </Text>

                <View className="flex-row items-center justify-end gap-2">
                  <ActionLabel icon="pencil" label="Edit" />
                  <ActionLabel icon="delete" label="Delete" destructive />
                  <Text variant="caption1" className="text-muted-foreground">
                    6:58 PM
                  </Text>
                </View>
              </Card.Content>
            </Card>

            <Card className="bg-card rounded-3xl">
              <Card.Content className="gap-[18px] p-5">
                <View className="flex-row items-center gap-3">
                  <View className="h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                    <MaterialCommunityIcons name="clipboard-text-outline" size={20} className="text-primary" />
                  </View>
                  <Text variant="title2" className="font-semibold text-foreground">
                    Journable
                  </Text>
                </View>

                <View className="flex-row flex-wrap justify-between gap-4">
                  <SummaryStat value="550" label="Calories" />
                  <SummaryStat value="45g" label="Carbs" />
                  <SummaryStat value="35g" label="Protein" />
                  <SummaryStat value="25g" label="Fat" />
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-4">
        <Surface elevation={3} className="bg-card rounded-[30px] border border-border">
          <View className="flex-row items-center gap-2 px-3 py-3">
            <View className="flex-1 bg-muted rounded-full px-3 py-1">
              <TextInput
                mode="flat"
                placeholder="What did you eat or exercise?"
                placeholderTextColor="currentColor"
                className="text-muted-foreground"
                underlineColor="transparent"
                activeUnderlineColor="transparent"
                textColor="currentColor"
                style={{ backgroundColor: 'transparent', height: 42 }}
                contentStyle={{ paddingHorizontal: 0, paddingTop: 0, paddingBottom: 0, fontSize: 15 }}
              />
            </View>

            <IconButton icon="history" size={22} iconColor="var(--android-muted-foreground)" className="text-muted-foreground" style={{ margin: 0 }} />
            <IconButton icon="image" size={22} iconColor="var(--android-muted-foreground)" className="text-muted-foreground" style={{ margin: 0 }} />
            <IconButton icon="camera" size={22} iconColor="var(--android-muted-foreground)" className="text-muted-foreground" style={{ margin: 0 }} />
          </View>
        </Surface>
      </View>
    </View>
  );
}

function DayPill({ label, day, active, onPress }: { label: string; day: string; active?: boolean; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      className={`min-w-[56px] h-16 rounded-2xl border ${
        active 
          ? 'bg-secondary/10 border-secondary' 
          : 'bg-surface-soft border-border'
      } items-center justify-center active:opacity-80`}
    >
      <Text variant="caption1" className={`font-medium tracking-[0.18em] uppercase ${active ? 'text-secondary' : 'text-foreground'}`}>
        {label}
      </Text>
      <Text variant="title3" className={`font-semibold leading-6 ${active ? 'text-secondary' : 'text-foreground'}`}>
        {day}
      </Text>
    </Pressable>
  );
}

function MetricBlock({ value, label, accent, align = 'start' }: { value: string; label: string; accent?: boolean; align?: 'start' | 'center' | 'end' }) {
  const alignClass = align === 'center' ? 'items-center' : align === 'end' ? 'items-end' : 'items-start';

  return (
    <View className={`flex-1 gap-1 ${alignClass}`}>
      <Text variant="title1" className={`font-semibold tracking-[-0.03em] ${accent ? 'text-primary' : 'text-foreground'}`}>
        {value}
      </Text>
      <Text variant="caption1" className="font-medium text-muted-foreground">
        {label}
      </Text>
    </View>
  );
}

function MacroBlock({ value, total, label, align = 'start' }: { value: string; total: string; label: string; align?: 'start' | 'center' | 'end' }) {
  const alignClass = align === 'center' ? 'items-center' : align === 'end' ? 'items-end' : 'items-start';

  return (
    <View className={`flex-1 gap-1 ${alignClass}`}>
      <Text variant="title3" className="font-semibold text-foreground">
        {value}
        <Text variant="caption1" className="text-muted-foreground">
          /{total}
        </Text>
      </Text>
      <Text variant="caption1" className="font-medium text-muted-foreground">
        {label}
      </Text>
    </View>
  );
}

function SummaryStat({ value, label }: { value: string; label: string }) {
  return (
    <View className="min-w-[72px] flex-1 items-center gap-1">
      <Text variant="title3" className="font-semibold text-foreground">
        {value}
      </Text>
      <Text variant="caption1" className="font-medium text-muted-foreground">
        {label}
      </Text>
    </View>
  );
}

function ActionLabel({ icon, label, destructive }: { icon: string; label: string; destructive?: boolean }) {
  return (
    <Pressable className="flex-row items-center gap-1 px-1.5 py-1 opacity-90 active:opacity-70">
      <MaterialCommunityIcons 
        name={icon as never} 
        size={18} 
        className={destructive ? 'text-destructive' : 'text-muted-foreground'} 
      />
      <Text variant="caption1" className={`font-medium ${destructive ? 'text-destructive' : 'text-muted-foreground'}`}>
        {label}
      </Text>
    </Pressable>
  );
}




