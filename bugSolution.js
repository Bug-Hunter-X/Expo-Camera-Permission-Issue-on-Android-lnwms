import { Camera, requestCameraPermissionsAsync } from 'expo-camera';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraError, setCameraError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      } catch (error) {
        setCameraError(error);
      }
    })();
  }, []);

  if (cameraError) {
    return <Text>Error accessing camera: {cameraError.message}</Text>;
  }

  if (hasPermission === null) {
    return <View/>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              backgroundColor: 'transparent',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, color: 'white' }}>Flip</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default App; 