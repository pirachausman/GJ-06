import { AE_States, GE_States } from "./VisualizationData";
import { ElectionTypes } from "./VisualizationTypes";
import ChartsMapsCodes from './data/ChartsMapsCodes.json';
export async function fetchStates(type: ElectionTypes): Promise<any[]> {
    const states = [{ value: "", label: "Select State" }]
    if (type === ElectionTypes.LOKSABHA) {
        states.push({ value: "Lok_Sabha", label: "All" })
        states.push(...GE_States);        
    }
    else {
        states.push(...AE_States);   
    }
    return states;
}

export function fetchVisualizationOptions(variable: string): any[] {
    return [{ value: "", label: "Chart/Map" }]
        .concat(ChartsMapsCodes.filter(x => x.varType === variable).map(function (item) { return { value: item.modulename, label: item.title } }));
}

export function fetchVisualizationType(visualizationOption: string) {
    return ChartsMapsCodes.filter(function (item) {
        return item.modulename === visualizationOption
      })[0].type
}