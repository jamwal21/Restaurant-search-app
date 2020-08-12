import {Platform} from 'react-native'
import color from './color'

const defaultNavigationOption = {
    headerStyle:{
        backgroundColor: Platform.OS === 'android'? color.primaryColor:'white'
    },
    headerTintColor: Platform.OS === 'android'? 'white' : color.accentColor
}

export default defaultNavigationOption