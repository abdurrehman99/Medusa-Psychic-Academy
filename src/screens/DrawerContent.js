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

import {ProjectLogo} from '../utils/ContentConstant';
import LinearGradient from 'react-native-linear-gradient';
import ButtonFilled from '../components/ButtonFilled';

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
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="home" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Home</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="user" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>All Advisors</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="th-large" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Categories</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon
            name="shopping-bag"
            style={styles.icon}
            color="white"
            size={25}
          />
          <Subheading style={styles.listItem}>My Orders</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="heart" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Favourite Advisors</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="map-marker" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Journeys</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon
            name="credit-card"
            style={styles.icon}
            color="white"
            size={25}
          />
          <Subheading style={styles.listItem}>Credit</Subheading>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="user" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Invite Friends</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="thumbs-up" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Rate Us</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="globe" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Our Website</Subheading>
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="language" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Language</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="headphones" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Customer Support</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="ticket" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Promo Code</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="play" style={styles.icon} color="white" size={22} />
          <Subheading style={styles.listItem}>Tutorials</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="thumbs-up" style={styles.icon} color="white" size={25} />
          <Subheading style={styles.listItem}>Settings</Subheading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemGroup} onPress={() => {}}>
          <Icon name="hand-o-up" style={styles.icon} color="white" size={25} />
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
    marginBottom: 8,
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginTop: 20,
    marginBottom: 15,
  },
});

export default SideDrawer;
