export enum ElectionTypes {
    LOKSABHA = 'GE',
    VIDHANSABHA = 'AE'
}

export interface VisualizationForm {
    electionType: ElectionTypes | string
    stateName: string
    visualization: string
    visualizationType: string
    assemblyNumber: string
    party: string
    legends: Set<string>
    segmentwise: boolean
}