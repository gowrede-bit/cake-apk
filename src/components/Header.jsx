import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import logo from '../assets/logo_nobg.png';
import { palette, radius, spacing } from '../theme';

const navTabs = [
  { key: 'home', label: 'Home' },
  { key: 'menu', label: 'Menu' },
];

function Header({ currentView, onChangeView, cartCount }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.brand} onPress={() => onChangeView('home')}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.brandText}>Cake Forest</Text>
      </Pressable>

      <View style={styles.navRow}>
        {navTabs.map((tab) => (
          <Pressable
            key={tab.key}
            onPress={() => onChangeView(tab.key)}
            style={[styles.navButton, currentView === tab.key && styles.navButtonActive]}
          >
            <Text
              style={[
                styles.navText,
                currentView === tab.key && styles.navTextActive,
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        ))}

        <Pressable
          testID="header-cart-button"
          onPress={() => onChangeView('cart')}
          style={[styles.navButton, currentView === 'cart' && styles.navButtonActive]}
        >
          <Text
            style={[
              styles.navText,
              currentView === 'cart' && styles.navTextActive,
            ]}
          >
            Cart ({cartCount})
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
    paddingVertical: spacing.sm,
  },
  brand: {
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  logo: {
    width: 42,
    height: 42,
  },
  brandText: {
    color: palette.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  navRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  navButton: {
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  navButtonActive: {
    backgroundColor: palette.accent,
    borderColor: palette.accentSoft,
  },
  navText: {
    color: palette.textSecondary,
    fontSize: 14,
    fontWeight: '700',
  },
  navTextActive: {
    color: palette.textPrimary,
  },
});

export default Header;
