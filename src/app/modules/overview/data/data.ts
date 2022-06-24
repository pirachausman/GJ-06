import { Data } from "../OverviewTypes";
import table1 from "./tables/table1.json";
import table2 from "./tables/table2.json";
import table3 from "./tables/table3.json";
import table4 from "./tables/table4.json";
import table5 from "./tables/table5.json";
import table6 from "./tables/table6.json";
import table7 from "./tables/table7.json";
import table8 from "./tables/table8.json";
import table9 from "./tables/table9.json";
import table10 from "./tables/table10.json";
import table11 from "./tables/table11.json";
import table12 from "./tables/table12.json";
import table13 from "./tables/table13.json";
import table14 from "./tables/table14.json";
import table15 from "./tables/table15.json";
import table16 from "./tables/table16.json";
import table17 from "./tables/table17.json";
import graph1 from "./graphs/graph1.json";
import graph2 from "./graphs/graph2.json";
import graph3 from "./graphs/graph3.json";
import graph4 from "./graphs/graph4.json";
import graph5 from "./graphs/graph5.json";
import graph6 from "./graphs/graph6.json";
import graph7 from "./graphs/graph7.json";
import graph8 from "./graphs/graph8.json";
import graph9 from "./graphs/graph9.json";
import graph10 from "./graphs/graph10.json";
import graph11 from "./graphs/graph11.json";
import graph12 from "./graphs/graph12.json";
import graph13 from "./graphs/graph13.json";
import graph14 from "./graphs/graph14.json";
import graph15 from "./graphs/graph15.json";
import graph16 from "./graphs/graph16.json";
import graph17 from "./graphs/graph17.json";


export const data: Data[] = [
    {
      title: 'Total number of contestants',
      subtitle: '2022 & 2017',
      tables: table1,
      graphs: graph1,
    },
    {
      title: 'Total number of women contestants',
      subtitle: '2022 & 2017',
      graphs: graph2,
      tables: table2,
    },
    {
      title: 'Total number of political parties',
      subtitle: '2022 & 2017',
      graphs: graph3,
      tables: table3,
    },
  {
    title: 'Total number of rerunning incumbents',
    subtitle: '2022 & 2017',
    graphs: graph4,
      tables: table4},
    {title: 'Total number of turncoats', subtitle: '2022 & 2017', graphs: graph5,
    tables: table5},
    {title: 'Total number of rerunning contestants', subtitle: '2022 & 2017', graphs: graph6,
    tables: table6},
    {title: 'Average age of contestants', subtitle: '2022 & 2017', graphs: graph7,
    tables: table7},
    {title: 'Parties contested and represented', subtitle: '2017', graphs: graph8,
    tables: table8},
    {title: 'Ratio of first time MLAs', subtitle: '2017', graphs: graph9,
    tables: table9},
    {title: 'Party-wise first time MLAs', subtitle: '2017', graphs: graph10,
    tables: table10},
    {title: 'Turncoats', subtitle: '2017', graphs: graph11,
    tables: table11},
    {title: 'Turncoats by party', subtitle: '2017', graphs: graph12,
    tables: table12},
    {title: 'Voter Turnout', subtitle: '2017', graphs: graph13,
    tables: table13},
    {title: 'Constituencies', subtitle: '', graphs: graph14,
    tables: table14},
    {title: 'Representation by Gender', subtitle: '2017', graphs: graph15,
    tables: table15},
    {title: 'Party Seat Share', subtitle: '2017', graphs: graph16,
    tables: table16},
    {title: 'Seat Share across States (INC & BJP)', subtitle: '2017', graphs: graph17,
    tables: table17},
  ]

  