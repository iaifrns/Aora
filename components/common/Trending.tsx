import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";

interface PostType {
    post: {
        id: number;
    }[];
}

const Trending:React.FC<PostType> = ({post}) => {
  return (
    <FlatList
    data={post}
    renderItem={(item) => (
      <Text className="text-white text-3xl">{item.item.id}</Text>)}
      horizontal
     />
  );
};

export default Trending;
