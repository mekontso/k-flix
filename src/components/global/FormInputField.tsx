import {Input} from "@/components/ui/input";
import {Control} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage,} from "../ui/form";
import React from "react";

type FormInputProps = {
    control: Control<any>; name: string; label: string; type: string; placeholder: string, className?: string;
};


const FormInputField: React.FC<FormInputProps> = ({control, name, label, type, placeholder, className = ""}) => {
    return (<div className={className}>
        <FormField
            control={control}
            name={name}
            render={({field}) => (<FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input type={type} placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage/>
            </FormItem>)}
        />
    </div>);
};

export default FormInputField;
