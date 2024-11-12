import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useEffect } from "react";
export function SubmitDetailDialog({
    isOpened,
    onClose
}: {
    isOpened: boolean;
    onClose: () => void;
}) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <div className={`fixed inset-0 bg-black/50 flex items-center justify-center ${isOpened ? 'block' : 'hidden'}`}>
            <Card className="w-[350px] relative">
                <CardHeader>
                    <CardTitle>Hey User!</CardTitle>
                    <CardDescription>
                        Please fill all the details and click on submit to move to the next section.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Your content here */}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={() => onClose()}>Close</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
