import React, { useContext } from 'react';
import { 
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Carousel from '../Carousel/Carousel';
import RestaurantItem from '../Items/RestaurantItem';
import SearchBarButton from '../SearchBarButton';
import ShowItem from '../Items/ShowItem';
import { storeContext } from '../Context/StoreProvider';

const HomeLayout = ({ navigation }) => {
  const [store, dispatch] = useContext(storeContext);
  const mainAds = store.mainAds;
  const restaurants = store.restaurants;
  const shows = store.shows;

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#f3f6f4',
    },
  });

  return (
    <ScrollView style={styles.scrollView}>
      <Carousel carouselData={mainAds} />

      <SearchBarButton navigation={navigation} restaurants={restaurants} />

      <FlatList
        style={{backgroundColor: 'transparent'}}
        data={restaurants}
        renderItem={({item}) =>
          <RestaurantItem
            item={item}
            navigation={navigation}
          />
        }
        keyExtractor={item => item.imageLink}
        horizontal={true}
      />

      <FlatList
        data={shows}
        renderItem={({item}) => 
          <ShowItem
            item={item}
            navigation={navigation}
          />
        }
        keyExtractor={item => item.title}
        horizontal={true}
      />
    </ScrollView>
  )
}

export default HomeLayout;