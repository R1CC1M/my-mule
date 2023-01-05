import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Subnav from '../components/Subnav'
import Content from '../components/Content'
import data from '../constants'
import { Flex } from '@chakra-ui/react'
import ExperienceSection from '../components/ExpierenceSection'
import CustomersSection from '../components/CustomersSection'
import TeamSection from '../components/TeamSection'
import OpeningsSection from '../components/OpeningsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" minHeight="100vh">
        <Navbar />
        <Hero />
        <Subnav />
        <Content>
          <ExperienceSection />
        </Content>
        <TeamSection />
        <Content>
          <CustomersSection />
        </Content>
        <Content>
          <OpeningsSection />
        </Content>
        <Footer />
      </Flex>
    </>
  )
}
