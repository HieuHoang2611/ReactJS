import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../components/Mydocument';
export default function Home() {
  return (

    <PDFViewer>
    <MyDocument />
  </PDFViewer>
  )
}
