export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const navigateToSection = (navigate: (path: string) => void, sectionId: string) => {
  navigate('/');
  // Wait for navigation to complete before scrolling
  setTimeout(() => {
    scrollToSection(sectionId);
  }, 100);
};