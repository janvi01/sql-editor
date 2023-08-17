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
  VStack,
} from "@chakra-ui/react";

const QueriesDisplay = ({ usePredefinedQuery }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const Queryonclick = (value) => {
    usePredefinedQuery(value);
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Available Queries
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Available Queries</DrawerHeader>

          <DrawerBody>
            <VStack justifyContent={"left"}>
              <Button
                onClick={() => {
                  Queryonclick("select * from CUSTOMERS");
                }}
              >
                Customers
              </Button>
              <Button
                onClick={() => {
                  Queryonclick("select * from PRODUCTS");
                }}
              >
                Products
              </Button>
              <Button
                onClick={() => {
                  Queryonclick("select * from CATEGORIES");
                }}
              >
                Categories
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default QueriesDisplay;
