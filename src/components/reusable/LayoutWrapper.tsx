/// For an example about how to use it, see this:
// component: @/pages/auth/ForgetPassword
// or this path localhost:5173/signup

import { AiOutlineArrowLeft } from "react-icons/ai"
import { useLocation, useNavigate } from "react-router-dom"

// That's what's this component expects as parameters
interface WrapperProps {
    imgSrc: string
    children: React.ReactNode
    headingSection: {
        icon?: string,
        headingText: string,
        subHeadingText: string
    }
}

// Call-To-Action styling
export const ctaButtonStyle = 'w-full rounded-sm py-5 text-lg'

export default function Wrapper({ imgSrc, children, headingSection}: WrapperProps) {
    const location = useLocation();
    const navigate = useNavigate()
    const hideBackButton = location.pathname.startsWith("/onboarding") || location.pathname.startsWith("/success");

    return <main className="my-7 md:my-10 mx-5 md:mx:0">

        {/* Icons (go-back-arrow icon + logo) */}
        <section className="mb-10 flex items-center justify-between">
            {!hideBackButton && (
                // This icon goes back one step
                <div onClick={() => navigate(-1)} className="cursor-pointer rounded-full bg-[#F3F4F6] hover:bg-neutral-200 transition p-4">
                    <AiOutlineArrowLeft />
                </div>
            )}

            <img src="/logo.svg" alt="Logo" className="w-18 ml-auto"/>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 items-center text-center gap-10 md:gap-">
            {/* This is the image that's on the left */}
            <img  src={imgSrc} alt="Auth Image" />
            
            {/* This is the section that's on the right */}
            <div>
                <div className="flex flex-col gap-4">
                    {headingSection.icon && (
                        <img src={headingSection.icon} alt="head-section-imag" className="h-6" />
                    )}
                    <h1 className="text-3xl font-medium">{headingSection.headingText}</h1>
                    <p  className="text-neutral-500 text-xl">{headingSection.subHeadingText}</p>
                </div>

                {/* The content you will add to your component will appear here*/}
                {children}
            </div>
        </section>
    </main>
}