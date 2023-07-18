import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import KeplrConnect from '../components/cards/keplr/KeplrConnect';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Connect Keplr - Secret Network Testnet</title>
        <meta
          name="description"
          content="Add pulsar-3 network configuration to Keplr - Secret Network"
        />
        <link rel="icon" href="/secret-favicon.png" />
      </Head>
      <Card>
        <CardContent>
          <KeplrConnect/>
        </CardContent>
      </Card>
      <section>

      </section>
    </div>
  );
};

export default Home;
