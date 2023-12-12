import heroMobile from '../../../public/images/mobile/image-hero.jpg'
import heroDesktop from '../../../public/images/desktop/image-hero.jpg'

const Hero = () => {
  return (
    <section className="container flex sm:py-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={heroMobile} />
        <img src={heroDesktop} alt="Immersive experience" className="absolute top-0 left-0 w-screen -z-20 sm:object-cover sm:h-[30rem]" />
      </picture>
      <div className="relative -z-20 -bottom-20 p-6 border-2 border-white large-title-text text-white w-auto max-w-xl sm:bottom-0">
        <h1 className="large-title-text text-white">
          Immersive experiences that deliver
        </h1>
      </div>
    </section>
  )
}

export default Hero
