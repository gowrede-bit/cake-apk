import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import LiquidButton from './LiquidButton';
import LiquidGlassCard from './LiquidGlassCard';
import { useCart } from '../context/CartContext';
import { getMenuByCategory } from '../data/menu';
import { palette, radius, spacing } from '../theme';

function MenuMatrix({ activeCategory }) {
  const { width } = useWindowDimensions();
  const { cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  const filteredItems = getMenuByCategory(activeCategory);

  let columns = 1;
  if (width >= 1200) columns = 4;
  else if (width >= 850) columns = 3;
  else if (width >= 520) columns = 2;

  const cardWidth = columns === 1 ? '100%' : `${100 / columns - 2}%`;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>
        {activeCategory === 'ALL' ? 'Our Signature Delights' : activeCategory}
      </Text>

      <View style={styles.grid}>
        {filteredItems.map((item) => {
          const cartItem = cart.find((entry) => entry.product.id === item.id);

          return (
            <LiquidGlassCard key={item.id} style={[styles.card, { width: cardWidth }]}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />

              <View style={styles.cardBody}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>

                <View style={styles.priceRow}>
                  <Text style={styles.itemPrice}>Rs. {item.price}/-</Text>
                  <Text style={styles.itemTag}>{item.isVegetarian ? 'Veg' : 'Non-Veg'}</Text>
                </View>

                {cartItem ? (
                  <View style={styles.quantityWrap}>
                    <Pressable
                      onPress={() =>
                        cartItem.quantity > 1
                          ? decrementQuantity(item.id)
                          : removeFromCart(item.id)
                      }
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>-</Text>
                    </Pressable>

                    <Text testID={`quantity-${item.id}`} style={styles.quantityCount}>
                      {cartItem.quantity}
                    </Text>

                    <Pressable
                      onPress={() => incrementQuantity(item.id)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>+</Text>
                    </Pressable>
                  </View>
                ) : (
                  <LiquidButton
                    testID={`add-button-${item.id}`}
                    onPress={() => addToCart(item)}
                    style={styles.addButton}
                  >
                    ADD +
                  </LiquidButton>
                )}
              </View>
            </LiquidGlassCard>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.md,
  },
  sectionTitle: {
    color: palette.textPrimary,
    fontWeight: '800',
    fontSize: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: spacing.md,
  },
  card: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 140,
    backgroundColor: palette.elevated,
  },
  cardBody: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  itemName: {
    color: palette.textPrimary,
    fontSize: 15,
    fontWeight: '700',
  },
  itemDescription: {
    color: palette.textSecondary,
    fontSize: 12,
    lineHeight: 18,
    minHeight: 36,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemPrice: {
    color: palette.textPrimary,
    fontSize: 17,
    fontWeight: '800',
  },
  itemTag: {
    color: palette.textSecondary,
    fontSize: 11,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: palette.border,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  addButton: {
    marginTop: 2,
  },
  quantityWrap: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.elevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    color: palette.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
  },
  quantityCount: {
    color: palette.textPrimary,
    fontSize: 14,
    fontWeight: '800',
    minWidth: 20,
    textAlign: 'center',
  },
});

export default MenuMatrix;
