import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Animated } from 'react-native'
import { Feather } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({navigation}){
    const menuItems = [
        { name: 'Luyện nghe', content: 'Luyện nghe các đoạn hội thoại, phát âm theo chủ đề', color: '#e57373', icon: '../assets/radio.png', button: 'LUYỆN NGHE'},
        { name: 'Luyện nói', content: 'Tăng khă năng phát âm, cải thiện kỹ năng nói', color: '#e29b00', icon: '../assets/mic.png', button: 'LUYỆN NÓI'},
        { name: 'Học từ vựng', content: 'Học từ vựng theo từng chủ đều khác nhau, bổ sung vốn từ', color: '#a963c7', icon: '../assets/word.png', button: 'TỪ VỰNG'},
        { name: 'Học ngữ pháp', content: 'Biết cách sử dụng các câu, ngữ pháp trong Tiếng Anh', color: '#00bcd4', icon: '../assets/book.png', button: 'NGỮ PHÁP'},
    ]

    

    return (
        <View style={{ backgroundColor: '#fff' }}>



            <View >
                <ScrollView>
                <Image style={styles.image} source={{ uri: 'https://cdn.tgdd.vn/2020/05/content/top-5-ung-dung-ho-tro-hoc-tieng-anh-hieu-qua-hoan-toan-mien-phi-background-800x450.jpg' }} />

                <FlatList
                    data={menuItems}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Unit', item) }}
                            >
                                <View style={{
                                    height: 200,
                                    width: windowWidth - 14,
                                    marginBottom: 10,
                                    borderRadius: 20 / 2,
                                    backgroundColor: item.color,
                                    /*elevation: 3,
                                    shadowOffset: { width: 2, height: 2 },
                                    shadowColor: '#333',
                                    shadowOpacity: 0.3,
                                    shadowRadius: 3,*/
                                }}>
                                    <View style={{ height: 30, marginLeft: 16, marginTop: 18 }}>
                                        <Text style={styles.title}>{item.name}</Text>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                                        <View style={styles.contentView}>
                                            <Text style={styles.contentText}>{item.content}</Text>
                                            <View style={styles.contentButton}>
                                                <Text style={{ margin: 5, color: item.color, fontWeight: 'bold' }}>{item.button}</Text>
                                            </View>
                                        </View>

                                        <View>
                                            <Image style={{
                                                height: 100,
                                                width: 100,
                                                marginLeft: 10,
                                                
                                            }}
                                                source={require('../assets/radio.png')}
                                            />
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    )
                    }
                >
                </FlatList>
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    circle: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'red'
    },


    image: {
        marginBottom: 15,
        height: 200,
        width: windowWidth,
        alignItems: "center",
        
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 23
    },

    contentView: {
        marginLeft: 18,
        //backgroundColor: '#cddc39',
        width: 250,
        marginBottom: 20,
        justifyContent: "space-around",

    },
    contentText: {
        fontSize: 17,
        color: '#fff'
    },
    contentButton: {
        backgroundColor: '#fff',
        width: 110,
        alignItems: "center",
        borderRadius: 20,
        elevation: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    button: {
        fontSize: 20,
        
    }
   
})

    /*< Feather
name = { item.icon }
size = { 50}
color = { 'black'}
    />*/