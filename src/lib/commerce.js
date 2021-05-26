import Commerce from "@chec/commerce.js";
// khởi tạo object commerce ( ecommerce store)
// truyền vào parameter là public key
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
