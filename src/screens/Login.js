import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  Switch,
  Subheading,
  TextInput,
  HelperText,
  Title,
  useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProjectLogo} from '../utils/ContentConstant';

const Login = () => {
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
  return (
    <View style={styles.container}>
      <ScrollView style={styles.view}>
        <View style={styles.logoContainer}>
          <Image style={{}} source={ProjectLogo} />
        </View>

        <Title style={{color: '#1DA069'}}>Welcome Back,</Title>
        <Subheading style={[styles.textGrey, {marginBottom: 20}]}>
          Sign in to continue
        </Subheading>
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
        <View style={styles.switchRow}>
          <Switch
            color={colors.primary}
            style={styles.switch}
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
          />
          <Subheading style={styles.textGrey}>Remember me</Subheading>
        </View>
        <Button style={styles.btn} mode="contained" onPress={() => {}}>
          Login
        </Button>
        <TouchableOpacity style={styles.bottomRow} onPress={() => {}}>
          <Subheading style={styles.textGrey}>Forgot your Password?</Subheading>
        </TouchableOpacity>
        <View style={styles.bottomRow}>
          <Subheading style={{color: '#93288D'}}>
            Don't have an account?
          </Subheading>
          <TouchableOpacity onPress={() => {}}>
            <Subheading style={{color: '#93288D'}}> Sign Up</Subheading>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRow}>
          <Subheading style={styles.textGrey}>OR</Subheading>
        </View>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#110732',
    paddingHorizontal: 15,
  },
  view: {
    marginTop: 25,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: 600,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  logoContainer: {
    marginVertical: 20,
  },
  switchRow: {
    flexDirection: 'row',
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
  icon: {
    margin: 10,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '40%',
  },
});

export default Login;
