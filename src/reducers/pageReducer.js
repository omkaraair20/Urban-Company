import {DISPLAY_DATA,RECIEVE_IMAGE_LIST} from '../constants/frontEndConstants.js'

export function pageReducer(state = {}, action) {
    switch (action.type) {

        
        case RECIEVE_IMAGE_LIST:
            
            let pageData = action.data.success.data.media;
            return Object.assign({}, state, {
                pageData,
                "dataModified":true
            })
        default:
            return state
    }
}