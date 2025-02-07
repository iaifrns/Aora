import { icons } from "@/constants";
import { UserType } from "@/types/user";
import { VideoType } from "@/types/video";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface VideoComponentType {
  videoData: VideoType;
  user?: UserType;
}

const VideoComponent: React.FC<VideoComponentType> = ({ videoData, user }) => {
  const { title, id, thumbnail, prompt, video, uid } = videoData;
  const v =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const player = useVideoPlayer(v, (player) => {
    (player.loop = true), player.pause();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <View className="px-4 flex-col gap-4">
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
          <VideoView player={player} style={styles.videoStyle} nativeControls allowsFullscreen />
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              isPlaying ? player.pause() : player.play( )
            }}
            className="w-full h-60 justify-center items-center"
          >
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

const styles = StyleSheet.create({
  videoStyle: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginTop: 12,
    backgroundColor: 'rgba(255,255,255,0.1)'
  }
})

export default VideoComponent;
