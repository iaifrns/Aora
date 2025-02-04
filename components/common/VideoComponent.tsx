import { UserType } from "@/types/user";
import { VideoType } from "@/types/video";
import React, { Component } from "react";
import { Text, View } from "react-native";

interface VideoComponentType {
  videoData: VideoType;
  user?: UserType;
}

const VideoComponent: React.FC<VideoComponentType> = ({ videoData, user }) => {
  const { title, id, thumbnail, prompt, video, uid } = videoData;
  console.log(user)
  return (
    <View className="px-4 flex-col gap-4">
      <View className="py-2 w-full">
        <View className="flex-row justify-between">
          <View className="p-2 rounded-lg bg-secondary-100 w-10">
            <Text className="text-white text-2xl font-psemibold">
              {user?.username ? user.username[0].toLocaleUpperCase() : ""}
            </Text>
          </View>
        </View>
      </View>
      <Text className="text-white"> {title} </Text>
    </View>
  );
};

export default VideoComponent;
