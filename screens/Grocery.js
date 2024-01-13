import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Grocery = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.grocery}>
      <Image
        style={styles.eiplusIcon}
        resizeMode="cover"
        source={require("../assets/eiplus.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.qty, styles.qtyTypo]}>qty</Text>
        <Text style={[styles.item, styles.qtyTypo]}>item</Text>
        <View style={styles.groupItem} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Text style={[styles.groceryDetails, styles.postTypo]}>
          Grocery Details
        </Text>
      </View>
      <Pressable
        style={[styles.vectorParent, styles.vectorParentLayout]}
        onPress={() => navigation.navigate("ConfirmFoodDetails")}
      >
        <Image
          style={[styles.rectangleIcon, styles.vectorParentLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Text style={[styles.post, styles.postTypo]}>POST</Text>
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group2.png")}
      />
      <Pressable
        style={[styles.group, styles.groupPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group3.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("DonationPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  qtyTypo: {
    width: 58,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  groupLayout: {
    height: 57,
    width: 253,
    position: "absolute",
  },
  groupInnerPosition: {
    borderRadius: Border.br_36xl,
    top: 0,
    left: 0,
  },
  postTypo: {
    textAlign: "left",
    fontFamily: FontFamily.kaushanScriptRegular,
    position: "absolute",
  },
  vectorParentLayout: {
    height: 52,
    width: 150,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    top: "94.38%",
    position: "absolute",
  },
  eiplusIcon: {
    top: 171,
    left: 155,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 36,
    borderRadius: 25,
    width: 183,
    height: 42,
    backgroundColor: Color.colorGainsboro,
    left: 0,
    position: "absolute",
  },
  qty: {
    left: 201,
    top: 0,
    width: 58,
  },
  item: {
    top: 7,
    left: 20,
  },
  groupItem: {
    top: 37,
    width: 89,
    height: 40,
    left: 201,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  rectangleParent: {
    top: 82,
    width: 290,
    height: 78,
    left: 26,
    position: "absolute",
  },
  groupInner: {
    height: 57,
    width: 253,
    position: "absolute",
    backgroundColor: Color.colorGainsboro,
  },
  groceryDetails: {
    top: 6,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.kaushanScriptRegular,
    left: 26,
  },
  rectangleGroup: {
    top: 21,
    left: 45,
  },
  rectangleIcon: {
    borderRadius: Border.br_36xl,
    top: 0,
    left: 0,
  },
  post: {
    top: 12,
    left: 46,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.kaushanScriptRegular,
    fontSize: FontSize.size_xl,
  },
  vectorParent: {
    top: 517,
    left: 97,
  },
  groupIcon: {
    height: "3.75%",
    width: "6.67%",
    right: "34.06%",
    bottom: "1.88%",
    left: "59.28%",
    top: "94.38%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  group: {
    left: "44.28%",
    right: "49.61%",
    bottom: "2.19%",
    width: "6.11%",
    height: "3.44%",
  },
  vector: {
    left: "29.44%",
    top: "94.75%",
    right: "65.89%",
    bottom: "2.44%",
    width: "4.67%",
    height: "2.81%",
    position: "absolute",
  },
  grocery: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Grocery;
