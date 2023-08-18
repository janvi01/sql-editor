import React from "react";
import {
  Button,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";

const QueriesDrawer = ({ usePredefinedQuery, displayText }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const Queryonclick = (value) => {
    usePredefinedQuery(value);
    onClose();
  };

  return (
    <>
      <Button
        leftIcon={<AiOutlineBars />}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        {displayText ? "Available Tables" : ""}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="teal">
          <DrawerCloseButton />
          <DrawerHeader>Available Queries</DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing={4}>
              <Button
                leftIcon={<BsFillArrowRightCircleFill />}
                onClick={() => {
                  Queryonclick("select * from CUSTOMERS");
                }}
              >
                Customers
              </Button>
              <Button
                leftIcon={<BsFillArrowRightCircleFill />}
                onClick={() => {
                  Queryonclick("select * from PRODUCTS");
                }}
              >
                Products
              </Button>
              <Button
                leftIcon={<BsFillArrowRightCircleFill />}
                onClick={() => {
                  Queryonclick("select * from CATEGORIES");
                }}
              >
                Categories
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default QueriesDrawer;
