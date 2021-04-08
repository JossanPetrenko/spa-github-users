import React from "react";
import { Input } from "antd";

import strings from "infra/resources/strings";

const { Search } = Input;

function SearchUser({ loading }) {
  return (
    <>
      <Search
        placeholder={strings.users.search_placeholder}
        enterButton={strings.comum.search}
        size="large"
        loading={loading}
      />
    </>
  );
}

export default SearchUser;
