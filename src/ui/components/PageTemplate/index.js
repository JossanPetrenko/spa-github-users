import React from 'react';

import Navbar from 'ui/components/Navbar';

import {PageTemplateWrapper, TransparentHeader, ContentWrapper} from './styles';

function PageTemplate({children}) {
  return (
    <PageTemplateWrapper>
      <div>
        <Navbar />
      </div>

      <TransparentHeader />
      <ContentWrapper>{children}</ContentWrapper>
    </PageTemplateWrapper>
  );
}

export default PageTemplate;
