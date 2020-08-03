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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProjectLogo} from '../utils/ContentConstant';
import LinearGradient from 'react-native-linear-gradient';
import ButtonFilled from '../components/ButtonFilled';

const ForgotPassword = ({navigation}) => {
  const {colors} = useTheme();

  const [state, setState] = useState({});

  const [formValues, setformValues] = useState({
    email: '',
    password: '',
  });

  return (
    <LinearGradient
      colors={['#110732', '#29ABE2', '#1DA069']}
      style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.rowView}
          onPress={() => navigation.pop()}>
          <Icon name="keyboard-backspace" color="white" size={32} />
          <Subheading style={styles.title}> Back</Subheading>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.view}>
        <Image resizeMode="contain" style={{width: 240}} source={ProjectLogo} />
        <Title style={{color: '#1DA069'}}>
          Reset your Medusa Psychic Academy Password
        </Title>
        <Subheading style={[styles.textGrey, {marginBottom: 20}]}>
          Submit your email address and we'll send you a link to reset your
          password
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
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <ButtonFilled name="RESET PASSWORD" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}></TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  rowView: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  view: {
    marginTop: 20,
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

export default ForgotPassword;
