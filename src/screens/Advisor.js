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
import Ic from 'react-native-vector-icons/MaterialIcons';
import {GRADIENT_PATTREN} from '../utils/ContentConstant';
import LinearGradient from 'react-native-linear-gradient';
import ButtonFilled from '../components/ButtonFilled';
import MyCard from '../components/Card';

const Advisor = ({navigation}) => {
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
      <Image style={styles.pattren} source={GRADIENT_PATTREN} />
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.rowView}
          onPress={() => navigation.pop()}>
          <Icon name="keyboard-backspace" color="white" size={32} />
          <Subheading style={styles.title}> Back</Subheading>
        </TouchableOpacity>
        <View style={styles.rowView}>
          <TouchableOpacity style={styles.icon} onPress={() => showDialog()}>
            <Icon name="bell-outline" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => showDialog()}>
            <Icon name="heart-outline" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => showDialog()}>
            <Icon name="share-variant" color="white" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.videoBox}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              position: 'absolute',
              zIndex: 400,
              top: 160,
              right: 10,
            }}>
            <Icon name="heart" color="red" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              position: 'absolute',
              zIndex: 300,
              top: '12%',
              right: '45%',
            }}>
            <Icon name="play-circle" color="white" size={40} />
          </TouchableOpacity>
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

          <View style={{backgroundColor: '#1DA069'}}>
            <Title style={{textAlign: 'center', color: 'white'}}>
              TOP ACCURACY
            </Title>
          </View>

          <Title style={styles.coloredTitle}>ABOUT MY SERVICES</Title>
          <Paragraph style={styles.greyTitle}>
            Etiam neque justo, posuere faucibus tincidunt cursus, egestas
            sollicitudin arcu. Nunc non ex sit amet dui commodo scelerisque ac
            ac odio.
          </Paragraph>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ic name="keyboard-arrow-right" color="#1DA069" size={20} />
            <Paragraph style={styles.greyTitle}>
              Etiam neque justo, posuere faucibus tincidunt
            </Paragraph>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ic name="keyboard-arrow-right" color="#1DA069" size={20} />
            <Paragraph style={styles.greyTitle}>
              Etiam neque justo, posuere faucibus tincidunt
            </Paragraph>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ic name="keyboard-arrow-right" color="#1DA069" size={20} />
            <Paragraph style={styles.greyTitle}>
              Etiam neque justo, posuere faucibus tincidunt
            </Paragraph>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ic name="keyboard-arrow-right" color="#1DA069" size={20} />
            <Paragraph style={styles.greyTitle}>
              Etiam neque justo, posuere faucibus tincidunt
            </Paragraph>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ic name="keyboard-arrow-right" color="#1DA069" size={20} />
            <Paragraph style={styles.greyTitle}>
              Etiam neque justo, posuere faucibus tincidunt
            </Paragraph>
          </View>

          <Title style={styles.coloredTitle}>ABOUT ME</Title>
          <Paragraph style={styles.greyTitle}>
            Aenean suscipit a enim id scelerisque. Aliquam pharetra nisl nec
            iaculis viverra. Praesent non hendrerit tortor. Nulla euismod urna
            sit amet risus pharetra, quis hendrerit magna commodo. Nulla
            accumsan volutpat purus, at laoreet nibh ullamcorper eu. Sed
            consequat lacus ullamcorper elit laoreet, et ultrices lacus
            imperdiet.
          </Paragraph>
          <Title style={styles.coloredTitle}>CATEGORIES</Title>
          <Paragraph style={styles.greyTitle}>
            Relationship coaching psychic readings tarot readings
          </Paragraph>
          <Title style={styles.coloredTitle}>REVIEWS</Title>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderBottomColor: 'grey',
              borderBottomWidth: 2,
              padding: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="emoticon-happy-outline" color="#1DA069" size={25} />
              <Paragraph style={{fontWeight: 'bold'}}> 12 Reviews</Paragraph>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="emoticon-sad-outline" color="gold" size={25} />
              <Paragraph style={{fontWeight: 'bold'}}> 6 Reviews</Paragraph>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="emoticon-happy-outline" color="#1DA069" size={25} />
              <Paragraph style={{fontWeight: 'bold'}}> Alein</Paragraph>
            </View>
            <View>
              <Paragraph style={styles.greyTitle}>
                May 30, 2020 6:24 AM
              </Paragraph>
            </View>
          </View>
          <Paragraph style={styles.reviewText}>
            Really good. Psychis is the real deal!
          </Paragraph>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="emoticon-happy-outline" color="#1DA069" size={25} />
              <Paragraph style={{fontWeight: 'bold'}}> John Doe</Paragraph>
            </View>
            <View>
              <Paragraph style={styles.greyTitle}>
                May 30, 2020 6:24 AM
              </Paragraph>
            </View>
          </View>
          <Paragraph style={styles.reviewText}>
            Really good. Psychis is the real deal!
          </Paragraph>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="emoticon-happy-outline" color="#1DA069" size={25} />
              <Paragraph style={{fontWeight: 'bold'}}> Foo Baz</Paragraph>
            </View>
            <View>
              <Paragraph style={styles.greyTitle}>
                May 30, 2020 6:24 AM
              </Paragraph>
            </View>
          </View>
          <Paragraph style={styles.reviewText}>
            Really good. Psychis is the real deal!
          </Paragraph>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="emoticon-happy-outline" color="#1DA069" size={25} />
              <Paragraph style={{fontWeight: 'bold'}}> Najaf</Paragraph>
            </View>
            <View>
              <Paragraph style={styles.greyTitle}>
                May 30, 2020 6:24 AM
              </Paragraph>
            </View>
          </View>
          <Paragraph style={styles.reviewText}>
            Really good. Psychis is the real deal!
          </Paragraph>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: 'transparent',
  },
  pattren: {
    width: '100%',
    // height: 250,
    position: 'absolute',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  headerView: {
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 25,
    marginVertical: 30,
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
  reviewText: {
    color: 'grey',
    marginBottom: 20,
    marginTop: 10,
  },
  textGrey: {color: 'grey'},
  avatarView: {
    marginRight: 15,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  ac: {color: '#93288D', textAlign: 'center', marginBottom: 15},
  icon: {
    marginLeft: 5,
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

export default Advisor;
