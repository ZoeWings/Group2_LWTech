
"use client"; // This is a client component 👈🏽
import React, { useMemo } from "react";
import { IClass } from "./TableRoot";
import { useTableItemStyles } from "./TableItemStyles";


export const TableItem = (props: {
    item: IClass; // each class
    selectedItems: IClass[]; // array of items that are selected by user
    prerequisiteItems: IClass[]; // prerequisites for class
    onSelectItem: (item: IClass) => void;
}) => {
    const { 
        item, 
        selectedItems, 
        prerequisiteItems,
        onSelectItem,
    } = props;
    
    const isSelected = useMemo(() => { // if class is selected
        return selectedItems.findIndex(x => x.className === item.className) >= 0;
    }, [item, selectedItems]);

    const hasPrerequisites = useMemo(() => { // if class has prerequisites 
        let hasTakenAllPreReq;
        hasTakenAllPreReq=true;

        item["pre-req"].map((x)=>{
            const index = selectedItems.findIndex((y)=> y.classId === x)
            if(index === -1){ // selected items does not have a pre req
                hasTakenAllPreReq = false;
                return;
            }
        })
        return item["pre-req"].length > 0 && hasTakenAllPreReq === false;
    }, [item,selectedItems]);

    const handleClick = () => {
        // Check if the class has prerequisites and is not selected
        if (hasPrerequisites && !isSelected) {
            return; // Do nothing if the class has prerequisites and is not selected
        }

        // Continue with the regular click handling for selected or non-prerequisite classes
        onSelectItem(item);
    };

    const {classNames} = useTableItemStyles(isSelected, hasPrerequisites)

    return (

        <div onClick={handleClick} className={classNames.class}>
                                                    
            <span>{item.className}</span>

        </div>
        
    )
}