import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GoogleLogo from '@/assets/auth/google-icon.svg'
import { FaFacebook, FaApple } from "react-icons/fa";

export default function CtaSection({signup}: {signup: boolean}) {
    const socialMediaIconsStyle = 'flex items-center justify-center rounded-md cursor-pointer border border-primary-700 py-2 px-12 hover:border-primary-500 transition'
    const navigate = useNavigate();

    return <>
        <div className="flex items-center justify-center my-5">
            <div className="w-[30%] h-px bg-neutral-500"></div>
            <span className="px-4 text-neutral-800">or</span>
            <div className="w-[30%] h-px bg-neutral-500"></div>
        </div>

        {/* Login METHODS */}
        <div className="grid grid-cols-3 place-items-center gap-4">
            <div className={socialMediaIconsStyle}>
                <img src={GoogleLogo} className='h-8 object-contain'/>
            </div>

            <div className={socialMediaIconsStyle}>
                <FaApple size={33}/>
            </div>

            <div className={socialMediaIconsStyle}>
                <FaFacebook color="#1877F2" size={33}/>
            </div>

        </div>

        <div className="flex items-center justify-center mt-3">
            <span>{signup ? "Don't have an account?" : 'Already have an account?'}</span>
            <Button variant='link' className='text-primary-700 -ml-2' onClick={() => navigate(signup ? '/login' : '/signup')}>
                {signup ? 'Log In' :'Sign Up'}
            </Button>
        </div>
    </>
}