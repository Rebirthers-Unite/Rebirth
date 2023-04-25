import { render } from '@testing-library/react'
import { LandingPage } from './LandingPage'

test('render Landing page components', () => {
    const { getByTestId } = render (<LandingPage/>);

  const hero = getByTestId('hero');
  expect(hero).toBeInTheDocument();

  const aboutUs = getByTestId('about');
  expect(aboutUs).toBeInTheDocument();

  const footer = getByTestId('survivors');
  expect(footer).toBeInTheDocument();
})