


"use client";

import { z } from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { useForm, useFieldArray } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast, useToast } from "../ui/use-toast";
import {  Loader2 } from "lucide-react";
import { useState } from "react";
import { useCreateProjectMutation } from "@/redux/features/project/projectApi";
const formSchema = z
    .object({
        name: z.string().min(1, {
            message: "Enter your userName",
        }),
       
    });
const AddFrontendSkillForm = () => {
    const [createProject, { isLoading }] = useCreateProjectMutation();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [error, setError] = useState("");
    const { } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
          
        },
    });

    // const { fields, append, remove } = useFieldArray({
    //     control: form.control,
    //     name: "technologies",
    // });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        setError("");
       

        try {
            const res = await createProject(values);
            console.log(res, "values.........");

            if (res?.data) {
                toast({
                    title: "Success!",
                    description: `Project created successfully`,
                });
                router.push("/projects"); // Navigate to the projects page after success
            } else {
                // setError(res?.error.error || "An unexpected error occurred.");
            }
        } catch (err: any) {
            setError(err?.message || "An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="w-full space-y-4 md:px-4 py-6">
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enter project name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full mt-4">
                        Add Frontend Skill
                        {loading && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default AddFrontendSkillForm;
