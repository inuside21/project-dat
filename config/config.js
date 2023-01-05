import { Alert } from "react-native";

export const ConfigConnection = {
    // with slash
    server: "https://agri-dat.online/server/",
    image: "https://agri-dat.online/server/image/",
}

export const ConfigAlert = (errTitle, errMsg) => {
    Alert.alert(
        errTitle,
        errMsg, 
        [
            {
                text: "OK",
                style: "cancel",
            }
        ]
    )
}