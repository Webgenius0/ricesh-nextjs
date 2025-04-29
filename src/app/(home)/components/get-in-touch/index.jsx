'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useGetInTouch } from '@/hooks/contact.hook';

export default function GetInTouch() {
  const { form, mutate, isPending } = useGetInTouch();
  function onSubmit(values) {
    console.log('Form values:', values);
    mutate(data);
  }
  return (
    <section>
      <div className="container flex  gap-6">
        <div className="basis-[50%] flex flex-col gap-6 p-6 bg-[#FFFF] rounded-[24px]">
          <h1 className="text-[36px] leading-[44px] font-outfit text-foreground font-semibold">
            Let's Get In Touch
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-fullrounded-sm bg-[#FFF] flex flex-col gap-4"
            >
              <div className="w-full flex flex-col sm:flex-row gap-4">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                        First name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your first name"
                          className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
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
                      <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                        Last name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your last name"
                          className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
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
                    <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
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
                    <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        rows={8}
                        className="w-full border p-2 rounded placeholder:text-[#8A8787]"
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
                className="py-5 px-6 rounded-[60px]  cursor-pointer flex w-1/2 text-base font-medium bg-[#23938B] text-[#FFF] mt-1"
              >
                {isPending ? 'Submitting' : 'Submit'}
              </Button>
            </form>
          </Form>
        </div>
        <div className="basis-[50%] flex flex-col gap-5">
          <h1 className=" text-[50px] leading-[66px] font-semibold font-outfit text-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            deserunt ut nemo.
          </h1>
          <p className="text-base leading-[24px] text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            officiis libero! Repellat recusandae eos quas obcaecati neque iure
            in ullam.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-[5.5px]">
              <p>Lorem ispum</p>
            </div>
            <p className="flex items-center gap-[5.5px]">
              Lorem ispum simple text
            </p>
          </div>
          <Button
            type="button"
            className="py-5 px-6 rounded-[60px]  cursor-pointer flex w-1/2 text-base font-medium bg-[#23938B] text-[#FFF] mt-1"
          >
            Discover more
          </Button>
        </div>
      </div>
    </section>
  );
}
