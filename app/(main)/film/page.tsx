import React, { FC } from "react";

import dynamic from "next/dynamic";

const FilmPage = dynamic(() => import("../src/pages/film"));

const Film: FC = () => <FilmPage />;

export default Film;
