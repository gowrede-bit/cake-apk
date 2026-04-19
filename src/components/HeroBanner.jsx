import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { heroItems } from '../data/menu';
import { palette, radius, spacing } from '../theme';

const AUTO_ADVANCE_MS = 5000;

function HeroBanner() {
  const { width } = useWindowDimensions();
  const cardWidth = Math.max(280, width - 40);
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const indexRef = useRef(0);

  const goTo = (nextIndex) => {
    indexRef.current = nextIndex;
    setCurrentIndex(nextIndex);
    scrollRef.current?.scrollTo({
      x: nextIndex * cardWidth,
      animated: true,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % heroItems.length;
      goTo(nextIndex);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [cardWidth]);

  const onScrollEnd = (event) => {
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / cardWidth);
    if (!Number.isNaN(nextIndex)) {
      indexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
    }
  };

  const step = (direction) => {
    const nextIndex =
      direction === 'left'
        ? (indexRef.current - 1 + heroItems.length) % heroItems.length
        : (indexRef.current + 1) % heroItems.length;
    goTo(nextIndex);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Indulge in happiness, delivered fresh.</Text>

      <View style={styles.carouselRow}>
        <Pressable style={styles.arrow} onPress={() => step('left')}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </Pressable>

        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onScrollEnd}
          contentContainerStyle={styles.carouselTrack}
          style={[styles.carousel, { width: cardWidth }]}
        >
          {heroItems.map((item) => (
            <View key={item.id} style={[styles.slide, { width: cardWidth }]}>
              <View style={styles.heroImageWrap}>
                <Image source={item.image} style={styles.heroImage} resizeMode="cover" />
              </View>
              <Text style={styles.slideLabel}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>

        <Pressable style={styles.arrow} onPress={() => step('right')}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </Pressable>
      </View>

      <View style={styles.dots}>
        {heroItems.map((item, index) => (
          <View
            key={item.id}
            style={[styles.dot, index === currentIndex && styles.dotActive]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: radius.xl,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    gap: spacing.md,
  },
  title: {
    color: palette.textPrimary,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '800',
    textAlign: 'center',
  },
  carouselRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  arrow: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.elevated,
    borderWidth: 1,
    borderColor: palette.border,
  },
  arrowText: {
    color: palette.textPrimary,
    fontWeight: '800',
    fontSize: 16,
  },
  carousel: {
    maxWidth: '100%',
  },
  carouselTrack: {
    alignItems: 'center',
  },
  slide: {
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    gap: spacing.sm,
  },
  heroImageWrap: {
    width: 220,
    height: 220,
    borderRadius: 110,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: palette.accentSoft,
    backgroundColor: '#0B1220',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  slideLabel: {
    color: palette.textPrimary,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: palette.border,
  },
  dotActive: {
    width: 24,
    backgroundColor: palette.accentSoft,
  },
});

export default HeroBanner;
