
// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
//  import DoctorsList from "../screens/DoctorsList";

// const Stack = createNativeStackNavigator();

// export default function AppStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="DoctorsList" component={DoctorsList} />
//     </Stack.Navigator>
//   );
// }


// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import DoctorsList from "../screens/DoctorsList"; // your dashboard screen

// const Stack = createNativeStackNavigator();

// export default function AnotherStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Dashboard"
//         component={DoctorsList}
//         options={{ headerShown: false }}
//       />
//       {/* Add more authenticated screens here */}
//     </Stack.Navigator>
//   );
// }


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DoctorsList from "../screens/DoctorsList";

const Stack = createNativeStackNavigator();

export default function AnotherStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DoctorList" component={DoctorsList} />
    </Stack.Navigator>
  );
}

