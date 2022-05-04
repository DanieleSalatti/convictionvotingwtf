import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/DanieleSalatti/convictionvotingwtf">
            <a>GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'What is \n'}
            <span className="text-primary-500">Conviction Voting</span>
            {'\nand why do we need it?'}

          </>
        }
        description={
          <>{'"Conviction Voting offers a novel decision making process that funds proposals based on the aggregated preference of community members, expressed continuously."'}<br />
          
          <Link href="/">
            <a href='https://twitter.com/jeffemmett' target='_blank'>
              Jeff Emmett
            </a>
          </Link>
          {', '}
          <Link href="/">
            <a href='https://commonsstack.org/' target='_blank'>
              @CommonsStack
            </a>
          </Link>
          </>
        }
        button={null}
        /*    
        button={
          <Link href="">
            <a>
              <Button xl>CTA</Button>
            </a>
          </Link>
        }*/
      />
    </Section>
  </Background>
);

export { Hero };
