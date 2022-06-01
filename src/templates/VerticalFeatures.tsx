import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <Section>
      <div className="flex flex-wrap justify-center text-center">
        <div className="w-full p-6">
          <p className="text-xl pb-8">
            Conviction Voting is a decision making process in which voters continuously express their preference by staking tokens in support of proposals they would like to see approved,
            with the conviction (i.e. weight) of their vote growing over time.
          </p>
          <p className="text-xl">
            When a voter unstakes their tokens, their conviction for that proposal starts declining according to a decay function.
          </p>
        </div>
        <div className="w-full p-6">
          <figure>
            <img src="/assets/images/conviction-voting.png" alt="Conviction Voting" />
            <figcaption>
              Example of Conviction Voting
              <br/>
              [
                <a href="https://medium.com/commonsstack/conviction-voting-a-novel-continuous-decision-making-alternative-to-governance-62e215ad2b3d">source</a>{' '}
                - <a href="https://sponnet.github.io/cs-sim/">simulation</a>]</figcaption>
          </figure>
        </div>
      </div>
      
    </Section>
    <Section
      title="Links and resources"
      description="Here are some links to help you understand what Conviction Voting is and how it works."
    >
      <div className="flex flex-wrap justify-center text-center">
        <div className="w-full p-6">
          <p className="text-xl pb-8">
            👉 <a href="https://medium.com/commonsstack/announcing-the-conviction-voting-cadcad-model-release-8e907ce67e4e">Understanding Real-Time ‘Vote Streaming’</a> by Jeff Emmett
          </p>
          <p className="text-xl pb-8">
            👉 <a href="https://medium.com/commonsstack/conviction-voting-a-novel-continuous-decision-making-alternative-to-governance-62e215ad2b3d">Conviction Voting: A Novel Continuous Decision Making Alternative to Governance</a> by Jeff Emmett
          </p>
          <p className="text-xl pb-8">
            👉 <a href="https://token-engineering-commons.gitbook.io/tec-handbook/archive/archived-content/conviction-voting">Conviction Voting - Token Engineering Commons</a>
          </p>
          
        </div>
      </div>
    </Section>
  </>
);

export { VerticalFeatures };
