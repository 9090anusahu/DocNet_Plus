//  import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import AuthStack from "./AuthStack";
// import AnotherStack from "./AnotherStack";

// export default function RootNavigator() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <AnotherStack />
//       ) : (
//         <AuthStack setIsLoggedIn={setIsLoggedIn} />
//       )}
//     </NavigationContainer>
//   );
// }









import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AnotherStack from "./AnotherStack";

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <AnotherStack />
      ) : (
        <AuthStack setIsLoggedIn={setIsLoggedIn} /> 
      )}
    </NavigationContainer>
  );
}
