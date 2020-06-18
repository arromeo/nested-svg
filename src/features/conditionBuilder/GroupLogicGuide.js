import React, { useEffect, useRef, useState } from 'react'

export function GroupLogicGuide({ nodeList }) {
  const canvasRef = useRef()
  const [arrowPoints, setArrowPoints] = useState([])

  useEffect(() => {
    nodeList.forEach((node) =>
      setArrowPoints((prevState) => prevState.concat(node.offsetTop))
    )
  }, [nodeList])

  const canvasOffset = canvasRef.current && canvasRef.current.offsetTop

  const lineState =
    nodeList.length && `40, ${nodeList[0].offsetTop - 20 - canvasOffset}`
  const endLine =
    nodeList.length &&
    `40, ${nodeList[nodeList.length - 1].offsetTop + 10 - canvasOffset}`

  const lineString = [lineState, endLine].join(' ')

  return (
    <div ref={canvasRef}>
      <svg ref={canvasRef} width="80px" height="100%">
        <polyline points={lineString} stroke="black" strokeDasharray="4" />
        {arrowPoints.map((node) => (
          <rect
            height="60"
            width="60"
            x="10"
            y={node - canvasRef.current.offsetTop}
          />
        ))}
      </svg>
    </div>
  )
}
