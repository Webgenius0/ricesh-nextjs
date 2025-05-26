import delay from "@/lib/delay";
import { SignUPSchema } from "@/schema/sign-up.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignUPSchema),
  });

  const result = useMutation({
    mutationFn: async (data) => {
      await delay(2000);

      return {
        success: true,
        message: "Sign Up successfully",
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
