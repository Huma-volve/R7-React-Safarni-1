import Wrapper, { ctaButtonStyle } from "./LayoutWrapper";
import OTPPic from '@/assets/auth/otp.svg'
import VerifyIcon from '@/assets/auth/verify-otp.svg'
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useFormNavigation } from "@/hooks/useFormNavigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function OTP() {
    const subHeadingText = 'Please enter the code we just sent to email kneedue@untitledui.com';
    const { handleOnSubmit} = useFormNavigation()
    const [countdown, setCountdown] = useState(30);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (countdown === 0) {
            setCanResend(true);
            return;
        }

        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown]);

    const handleResend = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!canResend) return;

        toast.success("OTP sent again", {
            description: "Please check your email!",
        });

        // Reset timer
        setCountdown(30);
        setCanResend(false);
    };
    
    return <Wrapper imgSrc={OTPPic} headingSection={{headingText: 'Verify Code', subHeadingText: subHeadingText, icon: VerifyIcon}}>
        <div>
            <form onSubmit={(e) => handleOnSubmit({e, path: '/new-password',
                toaster: {
                    toastError: {
                        msg: 'Invalid OTP',
                        description: 'Please enter the correct OTP sent to your email or phone.'
                    },
                    toastSuccess: {
                        msg: 'OTP Verified!',
                        description: 'Your code was correct. You can proceed.'
                    }
                }
            })}>
                <span className="block font-medium text-2xl mt-4">
                    {countdown > 0 && `00:${countdown}`}
                </span>
                <InputOTP maxLength={4}>
                    <InputOTPGroup className="grid grid-cols-4 place-items-center gap-4 w-[80%] mx-auto mt-5">
                        <InputOTPSlot index={0} className="border rounded-sm w-full h-12" />
                        <InputOTPSlot index={1} className="border rounded-sm w-full h-12" />
                        <InputOTPSlot index={2} className="border rounded-sm w-full h-12" />
                        <InputOTPSlot index={3} className="border rounded-sm w-full h-12" />
                    </InputOTPGroup>
                </InputOTP>

                <div className="mt-4">
                    <span className="-mr-2">OTP not received?</span>
                    <Button variant='link' className={`text-primary-700 transition-opacity
                        ${canResend ? "opacity-100" : "opacity-40 pointer-events-none" }`} onClick={handleResend}>
                        Send again
                    </Button>
                </div>

                <Button type="submit" className={`${ctaButtonStyle} mt-4`}>Verify</Button>
            </form>

        </div>
    </Wrapper>
}