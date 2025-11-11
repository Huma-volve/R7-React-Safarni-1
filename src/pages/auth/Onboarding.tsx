import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Wrapper, { ctaButtonStyle } from "@/components/reusable/LayoutWrapper";
import OnboardingPicture from '@/assets/auth/onboarding-pic.svg'

export default function Onboarding() {
  const navigate = useNavigate();

  const handleContinue = (path: string) => {
    // localStorage.setItem("onboardingSeen", "true");
    navigate(path);
  };

  const subHeadingText = `Safarni is your all-in-one travel guide. Discover destinations, compare trip prices, book flights, hotels, car rentals,
              and local tours — all through one interactive experience.`
  return (
      <Wrapper imgSrc={OnboardingPicture} headingSection={{ headingText: 'Welcome', subHeadingText: subHeadingText}}>
          <div className="flex flex-col items-center gap-4 mt-3">
              <Button onClick={() => handleContinue('/signup')} className={ctaButtonStyle}>
                  Signup
              </Button>
              <Button variant='outline' onClick={() => handleContinue('/login')} className={ctaButtonStyle}>
                  Login
              </Button>
          </div>
    </Wrapper>
  );
}

{/* <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}>
      </motion.div>
    </AnimatePresence> */
}