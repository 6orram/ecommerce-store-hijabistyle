import Link from "next/link";
import Image from 'next/image'
import img from "./files/Logo-1.png"

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <Image
            src={img}
            alt="logo"
            width={50}
            height={50}
          />
            
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
