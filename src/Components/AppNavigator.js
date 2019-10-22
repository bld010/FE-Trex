import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home/Home';
import MyTrips from './MyTrips/MyTrips';

const RootStack = createStackNavigator({
  Home: { screen: Home },
  MyTrips: { screen: MyTrips}
})

const App = createAppContainer(RootStack)

export default App;
