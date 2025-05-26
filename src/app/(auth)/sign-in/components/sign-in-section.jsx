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
import Link from "next/link";
import { useState } from "react";

export default function SignInSection() {
  const { form, mutate, isPending } = useGetInTouch();
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  console.log("isPending", form.formState.isPending);

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
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2443"
                height="2500"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 262"
                id="google"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
            </div>
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
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel
                        className={`text-xs leading-[26px] font-medium}`}
                      >
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type Here"
                          className={`px-5 py-6 border-[1px] border-[#D6D6D6] bg-transparent rounded-lg text-foreground`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div className="relative">
                  {/* password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel
                          className={`text-xs leading-[26px] font-medium`}
                        >
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="********"
                              className="px-5 py-6 border-[1px] border-[#D6D6D6] bg-transparent rounded-lg text-base pr-10 text-foreground"
                              minLength={8}
                              {...field}
                            />
                            <span
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer select-none"
                            >
                              {/* Eye icon placeholder */}
                              {showPassword ? (
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
                              ) : (
                                <svg
                                  width="20"
                                  height="20"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.77 21.77 0 0 1 5.06-5.94M1 1l22 22" />
                                  <path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5c1.38 0 2.63-.56 3.53-1.47" />
                                </svg>
                              )}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                className={`md:py-5 px-6 rounded-[8px] cursor-pointer flex text-base font-medium mt-1 w-full`}
              >
                {isPending ? "Submitting" : "Log in"}
              </Button>
            </form>
          </Form>
          <div className="text-xs text-muted-foreground mt-4 text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
