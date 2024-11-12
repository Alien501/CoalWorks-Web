import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { defineStepper } from '@stepperize/react';
import CompanyInfo from './companyInfo';
import MineIdentification from './mineIdentification';
import Infrastructure from './infrastructure';
import { useState } from 'react';

const { useStepper, steps } = defineStepper(
  {
    id: 'companyInfo',
    title: 'Company Information',
    description: 'Enter Company Information details',
  },
  {
    id: 'mineIdentification',
    title: 'Mine Identification',
    description: 'Enter Mine Identification details',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'Enter Infrastruture details',
  }
);

//@ts-ignore
function CompanyRegistration({ title, sections, setRegisterData, registerData }) {

  const [isSubmitted, setIsSubmitted] = useState([false, false, false]);
  const stepper = useStepper();

  const stepperFunction = () => {
    if (isSubmitted[stepper.current.index])
      stepper.next();
    else
      alert("Please submit all the details before moving to the next section")
  }

  return (
    <div className="space-y-6 p-6 border rounded-lg w-full h-full overflow-y-auto">
      <div className="flex justify-between">
        <h2 className="text-lg font-medium">{title}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Step {stepper.current.index + 1} of {steps.length}
          </span>
          <div />
        </div>
      </div>
      <nav aria-label="Checkout Steps" className="group my-4">
        <ol
          className="flex items-center justify-between gap-2"
          aria-orientation="horizontal"
        >
          {stepper.all.map((step, index, array) => (
            <React.Fragment key={step.id}>
              <li className="flex items-center gap-4 flex-shrink-0">
                <Button
                  type="button"
                  role="tab"
                  variant={
                    index <= stepper.current.index ? 'default' : 'secondary'
                  }
                  aria-current={
                    stepper.current.id === step.id ? 'step' : undefined
                  }
                  aria-posinset={index + 1}
                  aria-setsize={steps.length}
                  aria-selected={stepper.current.id === step.id}
                  className="flex size-10 items-center justify-center rounded-full"
                  onClick={() => stepper.goTo(step.id)}
                >
                  {index + 1}
                </Button>
                <span className="text-sm font-medium">{step.title}</span>
              </li>
              {index < array.length - 1 && (
                <Separator
                  className={`flex-1 ${index < stepper.current.index ? 'bg-primary' : 'bg-muted'
                    }`}
                />
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
      <div className="space-y-4">
        {stepper.switch({
          companyInfo: () => <CompanyInfo setIsSubmitted={setIsSubmitted} setRegisterData = {setRegisterData} registerData = {registerData} />,
          mineIdentification: () => <MineIdentification setIsSubmitted={setIsSubmitted} setRegisterData = {setRegisterData} registerData = {registerData}/>,
          infrastructure: () => <Infrastructure setIsSubmitted={setIsSubmitted} setRegisterData = {setRegisterData} registerData = {registerData}/>,
        })}
        {!stepper.isLast ? (
          <div className="flex justify-end gap-4">
            <Button
              variant="secondary"
              onClick={stepper.prev}
              disabled={stepper.isFirst}
            >
              Back
            </Button>
            <Button onClick={stepperFunction}>
              {stepper.isLast ? 'Complete' : 'Next'}
            </Button>
          </div>
        ) : (
          <Button onClick={stepper.reset}>Reset</Button>
        )}
      </div>
    </div>
  );
}

export default CompanyRegistration;
