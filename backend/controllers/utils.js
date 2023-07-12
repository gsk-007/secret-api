import crypto from "crypto";
import base64url from "base64url";

// generate api key
export const getAPIkey = (email) => {
  // Create a hash of the email using a cryptographic algorithm
  const hash = crypto.createHash("sha256").update(email).digest("hex");

  // Take the first 16 characters of the hash
  const apiKey = hash.substring(0, 16);

  // Encode the API key using base64url
  const encodedApiKey = base64url.encode(apiKey);

  return encodedApiKey;
};
