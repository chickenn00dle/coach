import { UPDATE_QUERY_STRING } from './Actions'

const UpdateSearchQuery = text => ({
    type: UPDATE_QUERY_STRING,
    text
})

export default UpdateSearchQuery
