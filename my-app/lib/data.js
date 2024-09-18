import fs from 'fs';
import path from 'path';
// data.js is utility functions to read data

//get filepath to data directory. cwd = current working directory
const dataDir = path.join( process.cwd(), 'data' );

export function getSortedData() {
    // get filepath to json file
    const filePath = path.join(dataDir, 'cats.json');

    // load json file contents
    const jsonString = fs.readFileSync( filePath, 'utf8');

    // convert string from file into json array object
    const jsonObj = JSON.parse(jsonString);

    // sort json array by name property
    jsonObj.sort(
        function (a, b) {
            return a.name.localeCompare(b.name);
        }
    );

    // use map() on array to exract the id and name properties into a new array of object values
    return jsonObj.map(
        function(item) {
            return {
                id: item.id.toString(),
                name: item.name,
            };
        }
    );
}

// function to return all cat ids
export function getCatIds() {
        // get filepath to json file
        const filePath = path.join(dataDir, 'cats.json');

        // load json file contents
        const jsonString = fs.readFileSync( filePath, 'utf8');
    
        // convert string from file into json array object
        const jsonObj = JSON.parse(jsonString);

        return jsonObj.map(
            function(item) {
                return {
                    params: {
                    id: item.id.toString()
                    }
                };
            }
        );
}

// return all of the properties for the object with a matching id value
export async function getData( requestedID ) {
        // get filepath to json file
        const filePath = path.join(dataDir, 'cats.json');

        // load json file contents
        const jsonString = fs.readFileSync( filePath, 'utf8');
    
        // convert string from file into json array object
        const jsonObj = JSON.parse(jsonString);

        const matchingObj = jsonObj.filter(
            function(obj) {
                return obj.id.toString() === requestedID;
            }
        );

        let returnedObj;
        if (matchingObj.length > 0) {
            returnedObj = matchingObj[0] 
        } else {
            returnedObj = {};
        }

        return returnedObj;
}

// return all of the properties for the object with a matching id value
export async function getFilePath( requestedID ) {
    // get filepath to json file
    const filePath = path.join(dataDir, 'imgPaths.json');

    // load json file contents
    const jsonString = fs.readFileSync( filePath, 'utf8');

    // convert string from file into json array object
    const jsonObj = JSON.parse(jsonString);

    const matchingObj = jsonObj.filter(
        function(obj) {
            return obj.id.toString() === requestedID;
        }
    );

    let returnedObj;
    if (matchingObj.length > 0) {
        returnedObj = matchingObj[0] 
    } else {
        returnedObj = {};
    }

    return returnedObj;
}