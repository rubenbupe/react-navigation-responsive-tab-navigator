import type * as React from 'react'

import type {
	ParamListBase,
	DefaultNavigatorOptions,
	TabNavigationState,
	TabRouterOptions
} from '@react-navigation/native'

import type {
	BottomTabBarProps,
	BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs'
import { type DrawerNavigationOptions } from '@react-navigation/drawer'

export interface ResponsiveTabNavigationConfig {
	/*
	 * The mode of the responsive tab navigator.
	 *
	 * - 'bottom': The tab bar is rendered at the bottom of the screen.
	 * - 'side': The tab bar is rendered in a drawer.
	 *
	 * Defaults to 'bottom'.
	 *
	 * @type 'bottom' | 'side'
	 *
	 */
	mode?: 'bottom' | 'side'

	/*
	 * The drawer component to use for the responsive tab navigator.
	 */
	drawerContent: React.ComponentType<BottomTabBarProps>

	/*
	 * The drawer style to use for the responsive tab navigator.
	 */
	drawerStyle?: DrawerNavigationOptions['drawerStyle']

	/*
	 * The bottom tab component to use for the responsive tab navigator.
	 */
	bottomTabMenu?: React.ComponentType<BottomTabBarProps>
}

export interface ResponsiveTabNavigationEventMap {
	[key: string]: any
}

export type ResponsiveTabNavigationProps = DefaultNavigatorOptions<
	ParamListBase,
	TabNavigationState<ParamListBase>,
	BottomTabNavigationOptions,
	ResponsiveTabNavigationEventMap
> &
	TabRouterOptions &
	ResponsiveTabNavigationConfig
