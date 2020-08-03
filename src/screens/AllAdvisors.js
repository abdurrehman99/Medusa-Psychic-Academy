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
  Searchbar,
  Subheading,
  Avatar,
  Paragraph,
  Title,
  useTheme,
  Button,
  Dialog,
  Portal,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GRADIENT_PATTREN} from '../utils/ContentConstant';
import LinearGradient from 'react-native-linear-gradient';
import ButtonFilled from '../components/ButtonFilled';
import MyCard from '../components/Card';

const AllAdvisors = ({navigation}) => {
  const [state, setState] = useState({
    passwordVisible: false,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);

  const {colors} = useTheme();

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  let {width} = Dimensions.get('window');
  console.log(width / 2);

  return (
    <ScrollView>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title style={styles.coloredTitle}>SELECT FILTER</Dialog.Title>
          <Dialog.Content>
            <Subheading style={styles.filterText}>24 hour delivery</Subheading>
            <Subheading style={styles.filterText}>1 hour delivery</Subheading>
            <Subheading style={styles.filterText}>Live video call</Subheading>
            <Subheading style={styles.filterText}>Live voice call</Subheading>
            <Subheading style={styles.filterText}>Live chat</Subheading>
            <Subheading style={styles.filterText}>New advisors</Subheading>
            <Subheading style={styles.filterText}>Currently Offline</Subheading>
          </Dialog.Content>
          <TouchableOpacity style={styles.dialogebtn} onPress={hideDialog}>
            <ButtonFilled name="ALL ADVISORS" />
          </TouchableOpacity>
        </Dialog>
      </Portal>
      <Image
        resizeMode="stretch"
        style={styles.pattren}
        source={GRADIENT_PATTREN}
      />
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" color="white" size={32} />
        </TouchableOpacity>
        <Title style={styles.title}>All Advisors</Title>
        <TouchableOpacity onPress={() => showDialog()}>
          <Icon name="menu-open" color="white" size={32} />
        </TouchableOpacity>
      </View>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={(q) => setSearchQuery(q)}
        value={searchQuery}
      />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Icon name="eye" color="lightblue" size={32} />
          <Title style={styles.greyTitle}> Recently Viewed</Title>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{
              width: 80,
              marginRight: 30,
            }}>
            <Avatar.Image
              size={75}
              source={{uri: 'https://picsum.photos/690'}}
            />
            <Paragraph style={{textAlign: 'center', color: 'grey'}}>
              Enchanted Empress
            </Paragraph>
          </View>
          <View style={{width: 80, marginRight: 30}}>
            <Avatar.Image
              size={75}
              source={{uri: 'https://picsum.photos/691'}}
            />
            <Paragraph style={{textAlign: 'center', color: 'grey'}}>
              James Jade
            </Paragraph>
          </View>
          <View style={{width: 80, marginRight: 30}}>
            <Avatar.Image
              size={75}
              source={{uri: 'https://picsum.photos/692'}}
            />
            <Paragraph style={{textAlign: 'center', color: 'grey'}}>
              Advisor Empress
            </Paragraph>
          </View>
          <View style={{width: 80, marginRight: 30}}>
            <Avatar.Image
              size={75}
              source={{uri: 'https://picsum.photos/693'}}
            />
            <Paragraph style={{textAlign: 'center', color: 'grey'}}>
              Enchanted Empress
            </Paragraph>
          </View>
        </ScrollView>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/793"
              width={width / 2 - 40}
              online
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/794"
              width={width / 2 - 40}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/693"
              width={width / 2 - 40}
              online
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/694"
              width={width / 2 - 40}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Icon name="heart" color="red" size={30} />
          <Title style={styles.greyTitle}> Favourite Advisors</Title>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{
              width: 80,
              marginRight: 30,
            }}>
            <Avatar.Image
              size={75}
              source={{uri: 'https://picsum.photos/690'}}
            />
            <Paragraph style={{textAlign: 'center', color: 'grey'}}>
              Enchanted Empress
            </Paragraph>
          </View>
          <View style={{width: 80, marginRight: 30}}>
            <Avatar.Image
              size={75}
              source={{uri: 'https://picsum.photos/691'}}
            />
            <Paragraph style={{textAlign: 'center', color: 'grey'}}>
              James Jade
            </Paragraph>
          </View>
          <View style={{width: 80, marginRight: 30}}>
            <Avatar.Image
              size={75}
              source={{uri: 'https://picsum.photos/692'}}
            />
            <Paragraph style={{textAlign: 'center', color: 'grey'}}>
              Advisor Empress
            </Paragraph>
          </View>
          <View style={{width: 80, marginRight: 30}}>
            <Avatar.Image
              size={75}
              source={{uri: 'https://picsum.photos/693'}}
            />
            <Paragraph style={{textAlign: 'center', color: 'grey'}}>
              Enchanted Empress
            </Paragraph>
          </View>
        </ScrollView>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/799"
              width={width / 2 - 40}
              online
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/797"
              width={width / 2 - 40}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/798"
              width={width / 2 - 40}
              online
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/791"
              width={width / 2 - 40}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <ButtonFilled name="LOAD MORE" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  pattren: {
    width: '100%',
    // height: 250,
    position: 'absolute',
  },
  searchBar: {
    marginTop: 30,
    marginHorizontal: 25,
  },
  title: {
    color: 'white',
  },
  headerView: {
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 25,
    justifyContent: 'space-between',
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  coloredTitle: {
    color: '#1DA069',
    marginVertical: 15,
  },
  greyTitle: {
    color: 'grey',
  },

  textGrey: {color: 'grey'},
  avatarView: {
    marginRight: 15,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  ac: {color: '#93288D', textAlign: 'center', marginBottom: 15},
  icon: {
    margin: 10,
  },
  videoBox: {
    marginBottom: 20,
  },
  btnText: {
    textAlign: 'center',
    padding: 8,
    lineHeight: 18,
    color: 'white',
  },
  dialogebtn: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  filterText: {
    alignSelf: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  video: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  btn: {
    marginVertical: 20,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '40%',
  },
});

export default AllAdvisors;
