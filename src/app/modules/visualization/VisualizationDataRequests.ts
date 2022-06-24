import { AE_States, BASE_URL, GE_States } from "./VisualizationData";
import { ElectionTypes, VisualizationForm } from "./VisualizationTypes";
import ChartsMapsCodes from './data/ChartsMapsCodes.json';
import VidhanSabhaNumber from './data/VidhanSabhaNumber.json'
import LokSabhaNumber from './data/LokSabhaNumber.json'
import { ListType } from "../../../_metronic/partials/widgets/lists/ListsWidget9";

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

export const fetchVisualizationData = async (formData: VisualizationForm) => {
    let {electionType, stateName, visualization, visualizationType, assemblyNumber, party, legends, segmentwise} = formData;
    if(segmentwise && electionType ==="GE"){
    electionType = "GA"
    }

    const url = BASE_URL+ "/data/api/v1.0/getVizData";
    
    let response = await fetch(url, {
        method: "POST",
        mode:"cors",
        headers: new Headers({
            "content-type": "application/json"
        }),
        body: JSON.stringify({
            ElectionType: electionType,
            StateName: stateName,
            ModuleName: visualization,
            VizType: visualizationType,
            AssemblyNo: assemblyNumber,
            Party: party,
            Legends: Array.from(legends)
        })
    })
    let data = await response.json()
    return data;
  }


  export const fetchChartMapOptions = async (formData: VisualizationForm) => {
    let {electionType, stateName, visualization, visualizationType, assemblyNumber} = formData;
    const url = BASE_URL + "/data/api/v1.0/getVizLegend";
      let response = await fetch(url, {
          method: "POST",
          mode: "cors",          
          headers: new Headers({
              "content-type": "application/json"
          }),
         
          body: JSON.stringify({
              ElectionType: electionType,
              StateName: stateName,
              ModuleName: visualization,
              VizType: visualizationType,
              AssemblyNo: assemblyNumber
          })
      });
      let data = await response.json();
      return data;
  }

export const fetchAssemblies = (electionType: ElectionTypes, stateName: string): ListType[] => {
    let assemblies: ListType[] = [];
    if (electionType === "AE") {
        assemblies = VidhanSabhaNumber.filter(function (item) { return item.State_Name === stateName })
            .map(item => ({ title: `${item.Assembly_No} assembly`, subtitle: `${item.Year}`, id: `${item.Assembly_No}`, selected:false }));
    } else if (electionType === "GE") {    
        if (stateName === "all") {
            assemblies = Array.from(new Set(LokSabhaNumber.map(s => s.Assembly_No))).map(Assembly_No => {
                let assembly = LokSabhaNumber.find(s => s.Assembly_No === Assembly_No)
                return { title: `${Assembly_No} assembly`, subtitle: `${assembly?.Year}`, id: `${Assembly_No}`, selected: false }
            });
        } else {
            assemblies = LokSabhaNumber.filter(function (item) { return item.State_Name === stateName })
                .map(item => ({ title: `${item.Assembly_No} assembly`, subtitle: `${item.Year}`, id: `${item.Assembly_No}`, selected: false }));
        }
    }
   assemblies.unshift({ title: 'Select All', subtitle: '', id: '0', selected :false })
    return assemblies;
  }