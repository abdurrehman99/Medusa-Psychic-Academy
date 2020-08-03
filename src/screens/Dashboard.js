import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
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

const Dashboard = ({navigation}) => {
  const [state, setState] = useState({
    passwordVisible: false,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);

  const {colors} = useTheme();

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

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
        <Title style={styles.title}>Dashboard</Title>
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
        <Title style={styles.coloredTitle}>STAFF PICK</Title>
        <Image
          style={{width: '100%', height: 150, marginTop: 5, borderRadius: 8}}
          source={{uri: 'https://picsum.photos/650'}}
        />
        <Title style={{marginVertical: 10}}>SAGEST</Title>
        <Paragraph style={styles.textGrey}>
          Etiam neque justo, posuere faucibus tincidunt cursus, egestas
          sollicitudin arcu. Nunc non ex sit amet dui commodo scelerisque ac ac
          odio. Read More
        </Paragraph>
        <Title style={styles.greyTitle}>Recently Viewed</Title>
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
        <Title style={styles.coloredTitle}>TRENDING</Title>
        <View style={styles.videoBox}>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              marginHorizontal: 10,
              zIndex: 300,
              top: 15,
            }}>
            <Icon name="star" style={{marginRight: 5}} color="gold" size={22} />
            <Icon name="star" style={{marginRight: 5}} color="gold" size={22} />
            <Icon name="star" style={{marginRight: 5}} color="gold" size={22} />
            <Icon name="star" style={{marginRight: 5}} color="gold" size={22} />
            <Icon name="star" style={{marginRight: 5}} color="gold" size={22} />
          </View>
          <Image
            style={styles.video}
            source={{uri: 'https://picsum.photos/660'}}
          />
          <TouchableOpacity
            onPress={() => {}}
            style={{
              position: 'absolute',
              zIndex: 300,
              top: '40%',
              right: '45%',
            }}>
            <Icon name="play-circle" color="white" size={40} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              position: 'absolute',
              zIndex: 400,
              bottom: 40,
              right: 10,
            }}>
            <Icon name="heart" color="red" size={30} />
          </TouchableOpacity>
          <View style={{backgroundColor: '#1DA069'}}>
            <Title style={{textAlign: 'center', color: 'white'}}>
              TOP ACCURACY
            </Title>
          </View>
          {/* <View style={{flexDirection: 'row'}}>
            <Subheading style={{textAlign: 'center'}}>485</Subheading>
            <Icon name="smile" color="red" size={25} />

            <Subheading style={{textAlign: 'center'}}>185</Subheading>
            <Icon name="smile" color="red" size={25} />
          </View> */}
        </View>
        <ScrollView horizontal={true}>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/793"
              online
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/794"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/795"
              online
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Advisor')}>
            <MyCard
              name="Dr. Gabby"
              speciality="Love Guru"
              image="https://picsum.photos/796"
            />
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={{backgroundColor: '#FF6600', width: '45%', borderRadius: 5}}
            onPress={() => {}}>
            <View>
              <Subheading style={styles.btnText}>
                Available for 24-hour delivery
              </Subheading>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: '#1C8D02', width: '45%', borderRadius: 5}}
            onPress={() => {}}>
            <View>
              <Subheading style={styles.btnText}>
                Available for 24-hour delivery
              </Subheading>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={{backgroundColor: '#0080FF', width: '45%', borderRadius: 5}}
            onPress={() => {}}>
            <View>
              <Subheading style={styles.btnText}>
                Available for live video call
              </Subheading>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: '#935A28', width: '45%', borderRadius: 5}}
            onPress={() => {}}>
            <View>
              <Subheading style={styles.btnText}>
                Voted most accurate
              </Subheading>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AllAdvisors')}>
          <ButtonFilled name="SEE ALL ADVISORS" />
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
    marginTop: 20,
    marginBottom: 10,
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

export default Dashboard;
