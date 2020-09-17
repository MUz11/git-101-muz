import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image, TextInput,Button } from 'react-native';
import MyButton from './components/MyButton.js'


export default function App() {
  const [input,setInput] = useState ('')
  const [color,setColor] = useState ('red')
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://cdn.discordapp.com/attachments/517755806578507795/746636258746302544/116152305_282582892974841_1538763363283477284_n.jpg?fbclid=IwAR0BY5ReItarSravuK8MEPO8n2vH1PFocqbq6JaTqTdWvYO7whtlKhI_K3E' }}
        style={styles.logo}
      />
      <Text style={styles.title} > พี่เล็ก SE 60</Text>
      <Text> โสด น้ำแห้งมา 22 ปีแล้ว #รักจริง #ไม่เอาเฟรนโซน</Text>
      <TextInput 
        value = {input}
        onChangeText={(text) => { setInput(text)} }
        placeholder="   บอกความในใจแด่พี่เล็ก ตรงนี้ ตรงนี้ ตรงนี้  "
        style={styles.input}>
          
        </TextInput>
        <Text
        style={{fontSize: 18, marginTop:20, color:color}}>{input}</Text>
        <Text> ความรักของคุณที่มีต่อพี่เล็กสีไหนกันนะ...♥</Text>
      {/* <TextInput placeholder="  บอกความในใจแด่พี่เล็ก ตรงนี้ ตรงนี้ ตรงนี้" style={styles.input}></TextInput> */}
         <View style={styles.buttonLayout}>
           <MyButton title='รักพี่เล็กกด1' color='red' onChangeColor={(color) => { setColor(color) }} />
           <MyButton title='รักพี่เล็กกด2' color='blue' onChangeColor={(color) => { setColor(color) }} />
           <MyButton title='รักพี่เล็กกด3' color='green' onChangeColor={(color) => { setColor(color) }} />


            {/* <Button title='รักพี่เล็กกด1' color='red' onPress={() =>{setColor('red')} } /> 
            <Button title='รักพี่เล็กกด2' color='blue' onPress={() =>{setColor('blue')} }/> 
            <Button title='รักพี่เล็กกด3' color='green' onPress={() =>{setColor('green')} }/>  */}
          </View> 
         
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99FF99',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    width : 150,
    height: 150,

  },
  title:{
    fontSize:35,
    fontWeight:'bold',
    marginTop:20,
  },
  input:{
    height:40,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth:1,
    width:'70%',
    marginTop : 20

  },
  buttonLayout:{
    flexDirection: 'row',
    marginTop: 20

  }
  
});



