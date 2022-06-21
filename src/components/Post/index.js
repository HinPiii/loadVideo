import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native'
import Video from 'react-native-video';

const Post = () => {

    const [status, setStatus] = useState(false);

    const handlePlayPause = () => {
        setStatus(!status);
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={handlePlayPause}>
                    <Video
                        source={{ uri: 'https://v16-webapp.tiktok.com/938bc2e656c505023ac741340590eeac/62b20e7d/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ef4c68d43eb947f7bba3c8f6e42f4e0d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2776&bt=1388&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8Zi4xZwe2NAuQml7Gb&mime_type=video_mp4&qs=0&rc=ZTpmaWk2ZGY3ZDs1ZjxlZEBpMzpkcWk6Zmh1ZDMzZjgzM0AzNTEzMzYyNi4xYi42Xi80YSMuaWItcjQwampgLS1kL2Nzcw%3D%3D&l=20220621123115010245057184270C7DC2' }}
                        style={styles.video}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={status}
                    />
                </TouchableWithoutFeedback>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

    },
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
    }
})

export default Post;