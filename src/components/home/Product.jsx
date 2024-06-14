import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Product = forwardRef(({ product }, ref) => {
  const navigate = useNavigate();
  console.log('from product.jsx', ref.current)

  return (
    <div data-riki="lol" ref={ref}>
      <Box
        onClick={() => navigate(`products/${product.id}`)}
        w="full"
        px="20px"
        pb="40px"
        border="1px solid var(--mainColorLight)"
        _hover={{
          cursor: 'pointer',
        }}
      >
        <Image
          src={product?.image}
          w={{ base: 'full', md: '200px', xl: '200px' }}
          h="200px"
        />

        <Box py="20px" mt="10px">
          <Text fontSize="18px" fontWeight="500" minH="100px">
            {product.title}
          </Text>
          <Flex
            justify="space-between"
            mt="30px"
            align="center"
            fontSize="24px"
            fontWeight="700"
          >
            <Text>${product.price}</Text>
            <Flex
              p="10px"
              borderRadius="5px"
              bg="var(--primary)"
              color="var(--lightBgColor2)"
              align="center"
              justify="center"
              _hover={{
                cursor: 'pointer',
              }}
            >
              <AiOutlineShoppingCart size={24} />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </div>
  );
})
export default Product
// export default forwardRef(Product);
