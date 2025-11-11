import { Input } from "@/components/ui/input";
import Wrapper from "./LayoutWrapper";
import ForgetPassPic from '@/assets/auth/forget-password.svg'
import KeyIcon from '@/assets/auth/key-icon.svg'
import { Button } from "@/components/ui/button";
import { ctaButtonStyle } from "./LayoutWrapper";
import { useFormNavigation } from "@/hooks/useFormNavigation";

export default function ForgetPassword() {
    const subHeadingText = 'Please enter your email to reset that password';
    const { handleOnSubmit} = useFormNavigation()

    return <Wrapper imgSrc={ForgetPassPic} headingSection={{headingText: 'Forgot Password?', subHeadingText: subHeadingText, icon: KeyIcon}}>
        <form onSubmit={(e) => handleOnSubmit({e, path: '/otp'})} className="flex flex-col gap-3 mt-5 text-left">
            <div>
                <label htmlFor="email">Email</label>
                <Input type='email' placeholder="email@example.com" id="email" required />
            </div>
            <Button type="submit" className={`${ctaButtonStyle} mt-4`}>Reset Password</Button>
        </form>
    </Wrapper>
}