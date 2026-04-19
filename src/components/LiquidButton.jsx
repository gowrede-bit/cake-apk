import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { palette, radius, spacing } from '../theme';

function LiquidButton({ children, onPress, style, textStyle, testID, disabled }) {
  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.buttonDisabled,
        pressed && !disabled && styles.buttonPressed,
        style,
      ]}
    >
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.action,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: '#67E8F9',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: palette.textPrimary,
    fontWeight: '800',
    fontSize: 13,
  },
});

export default LiquidButton;
