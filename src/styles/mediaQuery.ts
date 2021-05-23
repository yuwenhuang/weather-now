const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  desktop: customMediaQuery(2560),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};