import StateCodes from './data/StateCodes.json'
import VidhanSabhaNumber from './data/VidhanSabhaNumber.json'
import ChartsMapsCodes from './data/ChartsMapsCodes.json'

function compareValues(key: string, order = 'asc') {
    return function innerSort(a: { [x: string]: any; hasOwnProperty: (arg0: any) => any; }, b: { [x: string]: any; hasOwnProperty: (arg0: any) => any; }) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
        }

        const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
        comparison = 1;
        } else if (varA < varB) {
        comparison = -1;
        }
        return (
        (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

const removeDuplicatesFromArray = (arr: any[]) => Array.from (new Set(
    arr.map((el: any) => JSON.stringify(el))
)).map(e => JSON.parse(e));
  
export const GE_States = StateCodes.sort(compareValues('State_Name')).map(function (item) { return { value: item.State_Name, label: item.State_Name.replace(/_/g, " ") } });
const unique_AE_States = Array.from(new Set(VidhanSabhaNumber.sort(compareValues('State_Name')).map(x => x.State_Name)));
export const AE_States = unique_AE_States.map(function (item) { return { value: item, label: item.replace(/_/g, " ") } });
export const visualizationVarOptions = [{ value: "", label: "Select Level" }].concat(removeDuplicatesFromArray(ChartsMapsCodes.map(function(x){return{value:x.varType,label:x.varLabel}})));

export const BASE_URL = 'http://lokdhaba.ashoka.edu.in:15000/api'

export const CHECKED = (visualization: string) => ChartsMapsCodes.filter(function (item) { return item.modulename === visualization })[0].alloptionschecked;

