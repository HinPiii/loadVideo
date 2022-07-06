import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableWithoutFeedback, Image, ActivityIndicator } from 'react-native'
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Post = () => {

    const [status, setStatus] = useState(false);

    const ip = '192.168.1.6';

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://${ip}:3000/video`)
            .then(response => response.json())
            .then(responseJson => {
                responseJson.map((video) => {
                    setData(video.data.videos);
                })
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, [])

    const handlePlayPause = () => {
        setStatus(!status);
    }

    return (
        <SafeAreaView>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={handlePlayPause}>
                        <Video
                            source={{ uri: data[0].play }}
                            style={styles.video}
                            resizeMode={'cover'}
                            repeat={true}
                            paused={status}
                        />
                    </TouchableWithoutFeedback>
                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>
                            <View style={styles.profilePictureContainer}>
                                <Image
                                    style={styles.profilePicuter}
                                    source={{ uri: data[0].author.avatar }}
                                />
                            </View>

                            <View style={styles.iconContainer}>
                                <AntDesign name={'heart'} size={35} />
                                <Text style={styles.statsLabel}>{data[0].digg_count}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <FontAwesome name={'commenting'} size={35} />
                                <Text style={styles.statsLabel}>{data[0].comment_count}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Fontisto name={'share-a'} size={35} />
                                <Text style={styles.statsLabel}>{data[0].share_count}</Text>
                            </View>
                        </View>
                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>
                                    @{data[6].author.nickname}
                                </Text>
                                <Text style={styles.description}>
                                    {data[6].title}
                                </Text>
                                <View style={styles.songRow}>
                                    <Entypo name={'beamed-note'} size={24} />
                                    <Text numberOfLines={1} style={styles.songName}>{data[0].music_info.title}</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            )}
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
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: 'space-between',
        marginRight: 5,
        marginBottom: 30,
    },
    bottomContainer: {
        padding: 10,
    },
    handle: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '700'
    },
    description: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '300'
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    songName: {
        marginLeft: 5,
        fontSize: 16,
        width: '50%'
    },
    profilePicuter: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff'
    },
    iconContainer: {
        alignItems: 'center'
    },
    statsLabel: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 5,
    }
})

export default Post;