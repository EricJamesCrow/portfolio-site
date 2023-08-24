import { useToast } from "@/components/ui/use-toast";

export const useCustomToast = () => {
    const { toast } = useToast();

    const showSuccessToast = (description: string = 'Operation completed successfully.') => {
        toast({
            title: 'Success',
            description,
        });
    };

    const showDestructiveToast = (description: string = 'An unexpected error has occurred. Please try again.') => {    
        toast({
            variant: "destructive",
            title: 'Error',
            description,
        });
    };

    return { showSuccessToast, showDestructiveToast };
};
