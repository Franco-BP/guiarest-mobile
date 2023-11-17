import React from 'react';
import SearchLayout from '../Layouts/SearchLayout';

export default function SearchScreen({ restaurants, navigation }){
  return(
    <SearchLayout restaurants={restaurants} navigation={navigation} />
  );
};