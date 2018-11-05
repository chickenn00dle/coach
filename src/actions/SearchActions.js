import { UPDATE_QUERY_STRING } from './Actions';

const updateQuery = text => ({
    type: UPDATE_QUERY_STRING,
    text
});

export default updateQuery;
