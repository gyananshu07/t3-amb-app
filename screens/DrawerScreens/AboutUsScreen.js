import { View, Image } from "react-native";
import React from "react";
import styles from "../../GlobalStyles";
import { Text } from "react-native-paper";

const AboutUsScreen = () => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={{
          width: "100%",
          height: 250,
          backgroundColor: "#e61a23",
        }}
        source={require("../../assets/icons/T3LogoAbout.png")}
      />
      <Text
        style={[
          styles.fontRegular,
          { textAlign: "justify", marginHorizontal: 7.5, marginVertical: 5 },
        ]}
      >
        <Text style={styles.boldText}>Test-Treat-Talk (T3)</Text> anemia camps
        (henceforth called T3 camps) are an integral component of AMB's demand
        generation, social, and mass mobilization strategy. Each T3 camp is one
        day long, held at a fixed site and fixed time, and caters to an average
        of 500 beneficiaries. Beneficiaries can be of all or a specific group
        such as pregnant women, adolescents, etc.depending on the site of the
        camp. A typical T3 camp consists of three steps: Test for anemia using a
        digital hemoglobinometer (invasive). Treat with iron-folic acid (IFA)
        tablets and referral. Talk or counsel beneficiaries on iron, protein,
        and vitamin C rich foods and healthy lifestyle measures. The AMB T3 app
        is developed to regularly test and monitor the target beneficiaries at
        T3 camps, VHND camps, or RBSK camps to control the anemia prevalence.
        According to their test results, the tested beneficiaries will be given
        appropriate doses of IFA tablets and the testing team will advise them
        with relevant do's and don'ts.
      </Text>
    </View>
  );
};

export default AboutUsScreen;
