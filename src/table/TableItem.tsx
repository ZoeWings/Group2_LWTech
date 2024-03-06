
"use client"; // This is a client component 👈🏽
import React, { useMemo } from "react";
import { IClass } from "./TableRoot";
import { useTableItemStyles } from "./TableItemStyles";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

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

    const unfulfilledPrereqs = useMemo(() => {
        let result: string[] = []
        item['pre-req'].forEach((prereq) => {
            const selected = selectedItems.findIndex((selected) => selected.classId === prereq)
            if (selected === -1) {
                const prereqItem = prerequisiteItems.find((preqItem) => preqItem.classId === prereq)
                if (prereqItem) {
                    result.push(prereqItem.className)
                }
            }
        })
        return result
    }, [item, selectedItems, prerequisiteItems])

    const renderToolTip = (props: any) => (
        unfulfilledPrereqs.length > 0 ?
                <Tooltip id='tooltip' {...props}
                >
                    <ul><p>Missing Prereqs:</p>
                    {unfulfilledPrereqs.map((prereq) => (<li>{prereq}</li>))}
                    </ul>
                </Tooltip> : <></>
    )

    const handleClick = () => {
        // Check if the class has prerequisites and is not selected
        if (unfulfilledPrereqs.length > 0 && !isSelected) {
            return; // Do nothing if the class has prerequisites and is not selected
        }

        // Continue with the regular click handling for selected or non-prerequisite classes
        onSelectItem(item);
    };

    const {classNames} = useTableItemStyles(isSelected, unfulfilledPrereqs.length > 0)

    return (
        <OverlayTrigger
            placement="auto"
            delay={{ show: 250, hide: 400 }}
            overlay={renderToolTip}
        >
            <div onClick={handleClick} className={classNames.class}>
                <span>{item.className}</span>
            </div>

        </OverlayTrigger>
        
    )
}