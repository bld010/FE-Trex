import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home/Home';
import MyTrips from './MyTrips/MyTrips';
import TripForm from './TripForm/TripForm';
import Trip from './Trip/Trip';
import LegForm from './LegForm/LegForm';
import MyFollowers from './MyFollowers/MyFollowers';
import FollowerForm from './FollowerForm/FollowerForm';
import { SafetyInfo } from './SafetyInfo/SafetyInfo';
import AddLodgingInfo from './AddLodgingInfo/AddLodgingInfo';
import AddTransportInfo from './AddTransportInfo/AddTransportInfo';
import { Leg } from './Leg/Leg';
import FollowerDashboard from './FollowerDashboard/FollowerDashboard';
import DefaultFollowerMessages from './DefaultFollowerMessages/DefaultFollowerMessages';
import MyWandererTrips from './MyWanderersTrips/MyWanderersTrips';
import WandererDashboard from './WandererDashboard/WandererDashboard';
import MyWanderer from './MyWanderer/MyWanderer';
import FollowerMessageHistory from './FollowerMessageHistory/FollowerMessageHistory';
import Lodging from './Lodging/Lodging'
import Follower from '../Components/Follower/Follower';
<<<<<<< HEAD
import Transportation from './Transportation/Transportation'
=======

>>>>>>> 491ee668c7ad17c6afda1ea59233a30804959775

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerBackTitle: 'Home',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'}
    }
  },
  WandererDashboard: {
    screen: WandererDashboard,
    navigationOptions: {
      headerBackTitle: 'Dashboard',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white' }
    }
  },
  MyTrips: {
    screen: MyTrips,
    navigationOptions: {
      headerBackTitle: 'My Trips',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  TripForm: {
    screen: TripForm,
    navigationOptions: {
      headerBackTitle: 'Add/Edit Trip',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  Trip: {
    screen: Trip,
    navigationOptions: {
      headerBackTitle: 'Trip',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  LegForm: {
    screen: LegForm,
    navigationOptions: {
      headerBackTitle: 'Add Leg',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  MyFollowers: {
    screen: MyFollowers,
    navigationOptions: {
      headerBackTitle: 'My Followers',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  FollowerForm: {
    screen: FollowerForm,
    navigationOptions: {
      headerBackTitle: 'Add Follower',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  SafetyInfo: {
    screen: SafetyInfo,
    navigationOptions: {
      headerBackTitle: 'Safety Info',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  AddLodgingInfo: {
    screen: AddLodgingInfo,
    navigationOptions: {
      headerBackTitle: 'Add Lodging',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  AddTransportInfo: {
    screen: AddTransportInfo,
    navigationOptions: {
      headerBackTitle: 'Add Transport',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  Leg: {
    screen: Leg,
    navigationOptions: {
      headerBackTitle: 'Leg',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  FollowerDashboard: {
    screen: FollowerDashboard,
    navigationOptions: {
      headerBackTitle: 'Follower Dashboard',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  DefaultFollowerMessages: {
    screen: DefaultFollowerMessages,
    navigationOptions: {
      headerBackTitle: 'Follower Messages',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  MyWandererTrips: {
    screen: MyWandererTrips,
    navigationOptions: {
      headerBackTitle: 'Follower Messages',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  Transportation: {
    screen: Transportation,
    navigationOptions: {
      headerBackTitle: 'Transportation',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  MyWanderer: {
    screen: MyWanderer,
    navigationOptions: {
      headerBackTitle: 'My Wanderer',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  FollowerMessageHistory: {
    screen: FollowerMessageHistory,
    navigationOptions: {
      headerBackTitle: 'Message History',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  Lodging: {
    screen: Lodging,
    navigationOptions: {
      headerBackTitle: 'Lodging',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'} 
    }
  },
  Follower: {
    screen: Follower,
    navigationOptions: {
      headerBackTitle: 'Follower',
      headerTransparent: true,
      headerBackTitleStyle: { color: 'white'}
    }
  },
});


export default createAppContainer(RootStack);
