import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as HeartIcon } from '../images/heart.svg';

export default function InfoItem({ children, icon }) {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <Container>
      <Row>
        <LoveContainer>
          <span>Made with</span>
          <StyledHeartIcon height={16} width={16} fill="#ED2939" />
          <span>in Singapore.</span>
        </LoveContainer>
      </Row>
      <Row>
        <StyleFeedback
          showEmail={showEmail}
          onClick={() => {
            setShowEmail(true);
          }}
        >
          {showEmail ? 'chen@huchen.dev' : 'Send Feedback'}
        </StyleFeedback>
        <StyledClick
          onClick={() => {
            const confirm = window.confirm(
              'Clear cache will clear your selected language and settings.'
            );
            if (confirm) {
              window.localStorage.clear();
            }
          }}
        >
          Clear Cache
        </StyledClick>
        <StyledLink href="https://github.com/huchenme/hacker-tab-extension">
          GitHub
        </StyledLink>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 48px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

const LoveContainer = styled.div`
  font-size: 14px;
  color: #aaa;
  display: flex;
  align-items: center;
`;

const StyledHeartIcon = styled(HeartIcon)`
  margin: 0 3px;
`;

const StyleFeedback = styled.div`
  color: ${props => (props.showEmail ? '#0052CC' : '#aaa')};
  margin-right: 24px;
  transition: color 0.3s;
  cursor: ${props => (props.showEmail ? 'auto' : 'pointer')};
  font-size: 12px;
  text-decoration: underline;

  &:hover {
    color: ${props => (props.showEmail ? '#0052CC' : '#777')};
  }
`;

const StyledClick = styled.div`
  color: #aaa;
  margin-right: 24px;
  transition: color 0.3s;
  cursor: pointer;
  font-size: 12px;
  text-decoration: underline;

  &:hover {
    color: #777;
  }

  &:last-child {
    margin: 0;
  }
`;

const StyledLink = StyledClick.withComponent('a');