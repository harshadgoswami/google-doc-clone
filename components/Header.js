import React from "react";
import { IconButton, Button } from "@material-tailwind/react";

function Header() {
  return (
    <div className="flex items-center ">
      <IconButton
        color="gray"
        variant="outlined"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden md:inline-flex h-20 w-20 border-0"
      >
        <i className="fas fa-heart" />
      </IconButton>
      <Button>Button</Button>
    </div>
  );
}

export default Header;
