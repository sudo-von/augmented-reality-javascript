import { useState } from "react"

export const useFile = ( filename ) => {

    let file = require(`../data/${filename}`)
    file = file.map(data => {
        // Format cost.
        data.cost = data.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        // Get absolute path based on the environment.
        let absolute_path = process.env.NODE_ENV === 'development' ? '../../../../assets' : '../../../../augmented-reality-javascript/assets'
        data.img = `${absolute_path}/images/${data.img}`
        data.android_model = `${absolute_path}/android/${data.android_model}`
        data.ios_model = `${absolute_path}/ios/${data.ios_model}`
        return data
    })
    const [ data, setData ] = useState(file)
    return [ data, setData ]
    
}