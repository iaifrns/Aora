import { icons } from "@/constants";
import { VideoType } from "@/types/video";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ImageStyle,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  ViewToken
} from "react-native";
import * as Animatable from "react-native-animatable";
import WebView from "react-native-webview";

interface PostType {
  posts: VideoType[];
}

interface TrendingItemType {
  activeItem: string;
  item: VideoType;
}

const zoomIn: Animatable.CustomAnimation<TextStyle & ViewStyle & ImageStyle> = {
  0: {
    transform: [{ scale: 0.9 }],
  },
  1: {
    transform: [{ scale: 1.1 }],
  },
};

const zoomOut: Animatable.CustomAnimation<TextStyle & ViewStyle & ImageStyle> =
  {
    0: {
      transform: [{ scale: 1 }],
    },
    1: {
      transform: [{ scale: 0.9 }],
    },
  };

const TrendingItem: React.FC<TrendingItemType> = ({ activeItem, item }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.id ? zoomIn : zoomOut}
      duration={500}
    >
      {isPlaying ? (
        <WebView source={{ uri: item.video }} style={styles.webview} />
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => {
            setIsPlaying(true);

            console.log("button clicked", isPlaying, item.video);
          }}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending: React.FC<PostType> = ({ posts }) => {
  const [activeItem, setActiveItem] = useState<string>(posts[1].id!);

  const viewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken<VideoType>[];
  }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      renderItem={(item) => (
        <TrendingItem item={item.item} activeItem={activeItem} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      contentOffset={{ x: 170, y: 0 }}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    width: 208,
    height: 288,
    borderRadius: 35,
  },
});

export default Trending;
