import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import mixpanel from 'mixpanel-browser';
export default function SpecialOffer() {
  return (
    <Flex
      bg="var(--primary)"
      py="10px"
      justify="center"
      align="center"
      color="var(--light)"
      gap="10px"
    >
      <BsChevronLeft />
      <Text as="span" fontWeight="700" onClick={() => mixpanel.track("new event", {name: 'value'})}>
        Up to 70% Off.
      </Text>
      <Link fontSize="14px" textDecoration="underline">
        Shop our latest sale styles
      </Link>
      <BsChevronRight />
    </Flex>
  );
}
