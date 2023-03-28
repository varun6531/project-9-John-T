import { Dimensions, StyleSheet, Text, View, Pressable, TextInput, ScrollView, Image, Modal} from 'react-native';
import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Game({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { moneyVal } = route.params;

  // Images of the filter materials
  const fineSandImg = require('../assets/fineSand.jpeg');
  const coarseSandImg = require('../assets/coarseSand.jpeg');
  const fineGravelImg = require('../assets/fineGravel.jpeg');
  const coarseGravelImg = require('../assets/coarseGravel.jpeg');
  const cottonImg = require('../assets/cotton.jpeg');
  const cheeseClothImg = require('../assets/cheeseCloth.jpeg');

  // Money and material cost
  const [money, setMoney] = useState(moneyVal);
  const cheeseClothVal = 25;
  const cottonVal = 25;
  const coarseGravelVal = 50;
  const fineGravelVal = 50;
  const rubberBandVal = 25;
  const coarseSandVal = 100;
  const fineSandVal = 100;


  // Pointers to the selected material and its corresponding image
  const [currentMaterialImg, setCurrentMaterialImg] = useState(null);
  const [currentMaterial, setCurrentMaterial] = useState('none');
  const [currentMaterialCost, setCurrentMaterialCost] = useState(0);

  const [fineSand, setFineSand] = useState(false);
  const [coarseSand, setCoarseSand] = useState(false);
  const [fineGravel, setFineGravel] = useState(false);
  const [coarseGravel, setCoarseGravel] = useState(false);
  const [cotton, setCotton] = useState(false);
  const [cheeseCloth, setCheeseCloth] = useState(false);

  // Images for the filter layers
  const [filter1, setfilter1] = useState(null);
  const [filter2, setfilter2] = useState(null);
  const [filter3, setfilter3] = useState(null);
  const [filter4, setfilter4] = useState(null);
  const [filter5, setfilter5] = useState(null);
  const [filter6, setfilter6] = useState(null);
  const [filter7, setfilter7] = useState(null);
  const [filter8, setfilter8] = useState(null);

  // Materials stored inside the filter layers
  const [filtermat1, setfiltermat1] = useState('none');
  const [filtermat2, setfiltermat2] = useState('none');
  const [filtermat3, setfiltermat3] = useState('none');
  const [filtermat4, setfiltermat4] = useState('none');
  const [filtermat5, setfiltermat5] = useState('none');
  const [filtermat6, setfiltermat6] = useState('none');
  const [filtermat7, setfiltermat7] = useState('none');
  const [filtermat8, setfiltermat8] = useState('none');

  const lackofFundsModal = () => {
		return (
			<View style={styles.centeredView}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.answerView}>Insufficient funds</Text>
							<Pressable
								style={[styles.buttonans, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textButton}>OK</Text>
							</Pressable>
						</View>
					</View>
				</Modal>
			</View>
		);
	};

  const resetGame = () => {
    setFineSand(false);
    setCoarseSand(false);
    setFineGravel(false);
    setCoarseGravel(false);
    setCotton(false);
    setCheeseCloth(false);

    setCurrentMaterialImg(null);
    setCurrentMaterial('none');

    // Remove all images
    setfilter1(null);
    setfilter2(null);
    setfilter3(null);
    setfilter4(null);
    setfilter5(null);
    setfilter6(null);
    setfilter7(null);
    setfilter8(null);

    // Remove all materials inside the filter
    setfiltermat1('none');
    setfiltermat2('none');
    setfiltermat3('none');
    setfiltermat4('none');
    setfiltermat5('none');
    setfiltermat6('none');
    setfiltermat7('none');
    setfiltermat8('none');

    // Reset money
    setMoney(moneyVal);
  };

  return (
    <View style={styles.background}>
      <View style={styles.backBox}>
        <Pressable onPress={async () => {navigation.navigate("Canada")}}>
          <Icon name='arrow-left' color='#03DAC5' size={25} />
        </Pressable>
        <Text style={styles.moneyText}>Money: {money}</Text>
      </View>
      
      <View style={styles.filter}>
            <Pressable style = {styles.upperSpace} onPress={() => {
              if(money >= currentMaterialCost && filtermat1 != currentMaterial){
                setMoney(money - currentMaterialCost);
                setfilter1(currentMaterialImg); 
                setfiltermat1(currentMaterial);
              }
              else{
                setModalVisible(!modalVisible);
              }
            }} 
              onLongPress={() => {setfilter1(null);
                if(filtermat1 != 'none'){
                  // get cost of filtermat1
                  Material1Cost = 0;
                  if(filtermat1 == 'cheeseCloth'){
                    Material1Cost = cheeseClothVal;
                  }
                  else if(filtermat1 == 'cotton'){
                    Material1Cost = cottonVal;
                  }
                  else if(filtermat1 == 'coarseGravel'){
                    Material1Cost = coarseGravelVal;
                  }
                  else if(filtermat1 == 'fineGravel'){
                    Material1Cost = fineGravelVal;
                  }
                  else if(filtermat1 == 'coarseSand'){
                    Material1Cost = coarseSandVal;
                  }
                  else if(filtermat1 == 'fineSand'){
                    Material1Cost = fineSandVal;
                  }
                  // refund filter material of filtermat1
                  setMoney(money + Material1Cost)
                }
                setfiltermat1('none');
              }}
            >
              {filter1 && <Image source={filter1} style={styles.image}/>}
            </Pressable>
            <Pressable style = {styles.upperSpace}   onPress={() => {
              if(money >= currentMaterialCost && filtermat2 != currentMaterial){
                setMoney(money - currentMaterialCost);
                setfilter2(currentMaterialImg); 
                setfiltermat2(currentMaterial);
              }
              else{
                setModalVisible(!modalVisible);
              }
            }}
              onLongPress={() => {setfilter2(null);
                if(filtermat2 != 'none'){
                  // get cost of filtermat2
                  Material2Cost = 0;
                  if(filtermat2 == 'cheeseCloth'){
                    Material2Cost = cheeseClothVal;
                  }
                  else if(filtermat2 == 'cotton'){
                    Material2Cost = cottonVal;
                  }
                  else if(filtermat2 == 'coarseGravel'){
                    Material2Cost = coarseGravelVal;
                  }
                  else if(filtermat2 == 'fineGravel'){
                    Material2Cost = fineGravelVal;
                  }
                  else if(filtermat2 == 'coarseSand'){
                    Material2Cost = coarseSandVal;
                  }
                  else if(filtermat2 == 'fineSand'){
                    Material2Cost = fineSandVal;
                  }
                  // refund filter material of filtermat2
                  setMoney(money + Material2Cost)
                }
                setfiltermat2('none');
              }}
            >
              {filter2 && <Image source={filter2} style={styles.image}/>}
            </Pressable>
            <Pressable style = {styles.upperSpace}  onPress={() => {
              if(money >= currentMaterialCost && filtermat3 != currentMaterial){
                setMoney(money - currentMaterialCost);
                setfilter3(currentMaterialImg); 
                setfiltermat3(currentMaterial);
              }
              else{
                setModalVisible(!modalVisible);
              }}}
              onLongPress={() => {setfilter3(null);
                if(filtermat3 != 'none'){
                  // get cost of filtermat3
                  Material3Cost = 0;
                  if(filtermat3 == 'cheeseCloth'){
                    Material3Cost = cheeseClothVal;
                  }
                  else if(filtermat3 == 'cotton'){
                    Material3Cost = cottonVal;
                  }
                  else if(filtermat3 == 'coarseGravel'){
                    Material3Cost = coarseGravelVal;
                  }
                  else if(filtermat3 == 'fineGravel'){
                    Material3Cost = fineGravelVal;
                  }
                  else if(filtermat3 == 'coarseSand'){
                    Material3Cost = coarseSandVal;
                  }
                  else if(filtermat3 == 'fineSand'){
                    Material3Cost = fineSandVal;
                  }
                  // refund filter material of filtermat3
                  setMoney(money + Material3Cost)
                }
                setfiltermat3('none');
              }}
            >
              {filter3 && <Image source={filter3} style={styles.image}/>}
            </Pressable>
            <Pressable style = {styles.upperSpace}  onPress={() => {
              if(money >= currentMaterialCost && filtermat4 != currentMaterial){
                setMoney(money - currentMaterialCost);
                setfilter4(currentMaterialImg); 
                setfiltermat4(currentMaterial);
              }
              else{
                setModalVisible(!modalVisible);
              }}}
              onLongPress={() => {setfilter4(null);
                if(filtermat4 != 'none'){
                  // get cost of filtermat4
                  Material4Cost = 0;
                  if(filtermat4 == 'cheeseCloth'){
                    Material4Cost = cheeseClothVal;
                  }
                  else if(filtermat4 == 'cotton'){
                    Material4Cost = cottonVal;
                  }
                  else if(filtermat4 == 'coarseGravel'){
                    Material4Cost = coarseGravelVal;
                  }
                  else if(filtermat4 == 'fineGravel'){
                    Material4Cost = fineGravelVal;
                  }
                  else if(filtermat4 == 'coarseSand'){
                    Material4Cost = coarseSandVal;
                  }
                  else if(filtermat4 == 'fineSand'){
                    Material4Cost = fineSandVal;
                  }
                  // refund filter material of filtermat4
                  setMoney(money + Material4Cost)
                }
                setfiltermat4('none');
              }}
            >
              {filter4 && <Image source={filter4} style={styles.image}/>}
            </Pressable>
            <Pressable style = {styles.upperSpace}  onPress={() => {
              if(money >= currentMaterialCost && filtermat5 != currentMaterial){
                setMoney(money - currentMaterialCost);
                setfilter5(currentMaterialImg); 
                setfiltermat5(currentMaterial);
              }
              else{
                setModalVisible(!modalVisible);
              }}}
              onLongPress={() => {setfilter5(null);
                if(filtermat5 != 'none'){
                  // get cost of filtermat5
                  Material5Cost = 0;
                  if(filtermat5 == 'cheeseCloth'){
                    Material5Cost = cheeseClothVal;
                  }
                  else if(filtermat5 == 'cotton'){
                    Material5Cost = cottonVal;
                  }
                  else if(filtermat5 == 'coarseGravel'){
                    Material5Cost = coarseGravelVal;
                  }
                  else if(filtermat5 == 'fineGravel'){
                    Material5Cost = fineGravelVal;
                  }
                  else if(filtermat5 == 'coarseSand'){
                    Material5Cost = coarseSandVal;
                  }
                  else if(filtermat5 == 'fineSand'){
                    Material5Cost = fineSandVal;
                  }
                  // refund filter material of filtermat5
                  setMoney(money + Material5Cost)
                }
                setfiltermat5('none');
              }}
            >
              {filter5 && <Image source={filter5} style={styles.image}/>}
            </Pressable>
            <Pressable style = {styles.upperSpace2} onPress={() => {
              if(money >= currentMaterialCost && filtermat6 != currentMaterial){
                setMoney(money - currentMaterialCost);
                setfilter6(currentMaterialImg); 
                setfiltermat6(currentMaterial);
              }
              else{
                setModalVisible(!modalVisible);
              }}}
              onLongPress={() => {setfilter6(null);
                if(filtermat6 != 'none'){
                  // get cost of filtermat6
                  Material6Cost = 0;
                  if(filtermat6 == 'cheeseCloth'){
                    Material6Cost = cheeseClothVal;
                  }
                  else if(filtermat6 == 'cotton'){
                    Material6Cost = cottonVal;
                  }
                  else if(filtermat6 == 'coarseGravel'){
                    Material6Cost = coarseGravelVal;
                  }
                  else if(filtermat6 == 'fineGravel'){
                    Material6Cost = fineGravelVal;
                  }
                  else if(filtermat6 == 'coarseSand'){
                    Material6Cost = coarseSandVal;
                  }
                  else if(filtermat6 == 'fineSand'){
                    Material6Cost = fineSandVal;
                  }
                  // refund filter material of filtermat6
                  setMoney(money + Material6Cost)
                }
                setfiltermat6('none');
              }}
            >
              {filter6 && <Image source={filter6} style={[styles.image,{borderBottomLeftRadius: 50, borderBottomRightRadius: 50}]}/>}
            </Pressable>
        </View>
        <View style={styles.filter2}>
            <Pressable style = {styles.belowSpace} onPress={() => {
              if(money >= currentMaterialCost && filtermat7 != currentMaterial){
                setMoney(money - currentMaterialCost);
                setfilter7(currentMaterialImg); 
                setfiltermat7(currentMaterial);
              }
              else{
                setModalVisible(!modalVisible);
              }}}
              onLongPress={() => {setfilter7(null);
                if(filtermat7 != 'none'){
                  // get cost of filtermat7
                  Material7Cost = 0;
                  if(filtermat7 == 'cheeseCloth'){
                    Material7Cost = cheeseClothVal;
                  }
                  else if(filtermat7 == 'cotton'){
                    Material7Cost = cottonVal;
                  }
                  else if(filtermat7 == 'coarseGravel'){
                    Material7Cost = coarseGravelVal;
                  }
                  else if(filtermat7 == 'fineGravel'){
                    Material7Cost = fineGravelVal;
                  }
                  else if(filtermat7 == 'coarseSand'){
                    Material7Cost = coarseSandVal;
                  }
                  else if(filtermat7 == 'fineSand'){
                    Material7Cost = fineSandVal;
                  }
                  // refund filter material of filtermat7
                  setMoney(money + Material7Cost)
                }
                setfiltermat7('none');
              }}
            >
              {filter7 && <Image source={filter7} style={styles.image}/>}
            </Pressable>
            <Pressable style = {styles.belowSpace2} onPress={() => {
              if(money >= currentMaterialCost && filtermat8 != currentMaterial){
                setMoney(money - currentMaterialCost);
                setfilter8(currentMaterialImg); 
                setfiltermat8(currentMaterial);
              }
              else{
                setModalVisible(!modalVisible);
              }}}
              onLongPress={() => {setfilter8(null);
                if(filtermat8 != 'none'){
                  // get cost of filtermat8
                  Material8Cost = 0;
                  if(filtermat8 == 'cheeseCloth'){
                    Material8Cost = cheeseClothVal;
                  }
                  else if(filtermat8 == 'cotton'){
                    Material8Cost = cottonVal;
                  }
                  else if(filtermat8 == 'coarseGravel'){
                    Material8Cost = coarseGravelVal;
                  }
                  else if(filtermat8 == 'fineGravel'){
                    Material8Cost = fineGravelVal;
                  }
                  else if(filtermat8 == 'coarseSand'){
                    Material8Cost = coarseSandVal;
                  }
                  else if(filtermat8 == 'fineSand'){
                    Material8Cost = fineSandVal;
                  }
                  // refund filter material of filtermat8
                  setMoney(money + Material8Cost)
                }
                setfiltermat8('none');
              }}
            >
              {filter8 && <Image source={filter8} style={[styles.image, {borderBottomLeftRadius: 30, borderBottomRightRadius: 30}]}/>}
            </Pressable>
        </View>
        {lackofFundsModal()}
        <View style={styles.scroll}>
          <Text style={styles.caption}>{"\n"}Scroll for more {"\n"}</Text>
          <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
            <Pressable style={[styles.button, {borderColor: fineSand? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setFineSand(true);
              setCoarseSand(false);
              setFineGravel(false);
              setCoarseGravel(false);
              setCurrentMaterialImg(fineSandImg);
              setCurrentMaterial('fineSand');
              setCurrentMaterialCost(fineSandVal);
              setCotton(false);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Fine Sand
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: coarseSand? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setFineSand(false);
              setCoarseSand(true);
              setFineGravel(false);
              setCoarseGravel(false);
              setCurrentMaterialImg(coarseSandImg);
              setCurrentMaterial('coarseSand');
              setCurrentMaterialCost(coarseSandVal);
              setCotton(false);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Coarse Sand
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: fineGravel? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setFineSand(false);
              setCoarseSand(false);
              setFineGravel(true);
              setCoarseGravel(false);
              setCurrentMaterialImg(fineGravelImg);
              setCurrentMaterial('fineGravel');
              setCurrentMaterialCost(fineGravelVal);
              setCotton(false);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Fine Gravel
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: coarseGravel? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setFineSand(false);
              setCoarseSand(false);
              setFineGravel(false);
              setCoarseGravel(true);
              setCurrentMaterialImg(coarseGravelImg);
              setCurrentMaterial('coarseGravel');
              setCurrentMaterialCost(coarseGravelVal);
              setCotton(false);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Coarse Gravel
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: cotton? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setFineSand(false);
              setCoarseSand(false);
              setFineGravel(false);
              setCoarseGravel(false);
              setCurrentMaterialImg(cottonImg);
              setCurrentMaterial('cotton');
              setCurrentMaterialCost(cottonVal);
              setCotton(true);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Cotton
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: cheeseCloth? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setFineSand(false);
              setCoarseSand(false);
              setFineGravel(false);
              setCoarseGravel(false);
              setCurrentMaterialImg(cheeseClothImg);
              setCurrentMaterial('cheeseCloth');
              setCurrentMaterialCost(cheeseClothVal);
              setCotton(false);
              setCheeseCloth(true);
            }}>
              <Text style={styles.textButton}>
                Cheese Cloth
              </Text>
            </Pressable>
          </ScrollView>
        </View>
        <View style={styles.buttonLayer}>
            <Pressable style={styles.resetButton} onPress={resetGame}>
            <Text style={styles.textButton}>
              Reset Filter
            </Text>
          </Pressable>
          <Pressable style={styles.button2} onPress={() => {
              var result = '0';
              if(filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth'){
                result = '100';
                navigation.navigate("result100", { result: result })
              } 
              else if(
                (filtermat1!='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')||
                (filtermat1=='coarseGravel' && filtermat2!='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')||
                (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 !='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')||
                (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4!='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')||
                (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5!='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')||
                (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6!='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')) 
              {
                result = '90';
                navigation.navigate("result90",{ result: result })
              }
              
              else{
                if ((filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 != 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 != 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1!='coarseGravel' && filtermat2!='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1!='coarseGravel' && filtermat2=='fineGravel' && filtermat3 !='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1!='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4!='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1!='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5!='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1!='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6!='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2!='fineGravel' && filtermat3 !='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2!='fineGravel' && filtermat3 =='coarseSand' && filtermat4!='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2!='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5!='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2!='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6!='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 !='coarseSand' && filtermat4!='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 !='coarseSand' && filtermat4=='coarseSand' && filtermat5!='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 !='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6!='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4!='coarseSand' && filtermat5!='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4!='coarseSand' && filtermat5=='fineSand' && filtermat6!='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5!='fineSand' && filtermat6!='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
                )
                {
                  result = '80';
                } else{
                  result= '0';
                }
                navigation.navigate("result80less", { result: result })
              }
            }
          }>
            <Text style={styles.textButton}>
              Test Filter
            </Text>
            <View style={styles.arrow}>
              <Icon name='angle-right' color='#03DAC5' size={15}/>
            </View>
          </Pressable>
        </View>
        <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
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
    flexDirection: 'column',
    paddingTop: Dimensions.get('window').height*1/14,
  },
  upperSpace:{
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: '#03DAC5',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  upperSpace2:{
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  filter:{
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height*4/7,
    width: Dimensions.get('window').width*2/3,
    flexDirection: 'column',
    borderColor: '#03DAC5',
    borderWidth: 2,
    borderTopWidth: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flex: 5
  },
  filter2:{
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height*1/10,
    width: Dimensions.get('window').width*1/3,
    flexDirection: 'column',
    borderColor: '#03DAC5',
    borderWidth: 2,
    borderTopWidth: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flex: 1
  },
  belowSpace: {
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: '#03DAC5',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  belowSpace2: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  scroll:{
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height*1/7,
    width: Dimensions.get('window').width,
    // marginTop: Dimensions.get('window').height*1/14,
    marginBottom: Dimensions.get('window').height*1/14,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
  },
  textButton:{
    color: '#03DAC5',
    textAlign:'center',
    fontSize:14,
    fontWeight: 'bold',
    flex: 5,
  },
  resetButton:{
    width:  Dimensions.get('window').width / 3,
    flexDirection: 'row',
    padding: 12,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  button2: {
    width:  Dimensions.get('window').width / 3,
    flexDirection: 'row',
    marginLeft: 12,
    padding: 12,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  buttonLayer:{
    flexDirection: 'row',
    marginTop: -Dimensions.get('window').height*1/20,
    marginBottom: Dimensions.get('window').height*1/30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: '60%',
    paddingTop: 11,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 30,
    borderColor: 'transparent',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  image:{
    height: '99%',
    width: '99%'
  },
  arrow:{
    flex: 1,
    marginTop: 2
  },
  backinputview:{
    width:  Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / -2,
    flexDirection: 'row',
    padding: 13,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  button3: {
    width:  Dimensions.get('window').width / 3,
    flexDirection: 'row',
    padding: 12,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C',
    marginLeft: -Dimensions.get('window').width / 2,
    marginBottom: Dimensions.get('window').height / 20,
    marginTop: Dimensions.get('window').height / -20,
  },
  caption:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height / -12,
    marginLeft: -Dimensions.get('window').width / -1.5,
  },
  backBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 20
  },
  moneyText:{
    color: '#03DAC5',
    fontSize: 17,
    fontWeight: 'bold',
  },
  centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		backgroundColor: '#2C2C2C',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: Dimensions.get('window').width / 1.2,
	},
	answerView: {
		textAlign: 'center',
		color: '#03DAC5',
		fontSize: 18,
		marginBottom: Dimensions.get('window').height / 30,
	},
	buttonClose: {
		backgroundColor: '#2C2C2C',
		borderColor: '#03DAC5',
	},
  buttonans: {
		width: Dimensions.get('window').width / 3,
		flexDirection: 'row',
		padding: 15,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		// alignSelf: 'flex-start',
	},
  w4twlogo: {
      bottom: Dimensions.get('window').height / 112,
      alignItems: 'center',
      width: 120, 
      height: 60, 
    }
});
