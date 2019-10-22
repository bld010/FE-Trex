import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home/Home';
import MyTrips from './MyTrips/MyTrips';
import TripForm from './TripForm/TripForm'

const RootStack = createStackNavigator({
  Home: { screen: Home },
  MyTrips: { screen: MyTrips},
  TripForm: {screen: TripForm}
})

const App = createAppContainer(RootStack)

export default App;
