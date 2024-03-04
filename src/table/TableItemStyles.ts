import { mergeStyleSets } from "@fluentui/react"
import { useMemo } from "react"

export const useTableItemStyles = (isSelected : boolean, hasPrerequisite : boolean) => {

    return {
        classNames: useMemo(() => getClassNames(isSelected, hasPrerequisite), [isSelected, hasPrerequisite])
    }
}

    const getClassNames = (isSelected : boolean, hasPrerequisite : boolean) => {
        return mergeStyleSets({
            class: {
                border: '3px solid black',
                height: '150px',
                width: '150px', 
                margin: '5px',
                background:'#97999c',
                backgroundColor: isSelected ? 'lightblue' : hasPrerequisite ? '' : '#0c6c99',
                cursor: hasPrerequisite ? 'default' : 'pointer',
                color: hasPrerequisite ? '#3c3d3d' : 'black',
                transition: 'background-color 0.2s ease',
                ':hover': {
                    cursor: !hasPrerequisite ? 'pointer' : '',
                    backgroundColor: !hasPrerequisite && isSelected? "#0c6c99" : !hasPrerequisite ? "lightblue" : ''
                },
                textAlign: 'center',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                wordBreak: 'break-word', 
                padding:'3px',
                fontFamily: 'Roboto, sans-serif',
                userSelect:'none',
                
            },


        });
    };