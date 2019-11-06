import { StyleSheet, I18nManager } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import RF from "react-native-responsive-fontsize";
import { Elevation } from "../../../../theme";
import theme from "./../../../../theme/styles";
import { COLORS } from "../../../../theme/colorsManagement";

export default StyleSheet.create({
  counter: {
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    height: "90%",
  },
  digitStyle: {
    backgroundColor: "white",
    marginHorizontal: 6.7,
    // marginBottom: hp("-1%"),
    borderRadius: 0,
    ...theme.title,
    ...Elevation(2, 3, 0, 3, 1, "black")
  },
  digitTxtStyle: {
    color: "black",
    ...theme.title,
    width: "100%",
    // marginBottom: hp("1"),
    textAlign: "center",
    alignSelf: "center",
    fontSize: wp("2.75") + hp("1.5"),
    ...theme.txt_regular
  },
  timeLabelStyle: {
    color: "black",
    fontSize: I18nManager.isRTL ?  wp("1.25") + hp("0.75") : wp("2") + hp("0.75"),
    // top: I18nManager.isRTL ? -hp("1.25%") : -hp("1.25%"),
    marginLeft: I18nManager.isRTL ? -wp("0.6") : wp("0.6"),
    ...theme.txt_regular,
    letterSpacing: 0.75,
    textAlign: "center",
    // width: "100%",
    alignSelf: "center"
  }
});
