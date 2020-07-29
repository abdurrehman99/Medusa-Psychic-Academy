import React from 'react';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Subheading,
  useTheme,
} from 'react-native-paper';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const MyCard = ({name, speciality, image, width, online}) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    card: {
      width: width ? width : 180,
      marginRight: 25,
      flex: 1,
      shadowColor: '#00000029',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 4,
      marginBottom: 8,
    },
    badge: {
      transform: [{rotate: '0deg'}],
      position: 'absolute',
      zIndex: 200,
      left: 0,
      bottom: 110,
      backgroundColor: online ? '#1C8D02' : 'grey',
      width: 80,
      padding: 3,
    },
    badgeText: {
      textAlign: 'center',
      fontSize: 13,
      color: 'white',
      fontWeight: 'bold',
    },
  });
  return (
    <Card style={styles.card}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{online ? 'Online' : 'Offline'}</Text>
      </View>
      <Card.Cover style={{height: 160}} source={{uri: `${image}`}} />
      <Card.Content style={{marginTop: 5}}>
        <Title style={{marginVertical: 0}}>{name}</Title>
        <Subheading style={{color: 'grey', marginVertical: 0}}>
          {speciality}
        </Subheading>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Icon name="star" style={{marginRight: 5}} color="gold" size={22} />
          <Icon name="star" style={{marginRight: 5}} color="gold" size={22} />
          <Icon name="star" style={{marginRight: 5}} color="gold" size={22} />
          <Icon name="star" style={{marginRight: 5}} color="gold" size={22} />
          <Icon name="star" style={{marginRight: 5}} color="gold" size={22} />
        </View>
      </Card.Content>
    </Card>
  );
};

export default MyCard;
