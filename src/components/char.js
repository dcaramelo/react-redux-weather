import _ from 'lodash'
import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export default (props) => {

    const avg = _.round(_.sum(props.data) / props.data.length)

    console.log(_.sum(props.data), props.data.lenght, avg)

    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{avg}</div>
        </div>
    )
}