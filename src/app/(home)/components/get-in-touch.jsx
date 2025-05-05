'use client';

import Clipboard from '@/assets/SVG/Clipboard';
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

  return (
    <section>
      <div className="container flex items-center gap-6 py-[100px]">
        <div className="basis-[50%] flex flex-col gap-6 p-6 bg-[#FFFF] rounded-[24px]">
          <h1 className="text-[36px] leading-[44px] font-outfit text-foreground font-semibold">
            Let's Get In Touch
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(mutate)}
              className="max-w-fullrounded-sm bg-[#FFF] flex flex-col gap-4"
            >
              <div className="w-full flex flex-col sm:flex-row gap-4">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-lg leading-[26px] font-medium text-foreground">
                        First name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type Here"
                          className="px-5 py-6 border border-none bg-muted placeholder:text-dark-foreground rounded-lg"
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
                      <FormLabel className="text-lg leading-[26px] font-medium text-foreground">
                        Last name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type Here"
                          className="px-5 py-6 border border-none bg-muted placeholder:text-dark-foreground rounded-lg"
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
                    <FormLabel className="text-lg leading-[26px] font-medium text-foreground">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type Here"
                        className="px-5 py-6 border border-none bg-muted placeholder:text-dark-foreground rounded-lg"
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
                    <FormLabel className="text-lg leading-[26px] font-medium text-foreground">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        // rows={120}
                        className="px-5 py-6 border border-none bg-muted placeholder:text-dark-foreground rounded-lg min-h-32"
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
                className="py-5 px-6 rounded-[60px]  cursor-pointer flex text-base font-medium text-[#FFF] mt-1 w-fit"
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
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex items-center gap-6 mb-9">
            <div className="flex items-center gap-2.5">
              <div className=" bg-primary/10 rounded-full w-fit p-2">
                <div className="w-5 text-primary">
                  <Clipboard />
                </div>
              </div>
              <p className="text-xl font-medium leading-[24px] text-muted-foreground">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className=" bg-primary/10 rounded-full w-fit p-2">
                <div className="w-5 text-primary">
                  <Clipboard />
                </div>
              </div>
              <p className="text-xl font-medium leading-[24px] text-muted-foreground">
                Lorem Ipsum simply text
              </p>
            </div>
          </div>
          <Button
            type="button"
            className="w-fit"
            variant={'default'}
            size="default"
          >
            Discover more
          </Button>
        </div>
      </div>
    </section>
  );
}
