import React, { useRef } from 'react'

// Components
import { Box } from '@material-ui/core'
import { Condition } from './Condition'
import { GroupLogicGuide } from './GroupLogicGuide'

export function ConditionGroup({ group }) {
  const conditionRefs = useRef([])

  const addRef = (ref) => {
    conditionRefs.current.push(ref)
  }

  return (
    <Box display="flex" position="relative">
      <GroupLogicGuide nodeList={conditionRefs.current} />
      <Box flexGrow="1">
        {group.conditions.map((condition, index) => {
          return condition.conditionGroup ? (
            <ConditionGroup
              key={index}
              group={condition.conditionGroup}
            />
          ) : (
            <Condition key={index} condition={condition} innerRef={addRef} />
          )
        })}
      </Box>
    </Box>
  )
}
