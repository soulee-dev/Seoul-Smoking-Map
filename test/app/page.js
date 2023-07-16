"use client";
import React from "react";
import { NavermapsProvider } from "react-naver-maps";
import Map from "./components/map";

export default function Home() {
  return (
    <NavermapsProvider ncpClientId="u4xcz1lpjz">
      <Map />
    </NavermapsProvider>
  );
}
