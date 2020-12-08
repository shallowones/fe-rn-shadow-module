import { PropsWithChildren } from 'react'
import { ViewProps } from 'react-native'

export interface IRNTShadowViewProps extends PropsWithChildren<ViewProps> {
  borderWidth: number
  borderColor?: string
  borderRadius?: number
  backgroundColor?: string
  shadowColor?: string
  shadowOffsetX?: number
  shadowOffsetY?: number
  shadowOpacity?: number
  shadowRadius?: number
}
