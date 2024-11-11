import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { defineStepper } from '@stepperize/react';
import ProductionAndCost from './productionAndCost';

const { useStepper, steps } = defineStepper(
  {
    id: 'production',
    title: 'Production and Cost Details',
    description: 'Enter Production and Cost details',
  },
  {
    id: 'workforce',
    title: 'Workforce Management',
    description: 'Enter Workforce Management details',
  },
  {
    id: 'compliance',
    title: 'Compliance',
    description: 'Enter Compliance details',
  }
);

//@ts-ignore
function OperationsAndProduction({title, sections}) {
  const stepper = useStepper();

  return (
    <div className="space-y-6 p-6 border rounded-lg w-full">
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
                  className={`flex-1 ${
                    index < stepper.current.index ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
      <div className="space-y-4">
        {stepper.switch({
          production: () => <ProductionAndCost />,
          workforce: () => <MineIdentification />,
          infrastructure: () => <Infrastructure />,
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
            <Button onClick={stepper.next}>
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

export default OperationsAndProduction;
