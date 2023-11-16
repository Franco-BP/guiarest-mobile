import React from 'react'
import { Dimensions, FlatList, StyleSheet, View, Text } from 'react-native';
import CarouselItem from '../Items/CarouselItem';

const Carousel = ({ carouselData }) => {
  const dimensionsWidth = Dimensions.get('window').width;
  const dimensionsHeight = Dimensions.get('window').height;

  const [index, setIndex] = React.useState(0);
  const indexRef = React.useRef(index);
  indexRef.current = index;

  const styles = StyleSheet.create({
    container: {
      height: dimensionsHeight/4,
      width: dimensionsWidth,
      justifyContent: 'center',
      alignContent: 'center',
    },
    flatlist: {
      flex: 1,
    },
    genericIndicator: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
    },
  })

  const onScroll = React.useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Previene que setIndex se dispare en el medio de la transición.
    // Se tiene que scrollear un poco más para que cambie.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const renderIndicator = () => {
    const indicators = [];
    carouselData.map((val, key) =>
      indicators.push(
        <Text
          key={key}
          style={
            key === index % carouselData.length
            ? {
              color: 'white',
              fontSize: 10,
              marginBottom: 8,
              marginHorizontal: 1,
            }
            : {
              color: '#888',
              fontSize: 10,
              marginBottom: 8,
              marginHorizontal: 1,
            }
          }>
          ⬤
        </Text>,
      ),
    );
    return indicators;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={carouselData}
        style={styles.flatlist}
        renderItem={({ item }) => <CarouselItem title={item.title} imageLink={item.imageLink} /> }
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      <View
          style={styles.genericIndicator}>
          {renderIndicator()}
      </View>
    </View>
  )
}



export default Carousel