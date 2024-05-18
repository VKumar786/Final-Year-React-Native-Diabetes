import { Text, Platform, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'web' ? (
        <iframe
          width="100%"
          height="100vh"
          style={{ flex: 1, padding: 0, border: 0 }}
          src="http://diabetes-prediction-ccvi.onrender.com/"
          allow="autoplay; encrypted-media"></iframe>
      ) : (
        <WebView
          source={{ uri: 'http://diabetes-prediction-ccvi.onrender.com/' }}
          style={{
            flex: 1,
            backgroundColor: 'red',
            marginTop: 20,
          }}
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 25,
  },
});
