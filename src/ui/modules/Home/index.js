import React from "react";
import SearchUser from "ui/components/SearchUser";
import PageTemplate from "ui/components/PageTemplate";

function Home() {
  return (
    <PageTemplate>
      <SearchUser loading={true} />
    </PageTemplate>
  );
}

export default Home;
