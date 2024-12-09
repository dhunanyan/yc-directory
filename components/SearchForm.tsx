import React from "react";
import Form from "next/form";

import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";
import { Button } from "./ui/button";

const SearchForm = ({ query }: { query: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
        className="search-input"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <Button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
