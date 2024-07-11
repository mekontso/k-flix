"use client"
import React from 'react';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form} from "@/components/ui/form";
import FormInputField from "@/components/global/FormInputField";
import {Button} from "@/components/ui/button";
import {createGenre} from "@/services/api-service-genre";
import {Genre} from "@/types";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";

const formSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
})

type formType = z.infer<typeof formSchema>

const GenreForm: React.FC = () => {
    const {toast} = useToast();
    const router = useRouter()
    // Initialize the form with react-hook-form and zodResolver
    const form = useForm<formType>({
        resolver: zodResolver(formSchema), defaultValues: {
            name: '',
        },
    });
    const handleFormSubmit = (data: formType) => {
        const genre : Genre = {
            id: null,
            name: data.name
        }
        createGenre(genre)
            .then(response => {
                toast({
                    title: "Success",
                    description: response.data.message,
                })
                router.push("/admin/genre")
            })
            .catch(error => {
                console.log(error)
                toast({
                    title: "Error",
                    description: error.response.data.message,
                    variant: "destructive"
                })
            })
    }
    return (<Card>
        <CardHeader>
            <CardTitle>Genre </CardTitle>
            <CardDescription>Add new content genre</CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
                    <FormInputField control={form.control} label="Name" name="name" placeholder="Type name"
                                    type="text"/>
                    <Button className='w-full' type="submit">Create</Button>
                </form>
            </Form>
        </CardContent>

    </Card>);
};

export default GenreForm;
