


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
import { uploadImage } from "@/utils/imgbb";
import {  Loader2 } from "lucide-react";
import { useState } from "react";
import { useCreateProjectMutation } from "@/redux/features/project/projectApi";
import { ToastAction } from "../ui/toast";

const formSchema = z
    .object({
        name: z.string().min(1, {
            message: "Enter your userName",
        }),
        description: z.string().min(10, {
            message: "Enter project description",
        }),
        technologies: z.array(z.string()).min(1, {
            message: "Enter at least one technology",
        }),
        githubClientLink: z.string().min(2, {
            message: "Enter project githubClientLink",
        }),
        githubServerLink: z.string().min(2, {
            message: "Enter project githubServerLink",
        }),
        liveLink: z.string().min(2, {
            message: "Enter project liveLink",
        }),
        imageUrl: z.any(),
    });

const CreateProjectForm = () => {
    const [createProject, { isLoading }] = useCreateProjectMutation();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [error, setError] = useState("");
    const { } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            technologies: [],
            imageUrl: null,
            githubClientLink: "",
            githubServerLink: "",
            liveLink: "",
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "technologies",
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        setError("");
        if (values.imageUrl && values.imageUrl.length > 0) {
            const url = await uploadImage(values.imageUrl[0]);
            values.imageUrl = url;
        } else {
            values.imageUrl = "";
        }

        try {
            const res = await createProject(values);
            console.log(res, "values.........");

            if (res?.data) {
                toast({
                    title: "Success!",
                    description: `Project created successfully`,
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                });
               
            } else {
                setError("An unexpected error occurred.");
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
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter project description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="githubClientLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Github Client Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter your githubClientLink"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="githubServerLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Github Server Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter your githubServerLink"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="liveLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Live Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter your project liveLink"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => field.onChange(e.target.files)}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="space-y-4 space-x-2">
                        <FormLabel>Technologies</FormLabel>
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex items-center gap-4">
                                <FormControl>
                                    <Input
                                        {...form.register(`technologies.${index}` as const)}
                                        placeholder="Enter a technology"
                                        className="w-full"
                                    />
                                </FormControl>
                                <Button
                                    type="button"
                                    variant="destructive"
                                    onClick={() => remove(index)}
                                >
                                    Remove
                                </Button>
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => append("")}
                        >
                            Add Technology
                        </Button>
                    </div>

                    <Button type="submit" disabled={loading} className="w-full mt-4">
                        Create Project
                        {loading && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default CreateProjectForm;
