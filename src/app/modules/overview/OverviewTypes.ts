export interface Data  {
    title: string,
      subtitle: string,
      tables: TableType[],
      graphs: any[],
}

export interface TableType  {
    id: string,
    titles: string[],
    data: Array<string[]>
}