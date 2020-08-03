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
  Avatar,
  Title,
  useTheme,
  Paragraph,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import I from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';
import RoundIcon from '../components/RoundIcon';

import HOME_LOGO from '../assets/home.png';
import USER_LOGO from '../assets/user.png';
import ORDER_LOGO from '../assets/order.png';
import FAV_LOGO from '../assets/fav.png';
import LOCATION_LOGO from '../assets/location.png';
import WALLET_LOGO from '../assets/wallet.png';

import INVITE_LOGO from '../assets/invite.png';
import LIKE_LOGO from '../assets/like.png';
import INTERNET_LOGO from '../assets/internet.png';

import LANGUAGE_LOGO from '../assets/language.png';
import TECHNICAL_LOGO from '../assets/technical-support.png';
import COUPON_LOGO from '../assets/coupon.png';
import PLAY_LOGO from '../assets/play.png';
import SETTINGS_LOGO from '../assets/settings.png';
import CLICK_LOGO from '../assets/click.png';

const SideDrawer = ({navigation}) => {
  const {colors} = useTheme();

  const [state, setState] = useState({
    passwordVisible: false,
  });

  return (
    <ScrollView>
      <LinearGradient
        colors={['#110732', '#29ABE2', '#1DA069']}
        style={styles.container}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => navigation.toggleDrawer()}>
          <I name="close" color="white" size={32} />
        </TouchableOpacity>
        <View style={styles.view}>
          <Avatar.Image size={80} source={{uri: 'https://picsum.photos/791'}} />
          <View style={styles.infoRow}>
            <Title style={styles.heading}>James Thomos</Title>
            <Subheading style={styles.badge}>Credit : $0.00</Subheading>
          </View>
        </View>
        <View style={styles.line} />

        <TouchableOpacity
          style={styles.listItemGroup}
          onPress={() => navigation.navigate('Home')}>
          <RoundIcon icon={HOME_LOGO} />
          <Subheading style={styles.listItem}>Home</Subheading>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.listItemGroup}
          onPress={() => navigation.navigate('AllAdvisors')}>
          <RoundIcon icon={USER_LOGO} />
          <Subheading style={styles.listItem}>All Advisors</Subheading>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={ORDER_LOGO} />
          <Subheading style={styles.listItem}>Categories</Subheading>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={ORDER_LOGO} />
          <Subheading style={styles.listItem}>My Orders</Subheading>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={FAV_LOGO} />
          <Subheading style={styles.listItem}>Favourite Advisors</Subheading>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={LOCATION_LOGO} />
          <Subheading style={styles.listItem}>Journeys</Subheading>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={WALLET_LOGO} />
          <Subheading style={styles.listItem}>Credit</Subheading>
        </TouchableOpacity>

        <View style={styles.line} />
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={INVITE_LOGO} />
          <Subheading style={styles.listItem}>Invite Friends</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={LIKE_LOGO} />
          <Subheading style={styles.listItem}>Rate Us</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={INTERNET_LOGO} />
          <Subheading style={styles.listItem}>Our Website</Subheading>
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={LANGUAGE_LOGO} />
          <Subheading style={styles.listItem}>Language</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={TECHNICAL_LOGO} />
          <Subheading style={styles.listItem}>Customer Support</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={COUPON_LOGO} />
          <Subheading style={styles.listItem}>Promo Code</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={PLAY_LOGO} />
          <Subheading style={styles.listItem}>Tutorials</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={SETTINGS_LOGO} />
          <Subheading style={styles.listItem}>Settings</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <RoundIcon icon={CLICK_LOGO} />
          <Subheading style={styles.listItem}>Psychic? Apply Here</Subheading>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  view: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    zIndex: 300,
    right: 10,
  },
  heading: {
    color: 'white',
  },
  badge: {
    color: 'white',
    backgroundColor: '#1DA069',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    width: 120,
  },
  infoRow: {
    marginHorizontal: 15,
  },
  listItem: {
    color: 'white',
  },
  icon: {
    marginRight: 8,
  },
  listItemGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
});

export default SideDrawer;
