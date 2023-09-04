import React, { FC } from "react";

import dynamic from "next/dynamic";

const BrowsePage = dynamic(() => import("../../../src/pages/browse"));

const Browse: FC = () => <BrowsePage />;

export default Browse;
