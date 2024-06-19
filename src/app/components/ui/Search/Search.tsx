import * as SC from "./Search.style";

export const Search = () => {
  return (
    <SC.SearchContainer>
      <SC.Glass />
      <SC.SearchIpt type="text" placeholder="Search..." />
    </SC.SearchContainer>
  );
};
