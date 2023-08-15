import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Category_card = ({imgurl, title}) => {
  return (
    <TouchableOpacity className='relative mr-2 '>
         
         <Image source={{
            uri: imgurl,
         }}
         
         className='h-20 w-20 rounded-md'
         />
         <Text className='absolute bottom-1 left-1 font-bold text-white' >{title}</Text>
    </TouchableOpacity>
     
   
  )
}

export default Category_card