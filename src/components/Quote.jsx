import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

export default function Quote({ quote, author }) {
  return (
    <section>
      <Fade>
        <Box
          position="relative"
          zIndex="99"
          className="container"
          py="5"
          px="3"
          d="flex"
          justifyContent="center"
        >
          <Box width={["80%", "70%", "50%"]} py={["1rem", "3rem"]} className="glass-bg">
            <Icon fontSize={["2rem", "3rem"]} color="#01CAFE" as={BiSolidQuoteAltLeft} />

            <AttentionSeeker effect="pulse">
              <Box px={["1rem", "2rem"]} textAlign="center">
                <Text
                  fontSize={["20px", "30px", "40px"]}
                  fontWeight="700"
                  sx={{
                    background: "linear-gradient(to right, #00c9ff, #92fe9d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  
                  {quote}
                </Text>
                <Text textAlign="right" fontWeight="600" mt="1">
                  {author}
                  
                </Text>
                Experienced Full Stack Web Developer proficient in both front-end and back-end technologies. Skilled in HTML, CSS, JavaScript, React, Node.js, and Express, with hands-on experience in database management using MongoDB and PostgreSQL. Adept at building responsive, scalable web applications and RESTful APIs, with a strong understanding of cloud deployment and agile methodologies. Passionate about writing clean, efficient code and delivering seamless user experiences.
              </Box>
            </AttentionSeeker>

            <Flex justify="flex-end">
              <Icon fontSize={["2rem", "3rem"]} color="#9AFDA9" as={BiSolidQuoteAltRight} />
            
            </Flex>

          </Box>
        </Box>
      </Fade>
    </section>
  );
}
