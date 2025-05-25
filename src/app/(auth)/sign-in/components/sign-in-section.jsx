"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGetInTouch } from "@/hooks/contact.hook";
import { useState } from "react";

export default function SignInSection() {
  const { form, mutate, isPending } = useGetInTouch();
  const [remember, setRemember] = useState(false);

  return (
    <section className="bg-[url(/images/banner.jpg)] h-screen bg-no-repeat bg-cover flex items-center justify-center">
      <div className="container px-5 md:px-8 flex items-center justify-center h-full">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md py-10 px-6 md:px-12 flex flex-col items-center">
          <h2 className="text-2xl font-bold font-outfit text-foreground mb-2">
            Speechceu.com
          </h2>
          <h3 className="text-lg font-medium text-foreground mb-6">Sign In</h3>
          <Button
            variant="light"
            size="default"
            className="w-full mb-4 flex items-center justify-center gap-2 border border-muted bg-muted text-foreground font-medium"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 48 48" className="mr-2">
              <g>
                <circle fill="#fff" cx="24" cy="24" r="24" />
                <path
                  fill="#4285F4"
                  d="M34.6 24.2c0-.7-.1-1.4-.2-2H24v4.1h6c-.3 1.5-1.4 2.7-2.9 3.5v2.9h4.7c2.7-2.5 4.3-6.1 4.3-10.5z"
                />
                <path
                  fill="#34A853"
                  d="M24 36c3.6 0 6.6-1.2 8.8-3.2l-4.7-2.9c-1.3.9-3 1.4-4.1 1.4-3.2 0-5.9-2.2-6.9-5.1h-4.8v3.1C15.3 33.8 19.3 36 24 36z"
                />
                <path
                  fill="#FBBC05"
                  d="M17.1 26.2c-.3-.9-.5-1.8-.5-2.7s.2-1.8.5-2.7v-3.1h-4.8C11.5 20.2 11 22 11 24s.5 3.8 1.3 5.5l4.8-3.3z"
                />
                <path
                  fill="#EA4335"
                  d="M24 17.9c1.9 0 3.6.6 4.9 1.7l3.7-3.7C30.6 13.7 27.6 12 24 12c-4.7 0-8.7 2.2-11.1 5.7l4.8 3.3c1-2.9 3.7-5.1 6.9-5.1z"
                />
              </g>
            </svg>
            Log in with Google
          </Button>
          <div className="flex items-center w-full my-4">
            <div className="flex-1 h-px bg-muted"></div>
            <span className="mx-3 text-xs text-muted-foreground">OR</span>
            <div className="flex-1 h-px bg-muted"></div>
          </div>
          <Form {...form} className="w-full">
            <form
              onSubmit={form.handleSubmit(mutate)}
              className="w-full flex flex-col gap-4"
            >
              <div>
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel
                        className={`text-sm md:text-lg leading-[26px] font-medium}`}
                      >
                        First name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type Here"
                          className={`px-5 py-6 border-none rounded-lg`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-muted-foreground mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    className="px-4 py-3 border border-muted bg-muted rounded-lg text-base pr-10"
                    required
                    minLength={8}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer select-none">
                    {/* Eye icon placeholder */}
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1 ml-1">
                  At least 8 characters and one number.
                </div>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="accent-primary w-4 h-4 rounded mr-2"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground select-none"
                >
                  Remember me
                </label>
              </div>
              <Button
                type="submit"
                disabled={isPending}
                className={`md:py-5 px-6 rounded-[60px] cursor-pointer flex text-base font-medium mt-1 w-fit`}
              >
                {isPending ? "Submitting" : "Log in"}
              </Button>
            </form>
          </Form>
          <div className="text-xs text-muted-foreground mt-4 text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
