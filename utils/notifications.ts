import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";

export async function registerForPushNotificationsAsync() {
    if (!Device.isDevice) {
        alert("Push notifications are only supported on physical devices.");
        return;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }

    if (finalStatus !== "granted") {
        alert("Permission for push notifications was denied.");
        return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Push Token:", token);

    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
        });
    }

    return token;
}

export async function sendLocalNotification(title: string, body: string) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title,
            body,
            data: { customData: "value" },
        },
        trigger: null,
    });
}
