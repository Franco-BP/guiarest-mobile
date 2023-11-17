import React from 'react';
import ShowLayout from '../Layouts/ShowLayout';

export default function ShowScreen({ route, navigation }){
  return(
    <ShowLayout route={route} navigation={navigation} />
  )
};