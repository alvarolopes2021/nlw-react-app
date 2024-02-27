// não precisa do default, por boas práticas deixar o default para quando for uma rota
// para o expo router saber

import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors"

export function Loading() {    
    return (
        <View className="flex-1 items-center justify-center bg-slate-900">
            <ActivityIndicator color={colors.white} />
        </View>
    )
}