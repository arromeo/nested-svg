import React from 'react'

// Components
import { Container } from '@material-ui/core'
import { ConditionGroup } from './features/conditionBuilder'

const testData = {
  operator: 'Every',
  conditions: [
    {
      source: 'FavoriteFood',
      operator: 'ContainsText',
      parameters: ['pizza']
    },
    {
      conditionGroup: {
        operator: 'Every',
        conditions: [
          {
            source: 'FavoriteFood',
            operator: 'ContainsText',
            parameters: ['tacos']
          },
          {
            source: 'FavoriteColor',
            operator: 'ContainsText',
            parameters: ['blue']
          },
          {
            source: 'FavoriteColor',
            operator: 'ContainsText',
            parameters: ['red']
          }
        ]
      }
    },
    {
      source: 'FavoriteFood',
      operator: 'ContainsText',
      parameters: ['burgers']
    }
  ]
}

function App() {
  return (
    <Container>
      <ConditionGroup group={testData} />
    </Container>
  )
}

export default App
