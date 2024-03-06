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
                cursor:'default',
                userSelect:'none',
                border: "transparent",
                color:'#cc8888',
                fontStyle: 'italic',
                fontSize: '0.8em',
            },
            subClassWrapper:{
                border: '1px dashed gray',
            },
            noBorderClass:{
            }

        });
    };