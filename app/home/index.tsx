import { Stack } from "expo-router";
import { Platform, View } from "react-native";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "My home",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          headerTitle: (props) => null,
        }}
      />
      {Platform.OS === "web" ? (
        <iframe
          width="100%"
          height="100vh"
          style={{ flex: 1, padding: 0, border: 0 }}
          src="http://diabetes-prediction-ccvi.onrender.com/"
          allow="autoplay; encrypted-media"
        ></iframe>
      ) : (
        <WebView
          source={{
            html: '<iframe width="100%" height="100vh" style="flex: 1; padding: 0; border: 0;" src="http://diabetes-prediction-ccvi.onrender.com/" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          }}
          style={{ marginTop: 20 }}
        />
      )}
    </View>
  );
}
