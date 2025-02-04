import { useToast as useToastLib } from "react-native-toast-notifications";

type ToastType = "normal" | "success" | "warning" | "danger" | "custom";

export function useToast() {
    const toast = useToastLib();

    const showToast = (type: ToastType, message: string) => {
        toast.show(message, {
            type,
        });
    };

    return { showToast };
}