import React from "react";
import { View, Text, TextInput } from "react-native";

import { vw } from "../../../library/viewport-units";

import { Formik } from "formik";
import * as yup from "yup";

import Colors from "../../../constants/Colors";

const NameInput = ({ setName }) => {
  const nameSchema = yup.object({
    name: yup.string().required("Preencha o nome"),
  });

  function submitHandler(name) {
    setName(name);
  }

  return (
    <View>
      <Formik initialValues={{ name: "" }} validationSchema={nameSchema}>
        {(fprops) => (
          <>
            <TextInput
              style={{
                height: 50,
                width: vw(75),
                padding: 10,
                borderWidth: 1,
                borderColor: Colors.primary,
                fontSize: 20,
                color: Colors.background,
              }}
              placeholder="Nome do remédio"
              onChangeText={fprops.handleChange("name")}
              value={fprops.values.name}
              onBlur={() => submitHandler(fprops.values.name)}
            />
            <Text
              style={{
                color: "#B00020",
                marginTop: 2,
                marginBottom: 3,
                textAlign: "left",
              }}
            >
              {fprops.touched.name && fprops.errors.name}
            </Text>
          </>
        )}
      </Formik>
    </View>
  );
};

export default NameInput;
