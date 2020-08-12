import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import defaultNavigationOption from './constant/defaultNavigationOption'

const navigator = createStackNavigator({
  Search: SearchScreen,
  Show: ResultsShowScreen
},{
  defaultNavigationOptions: defaultNavigationOption
})

export default createAppContainer(navigator)