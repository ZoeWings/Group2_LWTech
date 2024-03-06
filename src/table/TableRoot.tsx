"use client"; // This is a client component 👈🏽
import { Dialog, DialogType, IconButton, initializeIcons } from "@fluentui/react"
import { TableRootStyles } from "./TableRootStyles"
import { useMemo, useState } from "react"
import myClasses from './Classes.json';
import myDegrees from './Degrees.json';
import { TableItem } from "./TableItem";
import Table from 'react-bootstrap/Table';


export interface IClass {
    className: string;
    classId: number;
    "pre-req": number[];
}

export interface IDegree {
    degreeName: string;
    degreeId: number;
    quarters: IQuarter[];
}

export interface IQuarter {
    quarter: number;
    classes: IClassWithSub[]
}

export interface IClassWithSub {
    classId: number,
    sub: number[];
    "pre-req": number[];
}

function range(start: number, stop: number, step: number = 1): number[] {
    return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
}

export const TableRoot = () => {
    initializeIcons();

    const [classes, setClasses] = useState<IClass[]>([]);
    const [degrees, setDegrees] = useState<IDegree[]>([]);
    const [selectedClasses, setSelectedClasses] = useState<IClass[]>([]);
    const [isViewingInfo, setIsViewingInfo] = useState<boolean>(false)

    useMemo(() => {
        setClasses(myClasses as IClass[])
    }, [])

    useMemo(() => {
        setDegrees(myDegrees as IDegree[])
    }, [])

    const _onClick = (item: IClass) => {
        const classes = [...selectedClasses]
        const index = classes.findIndex(x => x.className === item.className);
        if (index > -1) {
            classes.splice(index, 1);
        } else {
            classes.push(item);
        }
        setSelectedClasses(classes);
    }

    const { classNames } = TableRootStyles();

    return (
        <div>
            <div>
                <h1>{'New CSD Programs List'}</h1>
                <IconButton onClick={() => setIsViewingInfo(!isViewingInfo)} iconProps={{iconName: 'Info'}} />
            </div>
            <Table striped bordered>
                {/* header items */}
                <thead>
                    <tr>
                        <th>Quarters \ Degrees</th>
                        {degrees.map(degree => (
                            <th key={degree.degreeId}>
                                <span>{degree.degreeName}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                {/* body items */}
                <tbody>
                    {range(0, 12).map((quarter) => {
                        const degreeQuarterClasses: IClassWithSub[][] = degrees.map((degree) => {
                            const quarterIndex = degree.quarters.findIndex((degreeQuarter) => degreeQuarter.quarter == quarter)
                            if (quarterIndex == -1) {
                                return [] as IClassWithSub[]
                            } else {
                                return degree.quarters[quarterIndex].classes
                            }
                        })

                        return (
                            <tr key={'quarter-' + quarter}>
                                <th>{quarter === 0 ? 'Prerequisites' : `Quarter ${quarter}`}</th>
                                {degreeQuarterClasses.map((quarterClasses) => (
                                    <td>
                                        <div>
                                            {quarterClasses.map((_class) => {
                                                const classInfo = classes.find(x => x.classId === _class.classId);
                                                const hasSubs = _class.sub?.length > 0;
                                                if (classInfo !== undefined) {
                                                    return (
                                                        <div key={classInfo.classId} className={classNames.subClassWrapper}>
                                                            <TableItem 
                                                            onSelectItem={(item) => {_onClick(item)}} 
                                                            item={classInfo} 
                                                            selectedItems={selectedClasses} 
                                                            prerequisiteItems={classes}
                                                            />

                                                            {hasSubs && _class.sub.map(sub => {
                                                                const subClass = classes.find(x => x.classId === sub);
                                                                if (subClass !== undefined) {
                                                                    return (
                                                                        <div key={subClass.classId} className = {classNames.noBorderClass}>
                                                                            <div className={classNames.orWrapper}>---or---</div>

                                                                            <TableItem 
                                                                            onSelectItem={(item) => {_onClick(item)}} 
                                                                            item={classInfo} 
                                                                            selectedItems={selectedClasses} 
                                                                            prerequisiteItems={classes}
                                                                            />
                                                                            
                                                                        </div>
                                                                    )
                                                                }
                                                            })}

                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
    
            <Dialog 
                hidden={!isViewingInfo}
                minWidth={400}
                dialogContentProps={
                    {
                        type: DialogType.normal,
                        title: 'Help',
                        showCloseButton: true,
                        closeButtonAriaLabel: 'Close'
                    }
                }
                onDismiss={() => setIsViewingInfo(false)}
            >
                <div>
                    <h3>Catalog of Programs and Classes</h3>
                    <p>Every program is listed by quarter and/or prerequisites</p>
                    <p>Select any class to view where it resides within any other program (if applicable)</p>
                    <p>Classes that can be substituted are divided with an 'OR' statement, please only choose one</p>
                    <p>Please choose any class that is selectable to start your class planning for your program</p>
                    <b><p style={{color:"#0c6c99"}}>This color means the class is selectable beacause its prerequisites are met</p></b>
                    <b><p style={{color:"#97999c"}}>This color means the class is NOT selectable beacause its prerequisites are not yet met</p></b>
                    <b><p style={{color:"lightblue"}}>This color means the class is now selected</p></b>
                </div>
            </Dialog>
        </div>
    ); 
}
