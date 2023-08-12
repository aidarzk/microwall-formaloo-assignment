import { Editor } from "@/containers/Editor/Editor";
import Head from "next/head";

export default function EditorPage() {
  return (
    <>
      <Head>
        <title>Editor | Microwall App</title>
      </Head>
      <Editor />
    </>
  );
}
