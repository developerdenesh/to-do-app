import React, { useCallback } from 'react'
import {
    Pressable
} from 'react-native'
import { Box, useTheme, themeTools, useColorModeValue } from 'native-base'

interface Props {
    isDone: boolean
}

const TaskItem = (props: Props) => {
    const { isDone } = props
    const theme = useTheme()
    const highlightColor = themeTools.getColor(
        theme, 
        useColorModeValue('blue.500', 'blue.400')
    )

    const boxStroke = themeTools.getColor(
        theme,
        useColorModeValue('muted.300', 'muted.500')
    )

    const checkMarkColor = themeTools.getColor(
        theme,
        useColorModeValue('white', 'white')
    )

    const activeTextColor = themeTools(
        theme,
        useColorModeValue('darkText', 'lightText')
    )

    const doneTextColor = themeTools.getColor(
        theme,
        useColorModeValue('muted.400', 'muted.600')
    )

    return (
        <Box width={30} height={30} mr={2}>
            <Pressable onPress={}>
            </Pressable>
        </Box>
    )
}

export default TaskItem