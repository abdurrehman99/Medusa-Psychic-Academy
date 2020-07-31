import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
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

const Signup = ({navigation}) => {
  const {colors} = useTheme();

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [state, setState] = useState({
    passwordVisible: false,
  });

  const [formValues, setformValues] = useState({
    email: '',
    password: '',
  });

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  // let {width} = Dimensions.get('window')
  return (
    <LinearGradient
      colors={['#110732', '#29ABE2', '#1DA069']}
      style={styles.container}>
      <ScrollView style={styles.view}>
        {/* <View style={styles.logoContainer}> */}
        <Image style={{flex: 1, marginVertical: 20}} source={ProjectLogo} />
        {/* </View> */}
        <Title style={{color: '#1DA069'}}>New Customer,</Title>
        <Subheading style={[styles.textGrey, {marginBottom: 20}]}>
          Sign up to manage your accounts
        </Subheading>
        <Subheading style={styles.bottomRow}>
          Connect with Social Networks
        </Subheading>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => {}}>
            <Icon style={styles.icon} name="facebook-square" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon style={styles.icon} name="google" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRow}>
          <Subheading style={styles.textGrey}>OR</Subheading>
          <TouchableOpacity onPress={() => {}}>
            <Subheading style={styles.textGrey}> Create an account</Subheading>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.formControl}
          onChangeText={(email) =>
            setformValues({
              ...formValues,
              email,
            })
          }
          label="Email"
          value={formValues.email}
        />
        <HelperText type="error" visible={false}>
          {state.error}
        </HelperText>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.formControl}
            onChangeText={(password) =>
              setformValues({
                ...formValues,
                password,
              })
            }
            label="Pasword"
            secureTextEntry={true}
            value={formValues.password}
          />
          <TouchableOpacity
            onPress={() => {
              setState({...state, passwordVisible: true});
              console.log('icon lcik');
            }}>
            <Icon
              style={{position: 'absolute', zIndex: 300, right: 5, top: 25}}
              name="eye-slash"
              color="grey"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <HelperText type="error" visible={false}>
          {state.error}
        </HelperText>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <ButtonFilled name="CREATE ACCOUNT" />
        </TouchableOpacity>
        <Subheading
          style={[styles.textGrey, {marginVertical: 10, fontSize: 14}]}>
          You must be at least 18 years old to sign up for Medusa Psychic
          Academy. By signing up you agree to the Privacy Policy and Terms of
          Service
        </Subheading>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Subheading style={styles.ac}>Already have an account?</Subheading>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
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
    alignSelf: 'center',
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

export default Signup;
