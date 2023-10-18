/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ContactCard from '../components/ContactCard';

const contacts = [
  {
    name: 'John Doe',
    contactNumber: '1234567890',
    shreni: 'Category1',
    lastContactOn: '2023-10-13',
    nextContactOn: '2023-10-20',
  },
  {
    name: 'Jane Smith',
    contactNumber: '0987654321',
    shreni: 'Category2',
    lastContactOn: '2023-10-14',
    nextContactOn: '2023-10-21',
  },
  {
    name: 'Bob Johnson',
    contactNumber: '1122334455',
    shreni: 'Category3',
    lastContactOn: '2023-10-15',
    nextContactOn: '2023-10-22',
  },
  {
    name: 'Alice Williams',
    contactNumber: '6677889900',
    shreni: 'Category4',
    lastContactOn: '2023-10-16',
    nextContactOn: '2023-10-23',
  },
  {
    name: 'Jane Smith',
    contactNumber: '0987654321',
    shreni: 'Category2',
    lastContactOn: '2023-10-14',
    nextContactOn: '2023-10-21',
  },
  {
    name: 'Bob Johnson',
    contactNumber: '1122334455',
    shreni: 'Category3',
    lastContactOn: '2023-10-15',
    nextContactOn: '2023-10-22',
  },
  {
    name: 'Alice Williams',
    contactNumber: '6677889900',
    shreni: 'Category4',
    lastContactOn: '2023-10-16',
    nextContactOn: '2023-10-23',
  },
];


function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {contacts.map((contact, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('ContactDetails', { name: contact.name})}>
          <ContactCard {...contact} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
});

export default Home;
