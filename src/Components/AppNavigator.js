import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home/Home';
import MyTrips from './MyTrips/MyTrips';
import TripForm from './TripForm/TripForm';
import Trip from './Trip/Trip';
import { LegForm } from './LegForm/LegForm';
import { MyFollowers } from './MyFollowers/MyFollowers';
import FollowerForm from './FollowerForm/FollowerForm'
import { SafetyInfo } from './SafetyInfo/SafetyInfo'

const RootStack = createStackNavigator({
  Home: { screen: Home },
  MyTrips: { screen: MyTrips},
  TripForm: {screen: TripForm},
  Trip: {screen: Trip},
  LegForm: {screen: LegForm},
  MyFollowers: {screen: MyFollowers},
  FollowerForm: {screen: FollowerForm},
  SafetyInfo: {screen: SafetyInfo}
})

export default createAppContainer(RootStack)
