import { View, Text,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native'

const ResturantCard = ({id,imgurl,title,addres,dishes,rat,log,lat}) => {
  return (
    <View className='bg-white mr-3 shadow'>
    <TouchableOpacity  >

    <Image source={{
            uri: imgurl,
         }}
className='h-40 w-80 rounded-sm'
/>
<View className='px-3 pb-4 '>
<Text className='font-bold pt-2 text-lg'> {title}</Text>
<Icon name="star" size={22} color="#adadad"/><Text>{rat}</Text>

</View>

    </TouchableOpacity>
    </View>
  )
}

export default ResturantCard