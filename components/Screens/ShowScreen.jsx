import React from 'react';
import ShowLayout from '../Layouts/ShowLayout';

export default function ShowScreen({ show, navigation }){
  return(
    <ShowLayout show={show} navigation={navigation} />
  )
};