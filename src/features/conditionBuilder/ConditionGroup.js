import React from 'react'

// Components
import { Condition } from './Condition'
// {
//   operator: 'Every',
//   conditions: [
//     {
//       operator: 'ContainsText',
//       source: 'testId',
//       parameters: ['apple']
//     },
//     {
//       conditionGroup: {
//         operator: 'Any',
//         conditions: [
//           {
//             operator: 'DoesNotContainText',
//             source: 'testId',
//             parameters: ['pineapple']
//           }
//         ]
//       }
//     }
//   ]
// }

export function ConditionGroup({ group }) {
  return <Condition />
}
