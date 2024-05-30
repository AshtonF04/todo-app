import { StatusBar } from 'expo-status-bar';
import { Button, Platform, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.taskview}>
            <Text style={styles.headertext}>Today's Tasks</Text>

            <View style={styles.items}>
              <Task text="Study For Exam"/>
              <Task text="Write Code"/>
            
            </View>
        </View>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.addWrapper}>
          
          <TextInput style={styles.textInput}>Write a task</TextInput>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addtext}>+</Text>
          </TouchableOpacity>
         
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskview: {
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  headertext: {
    fontSize: 26,
    fontWeight: "bold"
  },
  items: {
    marginVertical: 25,
  },
  addWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  textInput: {
    backgroundColor: "#FFF",
    paddingVertical: 20,
    borderRadius: 60,
    width: 275,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: "#FFF",
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
  addtext: {
    fontSize: 30,
  },  
});
