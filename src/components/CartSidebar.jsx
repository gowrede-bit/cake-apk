import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { menuItems } from '../data/menu';
import { useCart } from '../context/CartContext';
import LiquidButton from './LiquidButton';
import LiquidGlassCard from './LiquidGlassCard';
import { palette, radius, spacing } from '../theme';

function CartSidebar() {
  const { cart, subtotal, incrementQuantity, decrementQuantity, addToCart } = useCart();
  const popularPicks = menuItems.filter((item) => item.price < 120).slice(0, 3);

  const onCheckout = () => {
    Alert.alert('Checkout', 'Checkout integration is the next step for this app.');
  };

  return (
    <View style={styles.wrapper}>
      <LiquidGlassCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Popular Picks</Text>
        <View style={styles.pickList}>
          {popularPicks.map((item) => (
            <View key={item.id} style={styles.pickRow}>
              <View style={styles.pickTextWrap}>
                <Text style={styles.pickName}>{item.name}</Text>
                <Text style={styles.pickPrice}>Rs. {item.price}/-</Text>
              </View>

              <Pressable onPress={() => addToCart(item)} style={styles.pickAction}>
                <Text style={styles.pickActionText}>+</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </LiquidGlassCard>

      <LiquidGlassCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Your Cart</Text>

        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        ) : (
          <View style={styles.cartList}>
            {cart.map((item) => (
              <View key={item.product.id} style={styles.cartRow}>
                <View style={styles.cartTextWrap}>
                  <Text style={styles.cartName}>{item.product.name}</Text>
                  <Text style={styles.cartMeta}>Rs. {item.product.price}/- each</Text>
                </View>

                <View style={styles.cartActions}>
                  <Pressable
                    onPress={() => decrementQuantity(item.product.id)}
                    style={styles.cartActionButton}
                  >
                    <Text style={styles.cartActionText}>-</Text>
                  </Pressable>

                  <Text style={styles.cartQty}>{item.quantity}</Text>

                  <Pressable
                    onPress={() => incrementQuantity(item.product.id)}
                    style={styles.cartActionButton}
                  >
                    <Text style={styles.cartActionText}>+</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>Rs. {subtotal}/-</Text>
        </View>

        <LiquidButton disabled={cart.length === 0} onPress={onCheckout}>
          Fluid Checkout
        </LiquidButton>
      </LiquidGlassCard>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.md,
  },
  sectionCard: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  sectionTitle: {
    color: palette.textPrimary,
    fontSize: 20,
    fontWeight: '800',
  },
  pickList: {
    gap: spacing.sm,
  },
  pickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: radius.md,
    padding: spacing.sm,
  },
  pickTextWrap: {
    flex: 1,
    gap: 2,
  },
  pickName: {
    color: palette.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  pickPrice: {
    color: palette.textSecondary,
    fontSize: 12,
  },
  pickAction: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.accent,
  },
  pickActionText: {
    color: palette.textPrimary,
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 19,
  },
  emptyText: {
    color: palette.textSecondary,
    fontSize: 14,
    paddingVertical: spacing.sm,
  },
  cartList: {
    gap: spacing.sm,
  },
  cartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
    paddingBottom: spacing.sm,
  },
  cartTextWrap: {
    flex: 1,
    gap: 2,
    paddingRight: spacing.sm,
  },
  cartName: {
    color: palette.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  cartMeta: {
    color: palette.textSecondary,
    fontSize: 12,
  },
  cartActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  cartActionButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.elevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartActionText: {
    color: palette.textPrimary,
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 18,
  },
  cartQty: {
    color: palette.textPrimary,
    fontSize: 14,
    fontWeight: '800',
    minWidth: 18,
    textAlign: 'center',
  },
  totalRow: {
    marginTop: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    color: palette.textSecondary,
    fontSize: 16,
    fontWeight: '700',
  },
  totalValue: {
    color: palette.textPrimary,
    fontSize: 22,
    fontWeight: '800',
  },
});

export default CartSidebar;
