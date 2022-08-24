import { useState } from 'react';
import {
View,
TextInput, 
Button, 
StyleSheet, 
Modal,
Image,
} from 'react-native';

function GoalInput(props){

const [enteredGoalText, setEnteredGoalText] = useState('');
function goalInputHandler(enteredText) {
setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
}
    return(
        <Modal 
        visible={props.visible} 
        animationType="slide"
        >
        <View style={styles.inputContainer}> 
        <Image 
              style={styles.images}
              source={require('../assets/images/1.png')}
        /> 
      
      <TextInput 
           style={styles.textInput} 
           placeholder='your course goal'
           onChangeText={goalInputHandler}
           value={enteredGoalText}
      />
      <View style={styles.ButtonContainer}>
        <View style={styles.Button}>
      <Button 
            title='Add Goal' 
            onPress={addGoalHandler}
            color="#b180f0"
            />
            </View>
            <View style={styles.Button}>
      <Button title='Cancel'
              onPress={props.onCancel}
              color="#f31282"
      />
            </View>
                   </View>
       </View>
       </Modal>
    );
};

export default GoalInput;
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding:16,
        alignItems: 'center',
        backgroundColor:'#311b6b'
      },
      images:{
        width:240,
        height:240,
        margin:20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '100%',
        marginRight: 8,
        borderRadius:6,
        padding:16,
        padding:8,
        color:'#120438',
        backgroundColor:'#e4d0ff',
      },
      ButtonContainer:{
        flexDirection:'row',
        marginTop:16,
      },
      Button:{
        width:100,
        marginHorizontal:8,
      },
});