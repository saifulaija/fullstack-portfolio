
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
import {  Loader2, PlusIcon } from "lucide-react";
import { useState } from "react";
import { useCreateProjectMutation } from "@/redux/features/project/projectApi";
import { useCreateFrontendSkillMutation } from "@/redux/features/frontendSkill/frontendSkillApi";
import { ToastAction } from "../ui/toast";
const formSchema = z
    .object({
        name: z.string().min(1, {
            message: "Enter frontend skill name",
        }),
       
    });
const AddFrontendSkillForm = () => {
    const [createFrontendSkill, { isLoading }] = useCreateFrontendSkillMutation();
    const {toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const res = await createFrontendSkill(values);
            console.log(res, "values.........");

            if (res?.data) {
                toast({
                    title: "Success!",
                    description: `Frontend skill created successfully`,
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                });
             
            } 
        } catch (err: any) {
            toast({
                title: "Failed!",
                description: err?.message || "an Unexpected error occurred",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            });
        } 
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="w-full space-y-4 md:px-4 py-6">
                   
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enter frontend skill name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full mt-4">
                        Add Frontend Skill
                        <PlusIcon className="ml-2" />
                        {isLoading && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default AddFrontendSkillForm;
