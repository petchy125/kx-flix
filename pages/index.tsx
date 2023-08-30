import React, { FC } from "react";

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../src/pages/home"));

const Home: FC = () => <HomePage />;

export default Home;
