import React, { FC } from "react";

import dynamic from "next/dynamic";

const SignInPage = dynamic(() => import("../src/pages/signin"));

const SignIn: FC = () => <SignInPage />;

export default SignIn;
