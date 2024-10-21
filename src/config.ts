const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

export const crossmintProjectID = urlParams.get('projectId') || null;

export const crossmintCollectionID = urlParams.get('collectionId') || null;

export const crossmintNET =  urlParams.get('cmNet') || null;
