import { imageUrlRegex } from "./regex";

export const validateImageUrl = (value: string) => {
  if (!imageUrlRegex.test(value)) {
    return false;
  } else return true;
};
