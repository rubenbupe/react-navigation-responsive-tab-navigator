# React Navigation Responsive Tab Navigator

A simple React Navigation Navigator to achieve a responsive layout in React Native, based on the Drawer and Bottom Tabs Navigators.

It can be used to create a responsive layout that changes from a drawer to bottom tabs based on the size of the screen. The state of the screens is preserved when switching between modes.

## Example
![](https://github.com/rubenbupe/react-navigation-responsive-tab-navigator/blob/main/.github/media/example-1.gif)

## Installation and Usage

To install this component enter the following command:

```
npm install --save https://github.com/rubenbupe/react-navigation-responsive-tab-navigator
```

You can also fork this repository and install it from that fork.

Basic usage: 

```javascript
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { createResponsiveTabNavigator } from 'react-navigation-responsive-tab-navigator';

import { Home, Profile, Settings } from './screens'

const Drawer = ({ state }) => {
	const navigation = useNavigation()
	const selectedTab = state.index

	return (
		<View style={styles.drawer}>
			<Text style={styles.drawerTitle}>Drawer</Text>
			<Button title="Home" onPress={() => navigation.navigate('HomeNavigation')} style={selectedTab === 0 ? styles.selectedTab : null} />
			<Button title="Profile" onPress={() => navigation.navigate('ProfileNavigation')} style={selectedTab === 1 ? styles.selectedTab : null} />
			<Button title="Settings" onPress={() => navigation.navigate('SettingsNavigation')} style={selectedTab === 2 ? styles.selectedTab : null} />
		</View>
	)
}

const BottomTabBar = ({ state }) => {
	const navigation = useNavigation()
	const selectedTab = state.index

	return (
		<View style={styles.bottomTabBar}>
			<Button title="Home" onPress={() => navigation.navigate('HomeNavigation')} style={selectedTab === 0 ? styles.selectedTab : null} />
			<Button title="Profile" onPress={() => navigation.navigate('ProfileNavigation')} style={selectedTab === 1 ? styles.selectedTab : null} />
			<Button title="Settings" onPress={() => navigation.navigate('SettingsNavigation')} style={selectedTab === 2 ? styles.selectedTab : null} />
		</View>
	)
}

const ExampleNavigator = createResponsiveTabNavigator()

const ExampleRoutes = () => {
	const { width, height } = useWindowDimensions()

	const isSmallScreen = width < 600

	return (
		<ExampleNavigator.Navigator
			initialRouteName="HomeNavigation"
			drawerContent={Drawer}
			bottomTabMenu={BottomTabBar}
			drawerStyle={{
				width: 200
			}}
			mode={isSmallScreen ? 'bottom' : 'side'}
		>
			<ExampleNavigator.Screen
				options={{ title: 'Home' }}
				name="HomeNavigation"
				component={Home}
			/>
			<ExampleNavigator.Screen
				options={{ title: 'Profile' }}
				name="ProfileNavigation"
				component={Profile}
			/>
			<ExampleNavigator.Screen
				options={{ title: 'Settings' }}
				name="SettingsNavigation"
				component={Settings}
			/>
		</ExampleNavigator.Navigator>
	)
}


export default function App() {
  return (
		<NavigationContainer>
			<ExampleRoutes />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	drawer: {
		gap: 10,
		paddingHorizontal: 10,
	},
	drawerTitle: {
		fontSize: 20,
		marginBottom: 10,
		marginVertical: 10
	},
	bottomTabBar: {
		gap: 10,
		marginVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	selectedTab: {
		backgroundColor: '#cdcdcd'
	},
	button: {
		borderRadius: 5,
		borderCurve: 'continuous',
		padding: 10
	}
});
```

Check out the [example](https://github.com/rubenbupe/react-navigation-responsive-tab-navigator/tree/main/example) project for more examples.

## Properties

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `mode` | The mode of the responsive tab navigator | 'bottom' &#124; 'side' | No |
| `drawerContent` | The drawer component to use for the responsive tab navigator | React.ComponentType<BottomTabBarProps> | Yes |
| `drawerStyle` | The drawer style to use for the responsive tab navigator | DrawerNavigationOptions['drawerStyle'] | No |
| `bottomTabMenu` | The bottom tab component to use for the responsive tab navigator | React.ComponentType<BottomTabBarProps> | No |

