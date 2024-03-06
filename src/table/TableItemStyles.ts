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
                backgroundColor: isSelected ? 'aquamarine' : hasPrerequisite ? 'lightgray' : '',
                cursor: hasPrerequisite ? 'default' : 'pointer',
                color: hasPrerequisite ? 'gray' : 'black',
                transition: 'background-color 0.2s ease',
                ':hover': {
                    cursor: !hasPrerequisite ? 'pointer' : '',
                    color: hasPrerequisite ? '': 'blue',
                },
                textAlign: 'center',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                //wordBreak: 'break-word', 
                //padding:'3px',
                //fontFamily: 'Roboto, sans-serif',
                userSelect:'none',
                
            },
        });
    };