"use client"
import React, {useEffect, useState} from 'react';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form} from "@/components/ui/form";
import FormInputField from "@/components/global/FormInputField";
import {Button} from "@/components/ui/button";
import {apiCallCreateGenre, apiCallUpdateGenre} from "@/services/api-service-genre";
import {Genre} from "@/types";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";

const formSchema = z.object({
    id: z.any(), name: z.string().min(1, {message: "Name is required"}),
})

type formType = z.infer<typeof formSchema>

type formProps = {
    genre?: Genre
}
const GenreForm: React.FC<formProps> = ({genre}) => {
    const [buttonText, setButtonText] = useState<string>("Create");
    const {toast} = useToast();
    const router = useRouter()
    // Initialize the form with react-hook-form and zodResolver
    const form = useForm<formType>({
        resolver: zodResolver(formSchema), defaultValues: {
            id: undefined, name: '',
        },
    });

    useEffect(() => {
        if (genre) {
            form.reset({
                id: genre.id, name: genre.name
            })
            setButtonText("Update")
        }
    }, [genre, form]);
    const handleFormSubmit = (data: formType) => {
        genre = {
            id: data.id, name: data.name
        }

        if (genre.id == null) {
            apiCallCreateGenre(genre)
                .then(response => {
                    toast({
                        title: "Success", description: response.data.message,
                    })
                    router.push("/admin/genre")
                })
                .catch(error => {
                    toast({
                        title: "Error", description: error.response.data.message, variant: "destructive"
                    })
                })
        } else {
            apiCallUpdateGenre(genre)
                .then(response => {
                    toast({
                        title: "Success", description: response.data.message,
                    })
                    router.push("/admin/genre")
                })
                .catch(error => {
                    toast({
                        title: "Error", description: error.response.data.message, variant: "destructive"
                    })
                })
        }

    }
    return (<Card>
        <CardHeader>
            <CardTitle>Genre </CardTitle>
            <CardDescription>Add new content genre</CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
                    <FormInputField control={form.control} label="Id" name="id" placeholder="Type name"
                                    type="text" className="hidden"/>
                    <FormInputField control={form.control} label="Name" name="name" placeholder="Type name"
                                    type="text"/>
                    <Button className='w-full' type="submit">{buttonText}</Button>
                </form>
            </Form>
        </CardContent>

    </Card>);
};

export default GenreForm;
