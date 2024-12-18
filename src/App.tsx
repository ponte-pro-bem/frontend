import { Center, Text, useMediaQuery } from "@chakra-ui/react";
import useHomeController from "./app/page.controller";
import InstitutionsPage from "./pages/organizacoes";

function App() {
  const {
    onSelectItem,
    isOpen,
    onClose,
    selectedCampaign,
    selectedInstitution,
  } = useHomeController();

  const [isDesktop] = useMediaQuery("(min-width: 800px)", {
    fallback: false,
    ssr: false,
  });

  // if (!isDesktop) {
  //   return (
  //     <Center flexDir={"column"} h="100vh">
  //       <Text textAlign={"center"}>
  //         No momento não estamos disponíveis para dispositivos móveis
  //       </Text>
  //       <br />
  //       <Text>Acesse ao site utilizando um computador</Text>
  //     </Center>
  //   );
  // }

  return (
    <div className="App">
      {/* <header className="">
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </header>
      <InstitutionsPage /> */}
    </div>
  );
}

export default App;
