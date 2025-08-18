import { FillCallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";
import { contacts } from "../../../contact";

interface Link {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface FooterLinksPropstype {
  logo: string;
  description: string;
  linksData: {
    title?: string;
    listOfLinks: Link[];
  }[];
}

export const footerData: FooterLinksPropstype = {
  logo: "/logo.png",
  description: "Not Just Fast Food — Fast Fine Food. Thoughtful Packaging, Friendly Service, Quick Delivery",
  linksData: [
    {
      title: "Contact Info",
      listOfLinks: [
        {
          label: contacts.address_1,
          href: contacts.address_1_url,
          icon: <FillLocationIcon />,
        },
        {
          label: contacts.phone_1,
          href: "tel:" + contacts.phone_1,
          icon: <FillCallIcon />,
        },
        {
          label: contacts.email_1,
          href: "mailto:" + contacts.email_1,
          icon: <FillMailIcon />,
        },
      ],
    },
  ],
};
