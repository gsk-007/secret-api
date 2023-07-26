import { Box, ListItem, Text, OrderedList } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const support = [
  {
    heading: "Email",
    text: "Send us an email at support@motivationalquotesapi.com, and our team will respond promptly.",
  },
  {
    heading: "Live Chat",
    text: "Visit our website and click on the live chat icon in the bottom right corner. A support agent will be ready to chat with you and provide real-time assistance.",
  },
  {
    heading: "Document",
    text: "For technical details and API integration guidance, refer to our comprehensive documentation available at docs.motivationalquotesapi.com. It covers everything from authentication to handling different API endpoints.",
  },
  {
    heading: "Community Forum",
    text: "Join our community of developers and users on the forum at forum.motivationalquotesapi.com. Share ideas, ask questions, and collaborate with others to get the most out of our service.",
  },
  {
    heading: "FAQs",
    text: "Before reaching out, check our frequently asked questions (FAQs) page on the website. You might find answers to your queries right there.",
  },
];

const SupportScreen = () => {
  return (
    <Box>
      <Navbar />
      <Box minH="90vh" bg="brand.backgroundTwo">
        <Box paddingTop={4} marginX="auto" width="60%">
          <Text>
            Welcome to our Motivational Quotes API Customer Support! We're
            delighted to have you as a valued user of our backend API service
            that provides an endless stream of motivational quotes to inspireand
            uplift you. Our team is dedicated to ensuring a smooth and enjoyable
            experience while using our service.
          </Text>
          <Text>
            Whether you're integrating our API into your application or have
            questions about accessing the quotes, we're here to help! If you
            encounter any issues or have inquiries, don't hesitate to reach out
            to our support team. We're available 24/7 to assist you.
          </Text>
          <Box paddingY={4}>
            <Text marginY={2} color="brand.primaryTwo">
              You can contact us through the following channels:
            </Text>
            <OrderedList spacing={2}>
              {support.map((s, i) => (
                <ListItem id={i}>
                  <Text>
                    <Text display="inline" fontWeight="bold">
                      {s.heading}
                    </Text>
                    : {s.text}
                  </Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>
          <Box>
            <Text>
              Please make sure to include your API key in all your requests.
              This key is essential for authentication and ensuring secure
              access to our service. For any technical issues, please provide us
              with as much detail as possible, including error messages, request
              headers, and relevant code snippets. Our support team will analyze
              the problem and work tirelessly to provide a swift resolution.
            </Text>
            <Text>
              We genuinely value your feedback and suggestions, as they help us
              improve our service. If you have any ideas for new features or
              improvements, please let us know. Your input plays a vital role in
              shaping the future of our Motivational Quotes API. Thank you for
              choosing our backend API service for motivational quotes. We're
              thrilled to be a part of your journey towards inspiration and
              success. Let us know how we can assist you further!
            </Text>
            <Text paddingY={4} fontWeight="bold" color="brand.primaryTwo">
              Best regards, The Motivational Quotes API Support Team
            </Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default SupportScreen;
