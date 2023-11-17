import React from 'react';
import RestaurantLayout from '../Layouts/RestaurantLayout';

export default function RestaurantScreen({ route, navigation }){
  return(
    <RestaurantLayout route={route} navigation={navigation} />
  )
};