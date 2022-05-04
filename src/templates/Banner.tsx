import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title={<>{"🖖 Hi, I'm "}
        <Link href='/'>
          <a href='https://danielesalatti.com' target='_blank'>
            Daniele Salatti
          </a>
        </Link>
      </>}
      subtitle="And I am part of the 🏰 BuidlGuidl"
      text={<>
        <p>{"A curated group of Ethereum builders creating products, prototypes, and tutorials to enrich the web3 ecosytem."}</p>
        <p className="mt-4">{"❤️ We are an Ethereum public good."}</p>
      </>}
      button={
        <Link href="/">
          <a href="https://buidlguidl.com" target="_blank">
            <Button>Join us</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
