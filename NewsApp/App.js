import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import NewsCard from './components/NewsCard/NewsCard.js';
import news_data from './news_data.json';

function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={news_data}
                    renderItem={({ item }) => <NewsCard news={item} />}
                />
            </View>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e0e0e0',
    }
})

export default App;