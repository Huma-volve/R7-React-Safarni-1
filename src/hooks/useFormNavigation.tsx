import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface ToastMessage {
  msg: string;
  description: string;
}

interface OnSubmitProps {
    e: React.FormEvent<HTMLFormElement>;
    path: string
    toaster?: {
        toastSuccess: ToastMessage
        toastError: ToastMessage
    }
}

export function useFormNavigation() {
    const navigate = useNavigate();
    
    const handleOnSubmit = ({e, path, toaster}: OnSubmitProps) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
    
        const formData = new FormData(form);
        let hasEmpty = false;

        for (const [value] of formData.entries()) {
            if (!value.toString().trim()) {
                hasEmpty = true;
                break;
            }
        }

        if(hasEmpty) {
            toast.error(toaster?.toastError.msg, {
                description: toaster?.toastError.description
            })

            return
        }

        if(toaster) {
            toast.success(toaster?.toastSuccess.msg, {
                description: toaster?.toastSuccess.description
            })
        }
        navigate(path);
    };

    return { handleOnSubmit };
}
