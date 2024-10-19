interface Feature {
  id: string;

  icon: string;

  caption: string;

  title: string;

  text: string;

  button: {
    icon: string;

    title: string;
  };
}

export interface Detail {
  id: string; // or number
  icon: string;
  title: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Plan {
  id: string;
  title: string;
  priceMonthly: number;
  priceYearly: number;
  caption: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  avatarUrl: string;
  name: string;
  role: string;
  comment: string;
}

export interface Logo {
  id: string;
  url: string;
  title: string;
  width: number;
  height: number;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
