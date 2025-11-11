import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Wrapper from "./LayoutWrapper";
import { ctaButtonStyle } from "./LayoutWrapper";
import CtaSection from "./CtaSection";
import { useFormNavigation } from "@/hooks/useFormNavigation";
import SignupPicture from '@/assets/auth/signup.svg'

export default function SignUp() {
    const subHeadingText = 'Please fill this data to create your new account';
    const { handleOnSubmit} = useFormNavigation()

    return <Wrapper imgSrc={SignupPicture} headingSection={{headingText: 'Welcome', subHeadingText: subHeadingText}}>
        <>
            {/* INPUTS */}
            <form onSubmit={(e) => handleOnSubmit({e, path: '/',
                toaster: {
                    toastError: {
                        msg: 'Signup Failed',
                        description: 'Please fill in all required fields.'
                    },
                    toastSuccess: {
                        msg: 'Account Created!',
                        description: 'You have successfully signed up.'
                    }
                }
            })} className="flex flex-col gap-3 mt-5 text-left">
                <div>
                    <label htmlFor="email">Email</label>
                    <Input type='email' required placeholder="email@example.com" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input type="password" required id="password" placeholder="Choose a strong password"/>
                </div>
                <Button type='submit' className={`${ctaButtonStyle} mt-4`}>Sign Up</Button>
            </form>

            <div className="mt-8">
                <CtaSection signup={true} />
            </div>
        </>
    </Wrapper>
}