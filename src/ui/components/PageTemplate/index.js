import React from "react";

import Navbar from "ui/components/Navbar";

import { PageTemplateWrapper } from "./styles";

function PageTemplate({ children }) {
  return (
    <PageTemplateWrapper>
      <div>
        <Navbar />
      </div>

      <h1>{"PageTemplate"}</h1>
      <div>{children}</div>
    </PageTemplateWrapper>
  );
}

export default PageTemplate;
