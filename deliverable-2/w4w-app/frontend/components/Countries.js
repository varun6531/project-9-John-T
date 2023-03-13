import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Canada({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}>Canada</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: English, French {"\n"}
                Life Expectancy: 82 Years {"\n"}
                Median Income (CAD$): $27,097 {"\n"}
                Improved Drinking Water: 99.8% of population {"\n"}
                Literacy Rate: 99% {"\n"}
                Population: {"> "}38 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. Loosely put a cotton plug in the neck of the cut bottle, then cover the neck of the bottle with a piece of cheese cloth secured with a rubber band. {"\n"}
                2. Pour a 1-cm layer of fine sand over the cotton plug, followed by 1-cm of coarse sand, fine gravel, and coarse gravel. {"\n"}
                3. Clean the filter by slowly and carefully pouring through 1-litre of clean water (over a bucket). {"\n"}
                4. Place the filter over a plastic cup. Now, test your water filter by pouring half of the dirty water through the filter. {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
        </View>
    );
}

export default function Kuwait({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}>Kuwait</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: Arabic, English {"\n"}
                Life Expectancy: 78.3 Years {"\n"}
                Median Income (CAD$): $65,800 {"\n"}
                Improved Drinking Water: 99% of population {"\n"}
                Literacy Rate: 95.7% {"\n"}
                Population: {"> "}5 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. Loosely put a cotton plug in the neck of the cut bottle, then cover the neck of the bottle with a piece of cheese cloth secured with a rubber band. {"\n"}
                2. Pour a 1-cm layer of fine sand over the cotton plug, followed by 1-cm of coarse sand, fine gravel, and coarse gravel. {"\n"}
                3. Clean the filter by slowly and carefully pouring through 1-litre of clean water (over a bucket). {"\n"}
                4. Place the filter over a plastic cup. Now, test your water filter by pouring half of the dirty water through the filter. {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
        </View>
    );
}

export default function CanFN({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}>Canada First Nations</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: English, French, Cree, Inuktitut, Ojibwe, Innu, Dene, Mi’kmaq, Sioux, Atikamekw and others {"\n"}
                Life Expectancy: 72.5 Years {"\n"}
                Median Income (CAD$): $18,962 {"\n"}
                Improved Drinking Water: 99% of population {"\n"}
                Communities with long-term boil water advisories: 33 {"\n"}
                Population: {"> "}1 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. Loosely put a cotton plug in the neck of the cut bottle, then cover the neck of the bottle with a piece of cheese cloth secured with a rubber band. {"\n"}
                2. Pour a 1-cm layer of fine sand over the cotton plug, followed by 1-cm of coarse sand, fine gravel, and coarse gravel. {"\n"}
                3. Clean the filter by slowly and carefully pouring through 1-litre of clean water (over a bucket). {"\n"}
                4. Place the filter over a plastic cup. Now, test your water filter by pouring half of the dirty water through the filter. {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
        </View>
    );
}

export default function SAfrica({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}>South Africa</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: isiZulu, isiXhosa, Afrikaans, Sepedi, Setswana, English, Sesotho, Xitsonga siSwati, others {"\n"}
                Life Expectancy: 64.1 Years {"\n"}
                Median Income (CAD$): $13,600 {"\n"}
                Unimproved Drinking Water: 18.6% of population {"\n"}
                Literacy Rate: 94.4% {"\n"}
                Population: {"> "}61 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. Loosely put a cotton **** in the ***** of the cut bottle, then *** the neck of the **** with a **** cheese cloth secured with a **** band. {"\n"}
                2. Pour a 1-cm layer of fine sand over the cotton plug, followed by 1-cm **** * * sand, fine *****!*@, and !!@^#!!^@ gravel. {"\n"}
                3. Clean the filter by slowly and carefully pouring through 1-litre of !!#*!@!#* (over a bucket). {"\n"}
                4. Place the filter over a plastic cup. Now, test your !@*#&!@*#& filter !@*#!*!@#!! half of the dirty !@*#!!*&@# through the filter. {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
        </View>
    );
}

export default function Ghana({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}>Ghana</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: English, Asante, Ewe, Fante Boron/Brong Dagomba, others {"\n"}
                Life Expectancy: 67.4 Years {"\n"}
                Median Income (CAD$): $4,700 {"\n"}
                Unsafe Drinking Water: 11.3% of population {"\n"}
                Literacy Rate: 76.6% {"\n"}
                Population: {"> "}33 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. ***** put a cotton ***** neck of the cut ****, then !!!!! the neck of the !*!**** a piece of cheese ****!@# a rubber band. {"\n"}
                2. Pour a 1-cm *!*!*** of fine sand over the *!*!* plug, *!*!** 1-cm of !*@#!*!@#* fine gravel, and coarse *!*!*!*. {"\n"}
                3. Clean *!*!*!* filter *!***!** and carefully *!*!*!@**!# of clean water (over a bucket). {"\n"}
                4. !!*@!#*!@#*! filter over a plastic !!@^#!!^!#, test *!!@#*!*@#!* water filter by pouring !&#!@#^!!@#^! of the dirty !*@!#*!@#* through the filter. {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
        </View>
    );
}

export default function Kenya({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}>Kenya</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: English, Kiswahili, and others {"\n"}
                Life Expectancy: 64.6 Years {"\n"}
                Median Income (CAD$): $3,500 {"\n"}
                Unimproved Drinking Water: 36.8% of population {"\n"}
                Literacy Rate: 78% {"\n"}
                Population: {"> "}56 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. ** put a *!* plug in the *!88 of the cut *!*!8 then *!!* the *@*@* of the *@**@* with a *@*8 of cheese hqwueh secured ncuahu a rubber.{"\n"}
                2. @@@* a 1-cm *@*** of @*@*@ sand @*@*@ the cotton plug 8@*@* by 1-cm of ^@@@^@ sand, and *@** gravel. {"\n"}
                3. @*@* the filter by *@****@ carefully pouring @*@* of clean water (@*@*@8 a bucket). {"\n"}
                4. Place the *@@* over a plastic cup. Now @*@* your water filter by pouring @*@** of the dirty water through the filter. {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
        </View>
    );
}

export default function Malawi({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}>Malawi</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: English, Chichewa, Chinyanja, Chiyao, and others {"\n"}
                Life Expectancy: 62.2 Years {"\n"}
                Median Income (CAD$): $1,200 {"\n"}
                Unimproved Drinking Water: 9.8% of population {"\n"}
                Literacy Rate: 62.1% of population age 15 and above {"\n"}
                Population: {"> "}20 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. Loosely put a cotton **** in the ***** of the cut bottle, then *** the neck of the **** with a **** cheese cloth secured with a **** band. {"\n"}
                2. Pour a 1-cm layer of *!@!*@ over the cotton plug, followed by 1-cm **** * * sand, fine *****@*@, and @@^#@!^@ gravel. {"\n"}
                3. Clean the filter by slowly and carefully pouring through 1-litre of !@@#*!@@#* water (over a bucket). {"\n"}
                4. Place the filter over a plastic cup. Now, test your !@*#@!@*#@ filter !@*#@*!@#@! half of the dirty !@*#@!*@@# through the filter. {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1E1E1E',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 36,
        height: Dimensions.get('window').height/12, 
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 64,
        textAlign: 'left',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.25,
    },
    button2: {
        width:  Dimensions.get('window').width / 2,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignItems: 'center',
    },
    arrow:{
        flex: 1,
        marginTop: 2
    },
    textButton:{
        color: '#03DAC5',
        textAlign:'center',
        fontSize:14,
        fontWeight: 'bold',
        flex: 5
    },
});