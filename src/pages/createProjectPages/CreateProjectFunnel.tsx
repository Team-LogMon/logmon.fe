import { useFunnel } from '@use-funnel/react-router-dom';
import {
  CompleteStep,
  NameStep,
  PricingStep,
} from '@/pages/createProjectPages/CreateProjectSteps.ts';
import { CreateProjectNamePage } from '@/pages/createProjectPages/CreateProjectNamePage.tsx';
import { CreateProjectPricingPage } from '@/pages/createProjectPages/CreateProjectPricingPage.tsx';
import { Pricing } from '@/shared/const/app/Pricing.ts';
import { CreateProjectCompletePage } from '@/pages/createProjectPages/CreateProjectCompletePage.tsx';

export const CreateProjectFunnel = () => {
  const funnel = useFunnel<{
    nameStep: NameStep;
    pricingStep: PricingStep;
    completeStep: CompleteStep;
  }>({
    id: 'create-project-funnel',
    initial: {
      step: 'nameStep',
      context: {},
    },
  });

  switch (funnel.step) {
    case 'nameStep':
      return (
        <CreateProjectNamePage
          onNext={(name: string) =>
            funnel.history.push('pricingStep', { name: name })
          }
        />
      );
    case 'pricingStep':
      return (
        <CreateProjectPricingPage
          name={funnel.context.name}
          onNext={(name: string, pricing: Pricing) =>
            funnel.history.push('completeStep', {
              name: name,
              pricing: pricing,
            })
          }
        />
      );
    case 'completeStep':
      return (
        <CreateProjectCompletePage
          name={funnel.context.name}
          pricing={funnel.context.pricing}
        />
      );
  }
};
