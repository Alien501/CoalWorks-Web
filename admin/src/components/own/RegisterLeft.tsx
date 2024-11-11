import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { defineStepper } from '@stepperize/react';
import React from 'react';

const { useStepper, steps } = defineStepper(
    {
        id: 'companyRegistration',
        title: 'Company Registration and Licensing',
        description: 'Enter your Company Registration and Licensing details',
    },
    {
        id: 'rolesAndRes',
        title: 'Roles and Responsibilities',
        description: 'Enter Roles and Responsibilities details',
    },
    {
        id: 'operations',
        title: 'Operations and Production',
        description: 'Enter Operations and Production details',
    },
    {
        id: 'dbMigration',
        title: 'DB Migration',
        description: 'Enter DB Migration details',
    },
    { id: 'complete', title: 'Complete', description: 'Registration complete' }
);



export default function RegisterLeft({setActiveSection}) {

    const stepper = useStepper();
    return (
        <div className='h-full space-y-6 p-6 border rounded-lg w-full'>
            <h2 className="text-lg font-medium">Register</h2>
            <div className="flex flex-col justify-center items-center h-full">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        {/* <span className="text-sm text-muted-foreground">
                            Step {stepper.current.index + 1} of {steps.length}
                        </span> */}
                        <div />
                    </div>
                </div>
                <nav aria-label="Checkout Steps" className="group my-4">
                    <ol className="flex flex-col gap-2" aria-orientation="vertical">
                        {stepper.all.map((step, index, array) => (
                            <React.Fragment key={step.id}>
                                <li className="flex items-center gap-4 flex-shrink-0">
                                    <Button
                                        type="button"
                                        role="tab"
                                        variant={index <= stepper.current.index ? 'default' : 'secondary'}
                                        aria-current={
                                            stepper.current.id === step.id ? 'step' : undefined
                                        }
                                        aria-posinset={index + 1}
                                        aria-setsize={steps.length}
                                        aria-selected={stepper.current.id === step.id}
                                        className="flex size-10 items-center justify-center rounded-full"
                                        onClick={() => {
                                            stepper.goTo(step.id); // Navigate to the step
                                            setActiveSection(step.id); // Call setActiveSection to update the state in the parent
                                        }}
                                    >
                                        {index + 1}
                                    </Button>
                                    <span className="text-sm font-medium">{step.title}</span>
                                </li>
                                <div className="flex gap-4">
                                    {index < array.length - 1 && (
                                        <div
                                            className="flex justify-center"
                                            style={{
                                                paddingInlineStart: '1.25rem',
                                            }}
                                        >
                                            <Separator
                                                orientation="vertical"
                                                className={`w-[1px] h-full ${index < stepper.current.index ? 'bg-primary' : 'bg-muted'
                                                    }`}
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1 my-4">
                                        {stepper.current.id === step.id &&
                                            stepper.switch({
                                                registration: () => <PaymentComponent />,
                                                roles: () => <PaymentComponent />,
                                                operations: () => <PaymentComponent />,
                                                migration: () => <PaymentComponent />,
                                                complete: () => <PaymentComponent />,
                                            })}
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    )
}

const PaymentComponent = () => {
    return (
        <div>
        </div>
    );
};