import EmptyListComponent from "@/components/common/EmptyListComponent";
import LoaderScreen from "@/components/common/LoaderScreen";
import SearchBarComponent from "@/components/common/SearchBarComponent";
import Trending from "@/components/common/Trending";
import VideoComponent from "@/components/common/VideoComponent";
import { images } from "@/constants";
import { ResponseStatus } from "@/enum/ResponseStatus";
import useGetVideosAndUsers from "@/hooks/useGetVideosAndUsers";
import getRandomVideos from "@/services/getRandomVideos";
import { VideoType } from "@/types/video";
import React, { useCallback } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const {res : response, refresher} = useGetVideosAndUsers()
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refresher();
    console.log("fetching data");
    setRefreshing(false);
  }, []);
  

  if (response?.status == ResponseStatus.LOADING) {
    return <LoaderScreen />;
  }

  console.log(response?.users)

  return (
    <SafeAreaView className="w-full bg-primary h-full">
      <FlatList
        data={response?.videos as VideoType[]}
        renderItem={(item) => (
          <VideoComponent videoData={item.item} user={response?.users?.filter(user=> user.id == item.item.uid)[0]} />
        )}
        keyExtractor={(item) => item?.id ?? ""}
        ListHeaderComponent={() => (
          <View
            className="px-4 gap-6"
            style={{ marginTop: 20, marginBottom: 30 }}
          >
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-white text-lg font-pmedium">
                  welcome Back
                </Text>
                <Text className="text-white text-3xl font-psemibold">User</Text>
              </View>
              <View>
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchBarComponent />
            <View>
              <Text className="text-gray-100 text-lg font-pregular">
                Trending Video
              </Text>
              <Trending posts={getRandomVideos(response?.videos ?? [])} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyListComponent
            title="No Videos Found"
            subTitle="Be the first one to upload a video"
            buttonText="Create video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
