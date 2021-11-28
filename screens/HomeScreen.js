import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from
 'react-native-google-places-autocomplete';
 import { GOOGLE_MAPS_APIKEY } from "@env";


export default function HomeScreen() {
    return (
     
            <SafeAreaView style={tw`bg-white h-full `}>
       <View style={tw`p-5`}>
           <Image
           style={{
               width: 100,height:100,resizeMode:'contain'
           }}
           source={{
               uri:"https://links.papareact.com/gzs"
           }}
           />
            <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBKp__Db2tw0IytzFEZNcPH_Au5K65MXwA',
        language: 'en',
      }}
    />
           
           {/* <GooglePlacesAutocomplete
          
           placeholder="Where From?"
           styles={{
            container:{
                flex: 0,
            },
            textInput:{
                fontSize:18,
                //  backgroundColor:'black'
            }

        }}
      
          query={{
            key: 'AIzaSyBKp__Db2tw0IytzFEZNcPH_Au5K65MXwA',
            language: 'en',
          }}
    
           nearbyPlacesAPI="GooglePlacesSearch"
           debounce={40}
           /> */}
           <NavOptions/>
       </View>
            </SafeAreaView>
   
    )
}

const styles = StyleSheet.create({})
