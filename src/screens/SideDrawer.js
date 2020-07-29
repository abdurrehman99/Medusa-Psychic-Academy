import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  Subheading,
  TextInput,
  HelperText,
  Title,
  useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProjectLogo} from '../utils/ContentConstant';
import LinearGradient from 'react-native-linear-gradient';
import ButtonFilled from '../components/ButtonFilled';

const SideDrawer = ({navigation}) => {
  const {colors} = useTheme();

  const [state, setState] = useState({
    passwordVisible: false,
  });

  const [formValues, setformValues] = useState({
    email: '',
    password: '',
  });

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <LinearGradient
      colors={['#110732', '#29ABE2', '#1DA069']}
      style={styles.container}></LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  view: {
    marginTop: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  logoContainer: {
    marginVertical: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    textAlign: 'center',
    marginVertical: 5,
    justifyContent: 'center',
  },
  formControl: {
    backgroundColor: 'white',
    paddingHorizontal: 0,
    width: '100%',
  },
  btn: {
    marginVertical: 20,
  },
  textGrey: {color: 'grey'},
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ac: {color: '#93288D', textAlign: 'center', marginBottom: 15},
  icon: {
    margin: 10,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '40%',
  },
});

export default SideDrawer;
