import { useState } from "react"

export const useFile = ( filename ) => {

    const file = require(`../data/${filename}`)
    const [ data, setData ] = useState(file)
    return [ data, setData ]
    
}