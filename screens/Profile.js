import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Text style={styles.profile1}>Profile</Text>
      <Text style={styles.helloDonor}>Hello donor!</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupBg]} />
        <Text style={[styles.edit, styles.editTypo]}>edit</Text>
      </View>
      <Image
        style={styles.profileChild}
        resizeMode="cover"
        source={require("../assets/group-13.png")}
      />
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout1]}
        onPress={() => navigation.navigate("Signup")}
      >
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <Text style={[styles.logout, styles.editTypo]}>Logout</Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.donationHistory, styles.donationTypo]}>
          Donation History
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.scheduleDonation, styles.donationTypo]}>
          Schedule donation
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.scheduleDonation, styles.donationTypo]}>
          Help and FAQs
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group1.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("DonationPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 86,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.front,
    left: 0,
  },
  editTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.kaushanScriptRegular,
    position: "absolute",
  },
  groupLayout1: {
    height: 39,
    width: 139,
    position: "absolute",
  },
  groupLayout: {
    height: 38,
    width: 280,
    position: "absolute",
  },
  donationTypo: {
    left: 61,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.kaushanScriptRegular,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIconPosition: {
    top: "93.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profile1: {
    top: 33,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    left: 139,
    position: "absolute",
  },
  helloDonor: {
    top: 210,
    left: 132,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: "absolute",
  },
  groupChild: {
    height: 24,
    borderRadius: Border.br_xl,
    backgroundColor: Color.front,
    left: 0,
    top: 5,
    width: 86,
    position: "absolute",
  },
  edit: {
    left: 21,
    top: 0,
  },
  rectangleParent: {
    top: 243,
    height: 29,
    left: 139,
    width: 86,
  },
  profileChild: {
    top: 94,
    width: 111,
    height: 111,
    left: 124,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_11xl,
    top: 0,
    backgroundColor: Color.front,
    left: 0,
    width: 139,
  },
  logout: {
    left: 32,
    top: 5,
  },
  rectangleGroup: {
    top: 516,
    left: 124,
  },
  groupInner: {
    top: 0,
    backgroundColor: Color.front,
    left: 0,
    borderRadius: Border.br_xl,
  },
  donationHistory: {
    top: 5,
  },
  vectorIcon: {
    top: "28.95%",
    bottom: "26.32%",
    left: "9.64%",
    right: "83.57%",
    width: "6.79%",
    height: "44.74%",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleContainer: {
    top: 310,
    left: 49,
    width: 280,
  },
  scheduleDonation: {
    top: 4,
  },
  vectorIcon1: {
    top: "26.32%",
    bottom: "28.95%",
    left: "9.64%",
    right: "83.57%",
    width: "6.79%",
    height: "44.74%",
    maxWidth: "100%",
    position: "absolute",
  },
  groupView: {
    top: 371,
    left: 49,
    width: 280,
  },
  rectangleParent1: {
    top: 426,
    left: 49,
    width: 280,
  },
  groupIcon: {
    height: "3.75%",
    width: "6.67%",
    right: "36.67%",
    bottom: "2.34%",
    left: "56.67%",
  },
  groupIcon1: {
    height: "3.44%",
    width: "6.11%",
    right: "52.22%",
    bottom: "2.66%",
    left: "41.67%",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  vector: {
    left: "26.83%",
    top: "94.28%",
    right: "68.5%",
    bottom: "2.91%",
    width: "4.67%",
    height: "2.81%",
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.signupBack,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
