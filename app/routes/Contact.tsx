import React from "react";

import type { Route } from "./+types/Contact";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Contact" }];
}
const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;
