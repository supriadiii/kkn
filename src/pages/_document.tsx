import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./component/Navbar/navbar";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <Navbar /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
