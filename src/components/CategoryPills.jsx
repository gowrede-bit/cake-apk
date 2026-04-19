import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { categories } from '../data/menu';
import { palette, radius, spacing } from '../theme';

function CategoryPills({ activeCategory, onSelectCategory }) {
  const allCategories = ['ALL', ...categories];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {allCategories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <Pressable
            key={category}
            testID={`category-${category}`}
            onPress={() => onSelectCategory(category)}
            style={[styles.pill, isActive && styles.pillActive]}
          >
            <Text style={[styles.pillText, isActive && styles.pillTextActive]}>
              {category === 'ALL' ? 'ALL DELIGHTS' : category}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: 2,
  },
  pill: {
    backgroundColor: palette.chip,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: palette.border,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  pillActive: {
    backgroundColor: palette.accent,
    borderColor: palette.accentSoft,
  },
  pillText: {
    color: palette.textSecondary,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.3,
  },
  pillTextActive: {
    color: palette.textPrimary,
  },
});

export default CategoryPills;
