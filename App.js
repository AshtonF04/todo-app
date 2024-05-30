import { StatusBar } from 'expo-status-bar';
import { Platform, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.taskview}>
            <Text style={styles.headertext}>Today's Tasks</Text>

            <View style={styles.items}>
              <Task text="Study For Exam"/>
              <Task text="Do Laundry"/>
              <Task text="Write Code"/>
              <Task text="Make Lunch For Tomorrow"/>
            </View>
        </View>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

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
});
