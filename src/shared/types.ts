
export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  LearnMore = 'learnmore',
  Portfolio = 'portfolio',
  ContactUs = 'contactus',
  Login = 'login',
}

export type Form = {
  name: string
  email: string
  mobile: string
  message: string
}

export type Benefit = {
  svg: React.ReactElement
  title: string
  description: string
}

