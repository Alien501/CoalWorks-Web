import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";

const Modal = ({ modalTitle, modalTriggerElement, modalContent }: { modalTitle: string, modalTriggerElement: React.ReactElement, modalContent: React.ReactElement }) => {
    return (
        <Dialog>
            <DialogTrigger>
                {modalTriggerElement}
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    {modalTitle}
                </DialogTitle>
                <DialogDescription>
                    {modalContent}
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

export default Modal;