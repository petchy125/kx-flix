import React, { FC } from "react";

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@Containers/HomePage"));

const App: FC = () => <HomePage />;

export default App;
