import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { PDFViewer } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js';
import MyDocument from "../components/BasicDocument";
export default function Home() {
  return (
    <div className="container-fluid">
        <Layout>
          <p>Home</p>
        <PDFViewer>
          <MyDocument />
    </PDFViewer>
        </Layout>
      </div>
  );
}
