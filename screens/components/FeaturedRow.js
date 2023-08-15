import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';
import ResturantCard from './ResturantCard';
const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
     <View className='mt-5 flex-row items-center justify-between px-4'>

        <Text className='text-lg font-bold '>{title}</Text>
       
        <Icon name="arrow-forward" size={30} color="#fcba03"/>
     </View>
     <Text className="text-xs text-gray-500 px-4">{description}</Text>

     <ScrollView 
     horizontal
     contentContainerStyle={{ paddingHorizontal:15,}}
     showsHorizontalScrollIndicator={false}
     className="pt-4"
     > 
<ResturantCard
imgurl='https://shft.cl/img/i/image-75238583556963550.jpg'
title="title"
rat='4.3'
/>
<ResturantCard
imgurl='https://shft.cl/img/i/image-75238583556963550.jpg'
title="title"
rat='4.3'
/>
<ResturantCard
imgurl='https://shft.cl/img/i/image-75238583556963550.jpg'
title="title"
rat='4.3'
/>
<ResturantCard
imgurl='https://shft.cl/img/i/image-75238583556963550.jpg'
title="title"
rat='4.3'
/>



     </ScrollView>
    </View>
  )
}

export default FeaturedRow