import { UPDATE_QUERY_STRING } from './Actions';

const updateSearchQuery = text => ({
    type: UPDATE_QUERY_STRING,
    text
});

export default updateSearchQuery;
