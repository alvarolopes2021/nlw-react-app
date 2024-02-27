import { CategoryButton } from '@/components/category-button';
import { Header } from '@/components/header';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

var CATEGORIES = ["Lanche do dia", "X-Salada Egg", "x-bacon", "x-tudo"]

export default function Home() {

    const [category, setCategory] = useState(CATEGORIES[0])

    function handleCategorySelect(selectedCategory : string){
        console.log(selectedCategory)
        setCategory(selectedCategory)        
    }

    return (
        <View className="flex-1 pt-8">
            <Header title='Faça seu pedido' cartQuantityItems={5} />

            <FlatList 
                data={CATEGORIES} 
                keyExtractor={(item) => item} 
                renderItem=
                {( {item} ) => 
                    <CategoryButton title={item} isSelecte={item === category} onPress={() => handleCategorySelect(item) }/>} 
                horizontal
                showsHorizontalScrollIndicator={false}
                className='max-h-10 mt-5'
                contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
                />

        </View>
    );
}