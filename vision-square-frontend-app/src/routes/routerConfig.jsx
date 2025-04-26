export const ROUTES = {
  HOME: {
    path: "/",
    element: "Home",
    title: "Home",
    isNavVisible: true,
    description: "Return to the homepage",
  },
  ABOUT: {
    path: "/about",
    element: "About",
    title: "About Us",
    isNavVisible: true,
    description: "Learn about our company",
  },
  SERVICES: {
    path: "/services",
    element: "Services",
    title: "Our Services",
    isNavVisible: true,
    description: "Discover what we offer",
  },
  CONTACT: {
    path: "/contact",
    element: "Contact",
    title: "Contact Us",
    isNavVisible: true,
    description: "Get in touch with our team",
  },
  NOT_FOUND: {
    path: "*",
    element: "NotFound",
    title: "Page Not Found",
    isNavVisible: false,
    description: "This page doesn't exist",
  },
};

// Helper function to generate route elements
export const createRoutes = () => {
  return Object.values(ROUTES).map((route) => ({
    path: route.path,
    element: <route.element />,
  }));
};