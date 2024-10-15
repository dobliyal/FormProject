import React from 'react'
import { StyleSheet, View } from 'react-native'
import ScreenForm from './src/Screen/ScreenForm'
import ScreenDropDown from './src/Screen/ScreenDropDown'
import ScreenRadioButtons from './src/Screen/ScreenRadioButtons'
import ScreenLogin from './src/Screen/ScreenLogin/ScreenLogin'
import ScreenText from './src/Screen/ScreenText/ScreenText'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <ScreenForm/> */}
      {/* <ScreenLogin/> */}
      {/* <ScreenDropDown/> */}
       {/* <ScreenRadioButtons/> */}
       <ScreenText/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
