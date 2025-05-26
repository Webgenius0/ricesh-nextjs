import delay from "@/lib/delay";
import { SignInSchema } from "@/schema/sign-in.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useSignIn = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });

  const result = useMutation({
    mutationFn: async (data) => {
      await delay(2000);

      return {
        success: true,
        message: "Sign In successfully",
        data,
      };
    },
    onSuccess: (data) => {
      if (data?.success) {
        form.reset();
        toast.success(data?.message || "Success!");
      }
    },
  });

  return { ...result, form };
};
