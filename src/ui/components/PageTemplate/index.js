import React from "react";

import Navbar from "ui/components/Navbar";

import { PageTemplateWrapper } from "./styles";

function PageTemplate({ children }) {
  return (
    <PageTemplateWrapper>
      <div>
        <Navbar />
      </div>

      <div style={{ marginTop: 30 }}>{"PageTemplate"}</div>
      <div>{children}</div>
    </PageTemplateWrapper>
  );
}

export default PageTemplate;
