import React, { forwardRef, PropsWithChildren } from 'react'
import { requireNativeComponent, Platform, View, ViewProps, StyleSheet } from 'react-native'
import { IRNTShadowViewProps } from './interfaces'
import { NATIVE_COMPONENT_NAME } from './constants'

const IS_ANDROID = Platform.OS === 'android'
const IS_IOS = Platform.OS === 'ios'

const RNTShadowView = requireNativeComponent<IRNTShadowViewProps>(NATIVE_COMPONENT_NAME)

export const ShadowView = forwardRef<View, PropsWithChildren<ViewProps>>((props, ref) => {
  if (IS_IOS) {
    return <View {...props} />
  }

  const flattenedStyle = StyleSheet.flatten(props.style)

  delete flattenedStyle.elevation

  const {
    shadowColor,
    shadowOffset,
    shadowOpacity = 0,
    shadowRadius,
    borderRadius,
    backgroundColor,
    borderWidth = 1,
    borderColor,
    ...restStyles
  } = flattenedStyle

  if (shadowOpacity === 0) {
    return <View {...props} />
  }

  const { width: shadowOffsetX, height: shadowOffsetY } = shadowOffset || {}

  return (
    <RNTShadowView
      {...props}
      ref={ref as any}
      style={[restStyles]}
      borderWidth={borderWidth}
      borderColor={borderColor as string}
      backgroundColor={backgroundColor as string}
      borderRadius={borderRadius}
      shadowColor={shadowColor !== undefined ? (shadowColor as string) : 'black'}
      shadowOffsetX={shadowOffsetX}
      shadowOffsetY={shadowOffsetY}
      shadowOpacity={IS_ANDROID ? shadowOpacity / 10 : shadowOpacity}
      shadowRadius={shadowRadius !== undefined ? shadowRadius : 2.8}
    />
  )
})

ShadowView.displayName = 'ShadowView'
