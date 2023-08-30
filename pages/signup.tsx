import React, { FC } from "react";

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../src/pages/home"));

const App: FC = () => <HomePage />;

export default App;
