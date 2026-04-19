import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryPills from './components/CategoryPills';
import MenuMatrix from './components/MenuMatrix';
import CartSidebar from './components/CartSidebar';
import { useCart } from './context/CartContext';
import { palette, spacing } from './theme';

function AppShell() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentView, setCurrentView] = useState('home');
  const { totalItems } = useCart();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundGlowTop} pointerEvents="none" />
      <View style={styles.backgroundGlowBottom} pointerEvents="none" />

      <View style={styles.container}>
        <Header
          currentView={currentView}
          onChangeView={setCurrentView}
          cartCount={totalItems}
        />

        {currentView === 'cart' ? (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <CartSidebar />
          </ScrollView>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <HeroBanner />
            <CategoryPills
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
            <MenuMatrix activeCategory={activeCategory} />
          </ScrollView>
        )}

        <Text style={styles.footerText}>Web + iOS + Android from one component system.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
    gap: spacing.sm,
  },
  scrollContent: {
    gap: spacing.lg,
    paddingBottom: spacing.lg,
  },
  footerText: {
    color: palette.textSecondary,
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: spacing.xs,
  },
  backgroundGlowTop: {
    position: 'absolute',
    width: 380,
    height: 380,
    borderRadius: 190,
    backgroundColor: '#4C1D95',
    opacity: 0.25,
    top: -190,
    right: -120,
  },
  backgroundGlowBottom: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: '#0891B2',
    opacity: 0.22,
    bottom: -180,
    left: -130,
  },
});

export default AppShell;
