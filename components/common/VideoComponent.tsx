import { icons } from "@/constants";
import { UserType } from "@/types/user";
import { VideoType } from "@/types/video";
import React, { Component, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface VideoComponentType {
  videoData: VideoType;
  user?: UserType;
}

const VideoComponent: React.FC<VideoComponentType> = ({ videoData, user }) => {
  const { title, id, thumbnail, prompt, video, uid } = videoData;
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <View className="px-4 flex-col gap-4" >
      <View className="py-4 w-full">
        <View className="flex-row justify-between items-start">
          <View className="flex-row gap-2">
            <View className="border border-secondary rounded-lg p-[2px]">
              <View className="p-2 rounded-lg bg-blue-400 w-10">
                <Text className="text-white text-2xl font-psemibold">
                  {user?.username ? user.username[0].toLocaleUpperCase() : ""}
                </Text>
              </View>
            </View>
            <View>
              <Text className="text-white text-lg font-psemibold">{title}</Text>
              <Text className="text-sm text-gray-200">{user?.username}</Text>
            </View>
          </View>
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
        {isPlaying ? (
          <Text className="text-white">video playing</Text>
        ) : (
          <TouchableOpacity activeOpacity={0.7} onPress={() => setIsPlaying(true)} className="w-full h-60 justify-center items-center">
            <Image
              source={{ uri: thumbnail }}
              className="w-full h-full rounded-xl mt-3"
              resizeMode="cover"
            />
            <Image source={icons.play} className="w-12 h-12 absolute" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default VideoComponent;
