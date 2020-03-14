import React from 'react';
import Color from '../color/color';

function Mapper(props) {

    let list = props.list;
    let listOfColors = [];
    for (let i = 0; i < list.length; i++) {
        if (i % 2 === 0) {
            listOfColors.push(
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0">
                        <Color color={list[i]} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0">
                        <Color color={list[i + 1]} />
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {
                listOfColors.map(element => <div>{element}</div>)
            }
        </div>
    )
}

export default Mapper;