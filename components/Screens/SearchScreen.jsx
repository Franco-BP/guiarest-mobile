import React from 'react';
import SearchLayout from '../Layouts/SearchLayout';

export default function SearchScreen({ route, navigation }){
  return(
    <SearchLayout route={route} navigation={navigation} />
  );
};