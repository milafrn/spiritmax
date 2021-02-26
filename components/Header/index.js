import Link from "next/link";
import { StyledMenuList, StyledHeader, StyledMenuLink } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledMenuList>
        <li>
          <Link href="/">
            <StyledMenuLink>Home</StyledMenuLink>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <StyledMenuLink>News</StyledMenuLink>
          </Link>
        </li>
        <li>
          <Link href="/members">
            <StyledMenuLink>Members</StyledMenuLink>
          </Link>
        </li>
      </StyledMenuList>
    </StyledHeader>
  );
};

export default Header;
