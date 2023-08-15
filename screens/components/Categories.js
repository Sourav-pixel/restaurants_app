import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Category_card from './Category_card'

const Categories = () => {
  return (
 <ScrollView 
 contentContainerStyle={{ 
paddingHorizontal:15,
paddingTop:18,

 }}
 horizontal
 showsHorizontalScrollIndicator={false}
 >
     <Category_card 
     imgurl='https://shft.cl/img/i/image-75231791323630420.jpg'
     title='Biriyani'
     /> 
     <Category_card
      imgurl='https://shft.cl/img/i/image-75231924312217540.jpg'
      title='Noodles'
     />
       <Category_card
       imgurl='https://shft.cl/img/i/image-75232096058875200.jpg'
       title='Burger'
      />
       <Category_card
  imgurl='https://shft.cl/img/i/image-75232053724717200.jpg'
  title='Pizza'
 />
 <Category_card
  imgurl='https://shft.cl/img/e/encrypted-tbn0.gstatic.com-75232151618898740.jpg'
  title='Rolls'/>


    
      </ScrollView>




  )
}

export default Categories