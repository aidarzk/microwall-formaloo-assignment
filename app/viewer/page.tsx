"use client";
import { Viewer } from "@/containers/Viewer/Viewer";
import Head from "next/head";

export default function ViewrPage() {
  return (
    <>
      <Head>
        <title>Viewer | Microwall App</title>
      </Head>
      <Viewer />
    </>
  );
}
