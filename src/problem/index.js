import {
    Box,
    Text,
    FormControl,
    FormLabel,
    Button,
    Heading
} from '@chakra-ui/react';
import { Select } from "chakra-react-select";
import { useEffect, useState } from 'react';

const Chess = () => {
    const [xCoordinate, setXCoordinate] = useState('')
    const [yCoordinate, setYCoordinate] = useState('')
    const [enableButton, setEnableButton] = useState(false)
    const [result, setResult] = useState('')

    const movesOption = [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
        { label: 4, value: 4 },
        { label: 5, value: 5 },
        { label: 6, value: 6 },
        { label: 7, value: 7 },
        { label: 8, value: 8 }
    ]

    useEffect(() => {
        if (xCoordinate && yCoordinate) {
            setEnableButton(false)
        } else {
            setEnableButton(true)
        }
    }, [xCoordinate, yCoordinate])

    // To calculate possible moves
    const findPossibleMoves = (x, y) => {
        let possibleCoordinates = []
        const cellXpositions = [x + 2, x - 2, x + 1, x -
            1
        ].filter(function (cellPosition) {
            return (cellPosition > 0 && cellPosition < 9);
        })
        console.log({ cellXpositions })
        const cellYpositions = [y + 2, y - 2, y + 1, y -
            1
        ].filter(function (cellPosition) {
            return (cellPosition > 0 && cellPosition < 9);
        })
        console.log({ cellYpositions })

        for (let i = 0; i < cellXpositions.length; i++) {
            for (let j = 0; j < cellYpositions.length; j++) {
                console.log(cellXpositions[i],
                    cellYpositions[j])
                if (!possibleCoordinates.includes([cellXpositions[i],
                cellYpositions[j]
                ])) {
                    possibleCoordinates.push([cellXpositions[i],
                    cellYpositions[j]
                    ]);
                }
            }
        }
        setResult(possibleCoordinates.length)
        return;
    }

    return (
        <>
            <Box m='5'>
                <Heading as='h2' size='xl' ml='5'>
                    Possible moves of knight
                </Heading>
            </Box>
            <Box d='flex' m='5' w='100%'>
                <Box mr='5' w='30%'>
                    <FormControl p={4}>
                        <FormLabel>
                            X Coordinate
                        </FormLabel>
                        <Select
                            value={xCoordinate}
                            onChange={(e) => { setXCoordinate(e) }}
                            options={movesOption}
                            placeholder="Select X Coordinate"
                            hasStickyGroupHeaders
                        />
                    </FormControl>
                </Box>
                <Box w='30%'>
                    <FormControl p={4}>
                        <FormLabel>
                            Y Coordinate
                        </FormLabel>
                        <Select
                            value={yCoordinate}
                            onChange={(e) => { setYCoordinate(e) }}
                            options={movesOption}
                            placeholder="Select Y Coordinate"
                            hasStickyGroupHeaders
                        />
                    </FormControl>
                </Box>
            </Box>
            <Box m='5' >
                <Button
                    m='5'
                    colorScheme='teal'
                    size='md'
                    isDisabled={enableButton}
                    onClick={() => { findPossibleMoves(xCoordinate.value, yCoordinate.value) }}
                >
                    Find Possible moves
                </Button>
            </Box>
            <Box m='5'>
                <Box>
                    {!enableButton && result && <Text>
                        There are {result} possible moves of the knight in this position</Text>}
                </Box>
            </Box>
        </>
    )
}
export default Chess