// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import AuthStack from "./src/navigation/AuthStack";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <AuthStack />
//     </NavigationContainer>
//   );
// }

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";
import AnotherStack from "./src/navigation/AnotherStack"; // your logged-in screens

export default function App() {
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
