import Wrapper, { ctaButtonStyle } from "@/components/reusable/LayoutWrapper";
import DonePicture from '@/assets/auth/done-pic.svg'
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CheckIcon from '@/assets/auth/check-icon.svg'

export default function ResetPasswordSuccess() {
    const subHeadingText = 'your password has been  successfully reset click below to log in magically.';
    const navigate = useNavigate();

    return <Wrapper imgSrc={DonePicture} headingSection={{headingText: 'Password Reset', subHeadingText: subHeadingText, icon: CheckIcon}}>
        <Button type='submit' className={`${ctaButtonStyle} mt-4`} onClick={() => navigate('/login')}>Log In</Button>
    </Wrapper>
}