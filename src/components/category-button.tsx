import clsx from "clsx";
import { Pressable, PressableProps, Text } from "react-native";

type CategoryProps =  PressableProps &{
    title: string,
    isSelecte?: boolean
}

export function CategoryButton(props : CategoryProps) {
    return (
        <Pressable className={clsx("bg-slate-800 px-4 justify-center rounded-md h-10",
         props.isSelecte && "border-2 border-lime-300")}  onPress={props.onPress} >
            <Text className="text-slate-100 font-subtitle text-sm">{props.title}</Text>
        </Pressable>
    );
}