export const SidebarData = [
  {
    title: 'Home',
    path: "/",
    cName: "sidebar-item",
    
  },
  {
    title: 'About',
    path: "/about/about-app",
    cName: "sidebar-item",
  },
];

// kalau bukan components export pakai camel case, untuk membedakan yang di import itu sebuah components atau cuma return value
export const additionalData = [
  {
    title: 'About Author',
    path: "/about/about-author",
    cName: "sidebar-item",
  }
]