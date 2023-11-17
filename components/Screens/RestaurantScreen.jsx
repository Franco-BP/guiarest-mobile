import React from 'react';
import RestaurantLayout from '../Layouts/RestaurantLayout';

export default function RestaurantScreen({ restaurant, navigation }){
  return(
    <RestaurantLayout restaurant={restaurant} navigation={navigation} />
  )
};