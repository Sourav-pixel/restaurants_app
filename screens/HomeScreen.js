import { View, Text,Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';
import Categories from './components/Categories';
import  FeaturedRow  from './components/FeaturedRow';
import ResturantCard from './components/ResturantCard';


const HomeScreen = () => {

const navigation = useNavigation();

useLayoutEffect(() => {
navigation.setOptions({
    headerShown: false,
    
})
},[])


  return (
    <SafeAreaView>
    <SafeAreaView className="bg-white pt-5">
    <View className="flex-row pd-3 items-center mx-4  space-x-2" >
<Image
source={{uri: 'data:image/png;base64,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'}}
className="h-7 w-7 bg-gray-300 p-4 rounded-full"
/>

<View className="flex-1">
        <Text className="font-bold text-gray-400 text-x5">Deliver Now</Text>
        <Text className="font-bold text-xl">Current Location
        <Icon name="location-on" size={20} color="#fcba03" />
        </Text>
      
    </View>
    <Icon2 name="user" size={30} color="#fc8803"  />
    </View>
    <View className="flex-row items-center space-x-2 pb-2 mx-4 pt-2">
  <View className="flex-row space-x-2 p-3 bg-gray-200 flex-1 rounded-full " >
  <Icon name="search" size={22} color="#fcba03"/>
  <TextInput placeholder="Search stores and dishes" keyboardType='default' />
   </View>

      <Icon name="tune" size={25} color="#fcba03"/>
 
  </View>

 
    </SafeAreaView>
    <ScrollView
    contentContainerStyle={{ paddingBottom:100 }}
    >
<Categories/>

<FeaturedRow
title="Special"
description='descriptions'
// Categories={categories}
>
</FeaturedRow>



<FeaturedRow
title="Discount%"
description='descriptions'
// Categories={categories}
>
</FeaturedRow>


<FeaturedRow

title="Dinner"
description='descriptions'
// Categories={categories}
>
</FeaturedRow>


</ScrollView>


    </SafeAreaView>
    
  )
}

export default HomeScreen

