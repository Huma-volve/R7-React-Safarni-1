import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Wrapper, { ctaButtonStyle } from "@/components/reusable/LayoutWrapper";
import LogInPicture from '@/assets/auth/login.svg'
import { Button } from "@/components/ui/button";
import CtaSection from "./CtaSection";
import { useFormNavigation } from "@/hooks/useFormNavigation";

export default function LogIn() {
    const navigate = useNavigate();
    const subHeadingText = 'welcome back! please fill your data';
    const { handleOnSubmit} = useFormNavigation()

    return <Wrapper imgSrc={LogInPicture} headingSection={{headingText: 'Welcome Again', subHeadingText: subHeadingText}}>
        <div>
            {/* INPUTS */}
            <form onSubmit={(e) => handleOnSubmit({e, path: '/',
                toaster: {
                    toastError: {
                        msg: 'Login Failed',
                        description: 'Please fill in both email and password.'
                    },
                    toastSuccess: {
                        msg: 'Welcome Back!',
                        description: 'You have successfully logged in.'
                    }
                }
            })} className="flex flex-col gap-3 mt-5 text-left">
                <div>
                    <label htmlFor="email">Email</label>
                    <Input required type='email' placeholder="email@example.com" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input required type="password" id="password" placeholder="Choose a strong password"/>
                </div>

                <Button type='submit' className={`${ctaButtonStyle} mt-4`}>Log In</Button>
                <Button variant='link' onClick={() => navigate('/forget-password')} className="self-end -mb-4">Forget Password?</Button>
            </form>

            <CtaSection signup={false} />

        </div>
    </Wrapper>
}