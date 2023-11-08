"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import toast from "react-hot-toast";

const FormSchema = z.object({
  email: z.string().email().min(2, {
    message: "email must be at least 4 characters.",
  }),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});

export default function Login() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { formState } = form;
  const { errors, isSubmitting } = formState;
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.loading("Logging in");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await res.json();
    if (response?.success) {
      window.location.reload();
      toast.success("Logged in successfully");
      // router.push("/");
      toast.dismiss();
    } else {
      toast.dismiss();
      toast.error(response?.msg);
      console.log(response?.msg);
      // window.location.reload();
      return false;
    }
    toast.dismiss();
  }

  return (
    <div className=" w-[400px] text-center p-4 border-2 bg-white rounded-xl shadow-lg ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-6 justify-center items-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input className="" placeholder="Email address" {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Passowrd</FormLabel> */}
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="h-[51px] w-[360px] font-bold text-xl rounded-lg"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging..." : "Log in"}
          </Button>
          <hr className="h-[1px] w-full bg-zinc-200 my-2" />
          <div className="text-center  mb-5 ">
            <Link
              className="text-white bg-green-600 text-lg font-medium p-[9px] rounded-lg m-auto"
              href={"/user/register"}
            >
              Create New Account
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
