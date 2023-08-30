import React, { FC } from "react";

import dynamic from "next/dynamic";

const SignUpPage = dynamic(() => import("../src/pages/signup"));

const SignUp: FC = () => <SignUpPage />;

export default SignUp;
