"use client"
import React, { useEffect, useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/global/FormInputField";
import { Button } from "@/components/ui/button";
import { apiCallCreateContentType, apiCallUpdateContentType } from "@/services/api-service-content-type";
import { ContentType } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    id: z.any(),
    name: z.string().min(1, { message: "Name is required" }),
});

type formType = z.infer<typeof formSchema>

type formProps = {
    contentType?: ContentType
}

const ContentTypeForm: React.FC<formProps> = ({ contentType }) => {
    const [buttonText, setButtonText] = useState<string>("Create");
    const { toast } = useToast();
    const router = useRouter();

    // Initialize the form with react-hook-form and zodResolver
    const form = useForm<formType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: undefined,
            name: '',
        },
    });

    useEffect(() => {
        if (contentType) {
            form.reset({
                id: contentType.id,
                name: contentType.name,
            });
            setButtonText("Update");
        }
    }, [contentType, form]);

    const handleFormSubmit = (data: formType) => {
        const contentType: ContentType = {
            id: data.id,
            name: data.name,
        };

        if (contentType.id == null) {
            apiCallCreateContentType(contentType)
                .then(response => {
                    toast({
                        title: "Success",
                        description: response.data.message,
                    });
                    router.push("/admin/content-type");
                })
                .catch(error => {
                    toast({
                        title: "Error",
                        description: error.response.data.message,
                        variant: "destructive",
                    });
                });
        } else {
            apiCallUpdateContentType(contentType)
                .then(response => {
                    toast({
                        title: "Success",
                        description: response.data.message,
                    });
                    router.push("/admin/content-type");
                })
                .catch(error => {
                    toast({
                        title: "Error",
                        description: error.response.data.message,
                        variant: "destructive",
                    });
                });
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Content Type</CardTitle>
                <CardDescription>Add new content type</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
                        <FormInputField control={form.control} label="Id" name="id" placeholder="Type name"
                                        type="text" className="hidden" />
                        <FormInputField control={form.control} label="Name" name="name" placeholder="Type name"
                                        type="text" />
                        <Button className='w-full' type="submit">{buttonText}</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default ContentTypeForm;
