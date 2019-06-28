import React from 'react';
import { Section, Content, Container } from 'bloomer'

class Body extends React.Component {
  render () {
    return (
      <div>
        <Section>
          <Container>
            <Content>
              <p>Super Miner Battle Farm is a community of fighting game players based in South West England and Wales. We are a friendly and welcoming group of people with a good sense of humour and a desire to improve and support the offline scene in the UK. We host weekly sessions and monthly tournaments in Bristol, as well as other events in the Wales area.</p>

              <p>If you're interested, please join our group page for more information on our events, tournaments we've gone to and any other fighting game news and videos our members post.</p>
            </Content>
          </Container>
        </Section>
        <Section>
          <iframe title="ss18 embed" style={{minHeight: "315px"}} width="560" height="315" src="https://www.youtube.com/embed/VfCBDgEyAI0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
    </div>
    )
  }
}

export default Body
