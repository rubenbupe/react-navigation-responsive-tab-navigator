import * as React from 'react'
import { View } from 'react-native'
import {
	useNavigationBuilder,
	createNavigatorFactory,
	type TabNavigationState,
	type ParamListBase,
	type TabRouterOptions,
	type TabActionHelpers,
	TabRouter
} from '@react-navigation/native'

import type {
	ResponsiveTabNavigationEventMap,
	ResponsiveTabNavigationProps
} from './types'
import {
	BottomTabBar,
	BottomTabView,
	type BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs'

import { SafeAreaInsetsContext } from 'react-native-safe-area-context'

function ResponsiveTabNavigator ({
	initialRouteName,
	children,
	screenOptions,
	bottomTabMenu,
	drawerContent,
	drawerStyle,
	responsiveMode = 'bottom'
}: ResponsiveTabNavigationProps) {
	const { state, navigation, descriptors, NavigationContent } =
		useNavigationBuilder<
			TabNavigationState<ParamListBase>,
			TabRouterOptions,
			TabActionHelpers<ParamListBase>,
			BottomTabNavigationOptions,
			ResponsiveTabNavigationEventMap
		>(TabRouter as any, {
			children,
			screenOptions,
			initialRouteName
		})

	const DrawerContentComponent = drawerContent
	const BottomTabMenuComponent = bottomTabMenu

	return (
		<NavigationContent>
			<View
				style={{
					flex: 1,
					flexDirection: 'row'
				}}
			>
				{
					<View
						style={[
							{ width: '20%' },
							drawerStyle,
							{ display: responsiveMode === 'side' ? 'flex' : 'none' }
						]}
					>
						<SafeAreaInsetsContext.Consumer>
							{(insets) => (
								<DrawerContentComponent
									state={state}
									navigation={navigation}
									descriptors={descriptors as any}
									insets={insets as any}
								/>
							)}
						</SafeAreaInsetsContext.Consumer>
					</View>
				}
				<View
					style={[
						{ flex: 1, width: '100%' }
					]}>
					<BottomTabView
						tabBar={(props) => null}
						state={state}
						navigation={navigation}
						descriptors={descriptors as any}
					/>
				</View>
			</View>
			{responsiveMode === 'bottom' && BottomTabMenuComponent == null && (
				<SafeAreaInsetsContext.Consumer>
					{(insets) => (
						<BottomTabBar
							state={state}
							navigation={navigation}
							descriptors={descriptors as any}
							insets={insets as any}
						/>
					)}
				</SafeAreaInsetsContext.Consumer>
			)}

			{responsiveMode === 'bottom' && (
				<View style={{}}>
					<SafeAreaInsetsContext.Consumer>
						{(insets) => {
							return BottomTabMenuComponent != null
								? (
									<BottomTabMenuComponent
										state={state}
										navigation={navigation}
										descriptors={descriptors as any}
										insets={insets as any}
									/>
								)
								: (
									<BottomTabBar
										state={state}
										navigation={navigation}
										descriptors={descriptors as any}
										insets={insets as any}
									/>
								)
						}}
					</SafeAreaInsetsContext.Consumer>
				</View>
			)}
		</NavigationContent>
	)
}

export const createResponsiveTabNavigator = createNavigatorFactory<
	TabNavigationState<ParamListBase>,
	BottomTabNavigationOptions,
	ResponsiveTabNavigationEventMap,
	typeof ResponsiveTabNavigator
>(ResponsiveTabNavigator)
