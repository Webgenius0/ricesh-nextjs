import delay from "@/lib/delay";
import { GetInTouchSchema } from "@/schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useGetInTouch = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(GetInTouchSchema),
  });

  const result = useMutation({
    mutationFn: async (data) => {
      await delay(2000);

      return {
        success: true,
        message: "Message sent successfully",
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
