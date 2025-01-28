import { Pricing } from '@/shared/const/app/Pricing.ts';

export type NameStep = {
  name?: string;
  pricing?: Pricing;
};

export type PricingStep = {
  name: string;
  pricing?: Pricing;
};

export type CompleteStep = {
  name: string;
  pricing: Pricing;
};
