//  import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "../screens/LoginScreen";
// import SignupScreen from "../screens/SignupScreen";

// const Stack = createNativeStackNavigator();

// export default function AuthStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Sign in" component={LoginScreen} />
//        <Stack.Screen name="Sign up" component={SignupScreen} /> 
      
      
//     </Stack.Navigator>
//   );
// }


// AuthStack.tsx
// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "../screens/LoginScreen";
// import SignupScreen from "../screens/SignupScreen";

// const Stack = createNativeStackNavigator();

// export default function AuthStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Signup"
//         component={SignupScreen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }








import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack({ setIsLoggedIn }: { setIsLoggedIn: (val: boolean) => void }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Signup">
        {(props) => <SignupScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
