import { VideoType } from "@/types/video";

const getRandomVideos = (videos : VideoType[]) => {
    const group: Record<number, VideoType> = {}
    let i = 0
    const len = videos.length
    while(i< 5){
        const j = Math.floor(Math.random() * (len+1))
        if(!group[j]){
            console.log(j)
            group[j] = videos[j]
            i++;
        }
    }
    return Object.values(group)
}

export default getRandomVideos