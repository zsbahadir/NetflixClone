//React-Native
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//Video Player
import Video from 'react-native-video';

//Style
import styles from './VideoCustom.style';



const VideoCustom = ( props ) => {

  const { videoSource, onPress } = props;

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };
  

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Video
          ref={videoRef}
          source={{ uri: videoSource }}
          style={styles.video}
          resizeMode="cover"
          paused={!isPlaying}
          repeat={true}
        />
        <TouchableOpacity
          style={styles.playButton}
          onPress={handlePlayPause}
        >
          {isPlaying ? (
            <Text style={styles.text}>Pause</Text>
          ) : (
            <Text style={styles.text}>Play</Text>
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

  
export default VideoCustom;
