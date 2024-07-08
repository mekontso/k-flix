"use client"

import React from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

const NotFound: React.FC = () => {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card >
                <CardContent className="flex flex-col items-center justify-center py-4">
                    <h1 className="text-4xl font-bold text-red-600">404</h1>
                    <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
                    <Button className="mt-6" onClick={() => router.push("/")}>
                        Go Back Home
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default NotFound;
