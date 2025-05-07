"use client";

import Clipboard from "@/assets/SVG/Clipboard";
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
import { Textarea } from "@/components/ui/textarea";
import { useGetInTouch } from "@/hooks/contact.hook";

export default function GetInTouch({ theme = "light" }) {
  const { form, mutate, isPending } = useGetInTouch();
  let colors;

  switch (theme) {
    case "dark":
      colors = {
        mainSectionBg: "bg-dark",
        sectionBg: "bg-foreground",
        inputBg: "bg-dark",
        placeholderText: "placeholder:#BABABAB2",
        labelText: "text-white",
        paragraphText: "text-dark-foreground",
        buttonText: "text-[#FFF]",
        highlightBg: "bg-primary/10",
        highlightText: "text-primary",
      };
      break;
    default:
      colors = {
        sectionBg: "bg-[#FFFF]",
        inputBg: "bg-muted",
        placeholderText: "placeholder:text-dark-foreground",
        labelText: "text-foreground",
        paragraphText: "text-muted-foreground",
        buttonText: "text-[#FFF]",
        highlightBg: "bg-primary/10",
        highlightText: "text-primary",
      };
      break;
  }

  return (
    <section className={`${colors.mainSectionBg}`} data-aos="fade-up">
      <div className="container flex items-center gap-6 py-[100px]">
        <div
          className={`basis-[50%] flex flex-col gap-6 p-6 rounded-[24px] ${colors.sectionBg}`}
        >
          <h1
            className={`text-[36px] leading-[44px] font-outfit font-semibold ${colors.labelText}`}
          >
            Let's Get In Touch
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(mutate)}
              className={`max-w-full rounded-sm flex flex-col gap-4 ${colors.sectionBg}`}
            >
              <div className="w-full flex flex-col sm:flex-row gap-4">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel
                        className={`text-lg leading-[26px] font-medium ${colors.labelText}`}
                      >
                        First name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type Here"
                          className={`px-5 py-6 border-none rounded-lg ${colors.inputBg} ${colors.placeholderText}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel
                        className={`text-lg leading-[26px] font-medium ${colors.labelText}`}
                      >
                        Last name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type Here"
                          className={`px-5 py-6 border-none rounded-lg ${colors.inputBg} ${colors.placeholderText}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={`text-lg leading-[26px] font-medium ${colors.labelText}`}
                    >
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type Here"
                        className={`px-5 py-6 border-none rounded-lg ${colors.inputBg} ${colors.placeholderText}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={`text-lg leading-[26px] font-medium ${colors.labelText}`}
                    >
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className={`px-5 py-6 border-none rounded-lg min-h-32 ${colors.inputBg} ${colors.placeholderText}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isPending}
                className={`py-5 px-6 rounded-[60px] cursor-pointer flex text-base font-medium mt-1 w-fit ${colors.buttonText}`}
              >
                {isPending ? "Submitting" : "Submit"}
              </Button>
            </form>
          </Form>
        </div>

        <div className="basis-[50%] flex flex-col gap-5">
          <h1
            className={`text-[50px] leading-[66px] font-semibold font-outfit ${colors.labelText}`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            deserunt ut nemo.
          </h1>
          <p className={`text-base leading-[24px] ${colors.paragraphText}`}>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex items-center gap-6 mb-9">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className={`rounded-full w-fit p-2 ${colors.highlightBg}`}>
                  <div className={`w-5 ${colors.highlightText}`}>
                    <Clipboard />
                  </div>
                </div>
                <p
                  className={`text-xl font-medium leading-[24px] ${colors.paragraphText}`}
                >
                  {i === 0 ? "Lorem Ipsum" : "Lorem Ipsum simply text"}
                </p>
              </div>
            ))}
          </div>
          <Button
            type="button"
            className="w-fit"
            variant={"default"}
            size="default"
          >
            Discover more
          </Button>
        </div>
      </div>
    </section>
  );
}
