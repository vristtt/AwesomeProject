import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      {/* HEADER */}

          <View style={{
       flexDirection:'row',
       height : 60,
       justifyContent : 'space-between', height : 60, 
       alignItems : 'center',
       backgroundColor : 'red',
       marginTop : 16,
       marginHorizontal : 16,
       padding : 16,
       borderRadius : 40,
      }}>
           <Image resizeMode='contain' style={{ height : 40, width :150}} source={require ('./src/assets/images/mhs.png')}/>
        
               <View style={{height:40, width:40, borderRadius: 20, backgroundColor :'yellow'}}>
      
               </View>
            </View>
            <View style={{
              flexDirection: 'row',
              marginTop:20,
            }}>
            <View
            style={{
              borderWidth: 1,
              padding: 12,
              flex: 1,
            }}>
            
            <View style={{
              height:200,
              backgroundColor: 'red',
              borderRadius: 8,

            }}>
             
            </View> 
            <Text>Nasi Tumpeng</Text>
            <Text>Rp 24.000</Text>
              
            </View>
            <View
            style={{
              borderWidth: 1,
              padding: 12,
              flex: 1,
            }}>
            
            <View style={{
              height:200,
              backgroundColor: 'red',
              borderRadius: 8,

            }}>
              
            </View>
            <Text>Nasi Pecel</Text>
            <Text>Rp 15.000</Text>
            </View>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
            <View
            style={{
              borderWidth: 1,
              padding: 12,
              flex: 1,
            }}>
            
            <View style={{
              height:200,
              backgroundColor: 'red',
              borderRadius: 8,

            }}>
             
            </View> 
            <Text>Nasi Tumpeng</Text>
            <Text>Rp 24.000</Text>
              
            </View>
            <View
            style={{
              borderWidth: 1,
              padding: 12,
              flex: 1,
            }}>
            
            <View style={{
              height:200,
              backgroundColor: 'red',
              borderRadius: 8,

            }}>
              
            </View>
            <Text>Nasi Pecel</Text>
            <Text>Rp 15.000</Text>
            </View>
            </View>
      </View>


  )
}

export default App