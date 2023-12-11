import heroMobile from '../../../public/images/mobile/image-hero.jpg'
import heroDesktop from '../../../public/images/desktop/image-hero.jpg'

const Hero = () => {
  return (
    <section>
      <img
        src={heroMobile}
        alt="Immersive experience"
        className="absolute top-0 left-0 -z-20"
      />
    </section>
  )
}

export default Hero
