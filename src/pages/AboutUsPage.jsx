import { Helmet } from "react-helmet"
import AboutFirst from "../components/organism/AboutFirst"
import AboutGallery from "../components/organism/AboutGallery"
import AboutVisiMisi from "../components/organism/AboutVisiMisi"
import AboutWhyChooseUs from "../components/organism/AboutWhyChooseUs"

const AboutUsPage = () => {

  return (
    <>
      <Helmet>
        <title>Tentang Kami</title>
      </Helmet>
      <main>
        <AboutFirst />
        <AboutVisiMisi />
        <AboutWhyChooseUs />
        <AboutGallery />
      </main>
    </>
  )
}

export default AboutUsPage