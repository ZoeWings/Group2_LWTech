import { mergeStyleSets } from "@fluentui/react"
import { useMemo } from "react"

export const TableRootStyles = () => {

    return {
        classNames: useMemo(() => getClassNames(), [])
    }
}

    const getClassNames = () => {
        return mergeStyleSets({
            root: {
                display: 'flex'
            },
            header: {
                display: 'flex',
                border: '3px solid black',
                color: 'white',
                backgroundColor:"#005f83",
                margin: '5px',
                height: '156px',
                width: '156px', 
                fontSize: '18px',
                textAlign: 'center',
                wordBreak: 'break-word', 
                overflow:'hidden',
                justifyContent:'center',
                alignItems:'center',
                fontFamily: 'Roboto, sans-serif',
                fontWeight:'bold'
            },
            pageTitle: {
                display: 'flex'
            },
            h1:{
                color:'#099ecc',
                textAlign:'center',
                fontFamily: 'Roboto, sans-serif',
                borderBottom: '1px solid black',
                'hr':{
                    margin:'0px'
                }
            },
            app:{
                marginRight: 'auto',
                marginLeft:'auto',
                alignItems:'center',
                maxWidth: '800px',
                display: 'flex', 
                flexDirection: 'column',
            },
            wrapper:{
                color: 'black',
                textAlign:'center',
                lineHeight:"0.1px",
                fontFamily: 'Roboto, sans-serif',
                'h3':{
                    margin:'12px'
                },

            },
            orWrapper:{
                textAlign:'center',
                width:'156px',
                margin:'-5px 5px -5px 5px',
                fontFamily: 'Roboto, sans-serif',
                backgroundColor: "#97999c",
                cursor:'default',
                userSelect:'none',
                border: "transparent",
                'h4':{
                    margin:'0px',
                    color:'red'
                },
                'h3':{
                    margin:'12px'
                }

            },
            subClassWrapper:{
                '>:first-child':{
                    borderTop:'3px solid black',
                    borderLeft:'3px solid black',
                    borderRight:'3px solid black',
                    borderBottom:'transparent'
                },
                '>*+*':{
                    borderTop:'transparent',
                    borderBottom:'transparent',
                    '>*':{
                        borderLeft:'3px solid black',
                        borderRight:'3px solid black',
                        borderTop:'transparent',
                        borderBottom:'transparent'
                    }
                },
                '>:last-child':{
                    '>:last-child':{
                        borderBottom:'3px solid black'
                    }
                }

            },
            noBorderClass:{
                border:"transparent"
            }

        });
    };