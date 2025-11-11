import { Input } from "@/components/ui/input";
import Wrapper, { ctaButtonStyle } from "@/components/reusable/LayoutWrapper";
import NewPasswordPic from '@/assets/auth/new-password.svg'
import LockerIcon from '@/assets/auth/locker-icon.svg'
import { Button } from "@/components/ui/button";
import { useFormNavigation } from "@/hooks/useFormNavigation";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function NewPassword() {
    const subHeadingText = 'Your New Password Must be Different to Previously Used Password';
    const { handleOnSubmit} = useFormNavigation()
    const [password, setPassword] = useState('');
    const [requirements, setRequirements] = useState({
        length: false,
        specialChar: false
    });
    
    useEffect(() => {
        setRequirements({
            length: password.length >= 8,
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        });
    }, [password]);

    const isValid = Object.values(requirements).every(Boolean);

    return <Wrapper imgSrc={NewPasswordPic} headingSection={{headingText: 'Set New Password', subHeadingText: subHeadingText, icon: LockerIcon}}>
        <div>
            <form onSubmit={(e) => handleOnSubmit({e, path: '/success'})} className="flex flex-col gap-3 mt-5 text-left">
                <div>
                    <label htmlFor="password">New Password</label>
                    <Input required type="password" id="password" placeholder="Choose a strong password" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className={`flex items-center gap-2 ${requirements.length ? 'text-green-600' : 'text-neutral-500'}`}>
                        <FaCheckCircle />
                        <span>Must be at least 8 characters</span>
                </div>
                <div className={`flex items-center gap-2 ${requirements.specialChar ? 'text-green-600' : 'text-neutral-500'}`}>
                    <FaCheckCircle />
                    <span>Must contain one special character</span>
                </div>

                <Button type='submit' className={`${ctaButtonStyle} mt-4`} disabled={!isValid}>Reset Password</Button>

            </form>
        </div>
    </Wrapper>
}