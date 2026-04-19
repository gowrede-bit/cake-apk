import React from 'react';
import { StyleSheet, View } from 'react-native';
import { palette, radius } from '../theme';

function LiquidGlassCard({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: palette.border,
  },
});

export default LiquidGlassCard;
