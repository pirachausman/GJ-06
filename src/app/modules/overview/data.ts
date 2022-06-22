export const data = [
    {
      title: 'Total number of contestants',
      subtitle: '2022 & 2017',
      tables: [
        {
          id: 'Total number of contestants',
          titles: [
            'State',
            '2017: Total Contestants',
            '2022: Total Contestants',
            'Link to historical data',
          ],
          data: [
            [
              'Goa',
              '251',
              '301',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Goa&var=Candidate&viz=contestedDepositSavedChart">Link for Goa</a>',
            ],
            [
              'Manipur',
              '266',
              '265',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Manipur&var=Candidate&viz=contestedDepositSavedChart">Link for Manipur</a>',
            ],
            [
              'Punjab',
              '1145',
              '1304',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Punjab&var=Candidate&viz=contestedDepositSavedChart">Link for Punjab</a>',
            ],
            [
              'Uttar Pradesh',
              '4853',
              '4442',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Uttar_Pradesh&var=Candidate&viz=contestedDepositSavedChart">Link for Uttar_Pradesh</a>',
            ],
            [
              'Uttarakhand',
              '637',
              '632',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Uttarakhand&var=Candidate&viz=contestedDepositSavedChart">Link for Uttarakhand</a>',
            ],
          ],
        },
      ],
      graphs: [
        {
          title: 'Total Contestants 2017 and 2022',
          series: [
            {
              name: '2017',
              data: [251, 266, 1145, 4853, 637],
            },
            {
              name: '2022',
              data: [301, 265, 1304, 4442, 632],
            },
          ],
          xaxis: {categories: ['Goa', 'Manipur', 'Punjab', 'Uttar Pradesh', 'Uttarakhand']},
          colors: ['rgba(125, 101, 216, 1)', 'rgba(100, 109, 204, 1)'],
        },
        {
          title: 'Change in the number of candidates from the previous election',
          colors: ['rgba(125, 101, 216, 1)'],
          xaxis: {categories: ['Goa', 'Manipur', 'Punjab', 'Uttar Pradesh', 'Uttarakhand']},
          series: [{name: 'Change from 2017 to 2022', data: [50, -1, 159, -411, -5]}],
        },
      ],
    },
    {
      title: 'Total number of women contestants',
      subtitle: '2022 & 2017',
      graphs: [
        {
          title: '2022 & 2017: Total number of women contestants',
          colors: ['rgba(125, 101, 216, 1)', 'rgba(100, 109, 204, 1)'],
          xaxis: {categories: ['Goa', 'Manipur', 'Punjab', 'Uttar Pradesh', 'Uttarakhand']},
          series: [
            {name: '2017', data: [7.57, 4.14, 7.07, 9.93, 9.73]},
            {name: '2022', data: [8.64, 6.42, 7.13, 12.63, 9.97]},
          ],
        },
      ],
      tables: [
        {
          id: 'Total number of women contestants',
          titles: ['State', '2017: Women Contestants', '2022: Women Contestants'],
          data: [
            ['Goa', '19', '26'],
            ['Manipur', '11', '17'],
            ['Punjab', '81', '93'],
            ['Uttar_Pradesh', '482', '561'],
            ['Uttarakhand', '62', '63'],
          ],
        },
      ],
    },
    {
      title: 'Total number of political parties',
      subtitle: '2022 & 2017',
      graphs: [
        {
          title: '2022 & 2017: Total number of political parties',
          colors: ['rgba(125, 101, 216, 1)', 'rgba(100, 109, 204, 1)'],
          xaxis: {categories: ['Goa', 'Manipur', 'Punjab', 'Uttar Pradesh', 'Uttarakhand']},
          series: [
            {name: '2017', data: [18, 18, 52, 303, 35]},
            {name: '2022', data: [13, 14, 58, 288, 45]},
          ],
        },
      ],
      tables: [
        {
          id: 'Total number of political parties',
          titles: [
            'State',
            '2017: Parties Contested',
            '2022: Parties Contested',
            'Link to historical data',
          ],
          data: [
            [
              'Goa',
              '18',
              '13',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Goa&var=PartyStats&viz=partiesPresentedChart">Link for Goa</a>',
            ],
            [
              'Manipur',
              '18',
              '14',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Manipur&var=PartyStats&viz=partiesPresentedChart">Link for Manipur</a>',
            ],
            [
              'Punjab',
              '52',
              '58',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Punjab&var=PartyStats&viz=partiesPresentedChart">Link for Punjab</a>',
            ],
            [
              'Uttar_Pradesh',
              '303',
              '288',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Uttar_Pradesh&var=PartyStats&viz=partiesPresentedChart">Link for Uttar_Pradesh</a>',
            ],
            [
              'Uttarakhand',
              '35',
              '45',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Uttarakhand&var=PartyStats&viz=partiesPresentedChart">Link for Uttarakhand</a>',
            ],
          ],
        },
      ],
    },
    {title: 'Total number of rerunning incumbents', subtitle: '2022 & 2017', graphs: [
        {
          title: '22022 & 2017: Total number of rerunning incumbents',
          colors: ['rgba(125, 101, 216, 1)', 'rgba(100, 109, 204, 1)'],
          xaxis: {categories: ['Goa', 'Manipur', 'Punjab', 'Uttar Pradesh', 'Uttarakhand']},
          series: [
            {name: '2017', data: [14.74,21.43,7.25,5.03,9.42]},
            {name: '2022', data: [11.96,21.89,6.52,4.5,7.75]},
          ],
        },
      ],
      tables: [
        {
          id: 'Total number of rerunning incumbents',
          titles: [
              'State',	'2017: Rerunning Incumbent Count',	'2017: Total Contestants',	'2022: Rerunning Incumbent Count',	'2022: Total Contestants',	'Link to historical'
          ],
          data: [
              [
                'Goa',	'37',	'251',	'36',	'301',              
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Goa&var=Candidate&viz=incumbentsChart">Link for Goa</a>',
            ],
            [
                'Manipur',	'57',	'266',	'58',	'265',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Manipur&var=Candidate&viz=incumbentsChart">Link for Manipur</a>',
            ],
            [
              'Punjab',	'83',	'1145',	'85',	'1304',                            
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Punjab&var=Candidate&viz=incumbentsChart">Link for Punjab</a>',
            ],
            [
              'Uttar Pradesh',	'244',	'4853',	'200',	'4442',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Uttar_Pradesh&var=Candidate&viz=incumbentsChart">Link for Uttar_Pradesh</a>',
            ],
            [
              'Uttarakhand',	'60',	'637',	'49',	'632',
              '<a target="_blank" href="https://lokdhaba.ashoka.edu.in/data-vis?et=AE&st=Uttarakhand&var=Candidate&viz=incumbentsChart">Link for Uttarakhand</a>',
            ],
          ],
        },
      ]},
    {title: 'Total number of turncoats', subtitle: '2022 & 2017'},
    {title: 'Total number of rerunning contestants', subtitle: '2022 & 2017'},
    {title: 'Average age of contestants', subtitle: '2022 & 2017'},
    {title: 'Parties contested and represented', subtitle: '2017'},
    {title: 'Ratio of first time MLAs', subtitle: '2017'},
    {title: 'Party-wise first time MLAs', subtitle: '2017'},
    {title: 'Turncoats', subtitle: '2017'},
    {title: 'Turncoats by party', subtitle: '2017'},
    {title: 'Voter Turnout', subtitle: '2017'},
    {title: 'Constituencies', subtitle: ''},
    {title: 'Representation by Gender', subtitle: '2017'},
    {title: 'Party Seat Share', subtitle: '2017'},
    {title: 'Seat Share across States (INC & BJP)', subtitle: '2017'},
  ]

  