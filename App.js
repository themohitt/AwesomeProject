import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  View,
  FlatList,
  Button,
   } from 'react-native';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
export default function App() {
const[modalIsVisble, setModalIsVisble]= useState(false);
const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisble(true);
  }

  function endAddGoalHandler(){
    setModalIsVisble(false);
  }

function addGoalHandler(enteredGoalText) {

    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
function deleteGoalHandler(id){
  setCourseGoals(currentCourseGoals =>{
    return currentCourseGoals.filter((goal) => goal.id !==id);
  });
}

  return (
    <>
    <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal'
          color={"#a065ec"}
          onPress={startAddGoalHandler}
        />
        <GoalInput 
        visible={modalIsVisble}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}

        />
         <View style={styles.goalsContainer}>
          <FlatList 
          data={courseGoals}
          renderItem={itemData => {
            return(< GoalItem text= {itemData.item.text}
              id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}/>);
          } } 
          keyExtractor={(item , index) =>{
            return item.id;
          }}
          alwaysBounceVertical={false}/>
         </View>
      
      </View>
      </>
  );
}
const styles = StyleSheet.create({
  appContainer: {
   flex: 1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor:'#1e085a'
  },
  goalsContainer: {
    flex:5,
  },
});

