const scrollIdentifier = () => {
  const scrolled = document.documentElement.scrollTop;
  if (scrolled > 300) {
    return true;
  } else if (scrolled <= 300) {
    return false;
  }
};

export default scrollIdentifier;
