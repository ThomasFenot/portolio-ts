import * as React from "react"
import {
  Card,
  Text,
  Heading,
  CardBody,
  CardHeader,
  Stack, 
  StackDivider,
  Box
} from "@chakra-ui/react"

import {CardContent} from "../../classes/cardContent"

type DisplayCardProps = {
  header: string,
  content: CardContent[]
}


// Easiest way to declare a Function Component; return type is inferred.
export const DisplayCard = ({ header,content}: DisplayCardProps) => 
    <Card variant={"displayCard"}>
        <CardHeader>
            <Heading size='md'>
                {header}  
            </Heading>
        </CardHeader>
        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            {/* Maybe there is a better wayto do this... */}
            {content.map((element, index) => ( 
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  {element.compagnieName}
                </Heading>
                <Text fontSize='sm'>{element.date}</Text>
                {element.details.map((element, index) => ( 
                  <>
                    <Text key={index} pt='2' fontSize='sm'>
                        {element.detailText}
                    </Text> 
                    <br />
                  </>
                ))}
              </Box>
              ))}
             </Stack>
        </CardBody>
    </Card>
    ;
