import React from 'react'
import AfterWove from '../AfterWove/AfterWove'
import BeforeWove from '../BeforeWove/BeforeWove'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Loop from '../Loop/Loop'
import MainContent from '../MainContent/MainContent'
import SourceTruth from '../SourceTruth/SourceTruth'
import Tabs from '../Tabs/Tabs'
import WorkFlow from '../WorkFlow/WorkFlow'

const Main = () => {
  return (
    < >
      <Header />
      {/** Childe Component start */}
      <MainContent />
      <Tabs />
       <WorkFlow />
      <BeforeWove />
      <AfterWove />
      <SourceTruth />
      <Loop />
      <Footer />
    </>
  )
}

export default Main
