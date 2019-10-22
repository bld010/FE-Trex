import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home/Home';
import MyTrips from './MyTrips/MyTrips';
import TripForm from './TripForm/TripForm'
import Trip from './Trip/Trip'

const RootStack = createStackNavigator({
  Home: { screen: Home },
  MyTrips: { screen: MyTrips},
  TripForm: {screen: TripForm},
  Trip: {screen: Trip}
})

const App = createAppContainer(RootStack)

export default App;
