"use client"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { ToastAction } from "@/components/ui/toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { TUser } from "@/types";
import { verifyToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

const Login = () => {
const router =useRouter()
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
   

    try {

      const userInfo = {
        email: values.email,
        password: values.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast({
        title:'Login',
        description:"User login successfully",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })
     router.push('/dashboard/super_admin')
    } catch (err: any) {
      toast({
        variant:'destructive',
        title:'Failed',
        description:(err as any)?.data?.message || "An error occurred",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })
    } 
  };

  return (
  <div  className="flex justify-center items-center">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <Card className="w-full max-w-md space-y-4 p-4  shadow-sm">
              <CardHeader>
                <h2 className="text-xl  md:text-2xl font-semibold text-primary">Login</h2>
                <p>
                  Enter your email below to login to your account.
                </p>
              </CardHeader>
    
              {error && <p className="text-red-500">{error}</p>}
    
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" disabled={isLoading} className="w-full">
                Login
                {isLoading && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
              </Button>
            </Card>
          </form>
        </Form>
      </div>
  </div>
  );
};

export default Login;
