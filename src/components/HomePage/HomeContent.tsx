import { AvailableToursSection } from './AvailableTours'
import { Category } from './Category'
import HeroSection from './HeroHomepage'
import { RecommendationSection } from './Recommendation'


export const HomeContent = () => {
  return (
    <>
  <HeroSection />
  <Category />
  <RecommendationSection/>
  <AvailableToursSection/>
  </>
  )
}
