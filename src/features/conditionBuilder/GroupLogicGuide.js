import React, { useEffect, useRef, useState } from 'react'

const ARROW_HEIGHT = 60

export function GroupLogicGuide({ nodeList }) {
  const canvasRef = useRef()
  const [arrowPoints, setArrowPoints] = useState([])

  useEffect(() => {
    nodeList.forEach((node) =>
      setArrowPoints((prevState) => prevState.concat(calculateTop(node)))
    )
  }, [nodeList])

  const buildLinePoints = () => {
    if (!nodeList.length) return

    const firstElem = nodeList[0]
    const lastElem = nodeList[nodeList.length - 1]
    const canvasWidth = canvasRef.current.clientWidth

    const lineStart = `${canvasWidth / 2}, ${lastElem.offsetTop + 10}`
    const lineTurn = `${canvasWidth / 2}, ${firstElem.offsetTop - 10}`
    const lineEnd = `${canvasWidth}, ${firstElem.offsetTop - 10}`
    return [lineStart, lineTurn, lineEnd].join(' ')
  }

  const calculateTop = (node) => {
    return node.offsetTop + (node.clientHeight - ARROW_HEIGHT) / 2
  }

  return (
    <div ref={canvasRef}>
      <svg ref={canvasRef} width="80px" height="100%">
        <polyline
          points={buildLinePoints()}
          stroke="black"
          fill="none"
          strokeDasharray="4"
        />
        {arrowPoints.map((node, index) => (
          <rect
            key={index}
            height={ARROW_HEIGHT}
            width={ARROW_HEIGHT}
            x="10"
            y={node}
          />
        ))}
      </svg>
    </div>
  )
}
