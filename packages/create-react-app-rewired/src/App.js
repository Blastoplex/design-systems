import React from "react";
import { TreatProvider, Badge } from "@myob/myob-widgets";
// import '@myob/myob-styles/dist/styles/myob-clean.css'
// import { button } from "./test.treat";
import myTheme  from "./theme.treat";

function App() {
  return (
      <div>
        <p className={''}>
          <TreatProvider theme={myTheme}>
          {/* <Button >Test</Button> */}

            <Badge>I'm a Badge</Badge>
          </TreatProvider>
        </p>
      </div>
  );
}

export default App;
