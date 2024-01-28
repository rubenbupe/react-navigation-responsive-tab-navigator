import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { createResponsiveTabNavigator } from 'react-navigation-responsive-tab-navigator';

const Button = ({ title, onPress, style }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
			<Text>{title}</Text>
		</TouchableOpacity>
	)
}

const Home = () => {
	return (
		<View>
			<Text>Home Screen</Text>
		</View>
	)
}

const Profile = () => {
	return (
		<View>
			<Text>Profile Screen</Text>
		</View>
	)
}

const Settings = () => {
	return (
		<View>
			<Text>Settings Screen</Text>
		</View>
	)
}

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
