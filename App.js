import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('./KANE.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>Mokholane Kanei</Text>
          <Text style={styles.info}>Student Number: 901016538</Text>
          <Text style={styles.info}>Current semester: 2</Text>
        </View>
      </View>
      <View style={styles.gradesContainer}>
        <Text style={styles.heading}>GRADES</Text>
        <View style={styles.gradeItem}>
          <Text style={styles.course}>Probability and Statistics</Text>
          <Text style={styles.grade}>A</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text style={styles.course}>Software Modeling and Analysis</Text>
          <Text style={styles.grade}>B+</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text style={styles.course}>Database Management</Text>
          <Text style={styles.grade}>B</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  profileDetails: {
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
  gradesContainer: {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gradeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  course: {
    fontSize: 16,
  },
  grade: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});
