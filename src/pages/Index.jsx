import { useState } from "react";
import { Container, VStack, HStack, Text, Button, Image, Box, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { FaDog, FaCat, FaPlus } from "react-icons/fa";

const Index = () => {
  const [pets, setPets] = useState([
    { id: 1, name: "Buddy", type: "dog", image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNzE2ODM1Mzk1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Mittens", type: "cat", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzE2ODM1Mzk1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  ]);

  const [newPet, setNewPet] = useState({ name: "", type: "dog", image: "" });

  const addPet = () => {
    setPets([...pets, { ...newPet, id: pets.length + 1, image: newPet.type === "dog" ? "https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNzE2ODM1Mzk1fDA&ixlib=rb-4.0.3&q=80&w=1080" : "https://images.unsplash.com/photo-1573865526739-10659fec78a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHx8fHwxNzE2ODM1Mzk1fDA&ixlib=rb-4.0.3&q=80&w=1080" }]);
    setNewPet({ name: "", type: "dog", image: "" });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Pet App
        </Text>
        <HStack spacing={4}>
          <FormControl id="pet-name">
            <FormLabel>Pet Name</FormLabel>
            <Input value={newPet.name} onChange={(e) => setNewPet({ ...newPet, name: e.target.value })} placeholder="Enter pet name" />
          </FormControl>
          <FormControl id="pet-type">
            <FormLabel>Pet Type</FormLabel>
            <HStack>
              <Button leftIcon={<FaDog />} colorScheme={newPet.type === "dog" ? "blue" : "gray"} onClick={() => setNewPet({ ...newPet, type: "dog" })}>
                Dog
              </Button>
              <Button leftIcon={<FaCat />} colorScheme={newPet.type === "cat" ? "blue" : "gray"} onClick={() => setNewPet({ ...newPet, type: "cat" })}>
                Cat
              </Button>
            </HStack>
          </FormControl>
          <Button leftIcon={<FaPlus />} colorScheme="green" onClick={addPet}>
            Add Pet
          </Button>
        </HStack>
        <VStack spacing={4} width="100%">
          {pets.map((pet) => (
            <Box key={pet.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <HStack spacing={4}>
                <Image boxSize="100px" objectFit="cover" src={pet.image} alt={pet.name} />
                <VStack align="start">
                  <Text fontSize="xl" fontWeight="bold">
                    {pet.name}
                  </Text>
                  <Text>{pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}</Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
