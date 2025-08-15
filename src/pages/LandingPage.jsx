import { Helmet } from "react-helmet"
import LandingFirst from "../components/organism/LandingFirst"
import LandingAdvantages from "../components/organism/LandingAdvantages"
import LandingSteps from "../components/organism/LandingSteps"
import LandingTestimoni from "../components/organism/LandingTestimoni"
import LandingCAT from "../components/organism/LandingCAT"
import LandingFAQ from "../components/organism/LandingFAQ"

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>LapangKu</title>
      </Helmet>
      <LandingFirst />
      <LandingAdvantages />
      <LandingSteps />
      <LandingTestimoni />
      <LandingCAT />
      <LandingFAQ />
    </>
  )
}

export default LandingPage