import Header from "../Header";
import LeftMenu from "./LeftMenu";
import './Profile.css'
import { ChakraProvider, Tab, Tabs, TabList, TabPanel, TabPanels, background } from '@chakra-ui/react'
import { useState } from "react";
const Result = () => {
    let prof = 'prof'
    const [obect, setObect] = useState(true)
    return (<>
        <Header prof={prof} />
        <section className="Profile">
            <LeftMenu />

            <div className="rightmenu">

                {obect === true
                    ? <ChakraProvider>
                        <Tabs borderLeft={'3px solid blue'} marginTop={{base:'44px',sm:'46px'}} height={'auto'} w={{base:'95%' ,xl:'70%', md:'73%' , sm:'95%'}} bg={'white'} borderRadius={'10px'} outline={'none'} variant='soft-rounded' colorScheme='blue'>
                            <TabList w={'100%'} marginTop={'10px'} justifyContent={'center'}>
                                <Tab  fontSize={{base:'0.7rem', sm:'1rem'}}>Kimyo</Tab>
                                <Tab fontSize={{base:'0.7rem', sm:'1rem'}}>Fizika</Tab>
                                <Tab fontSize={{base:'0.7rem', sm:'1rem'}}>Matematika</Tab>
                                <Tab fontSize={{base:'0.7rem', sm:'1rem'}}>Informatika</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <p>Kimyo</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>Fizika</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>Matematika</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>Informatika</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ChakraProvider>

                    : <img className="images" src="https://www.clipartkey.com/mpngs/m/73-734036_kind-clipart-graduation-graduate-kids-png.png" alt="vector" />
                }
            </div>


        </section>
    </>);
}
export default Result;