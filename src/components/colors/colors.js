import React from 'react';
import Color from '../color/color';
import Mapper from '../mapper/mapper';

const allColors = ['Red', 'Yellow', 'Blue', 'Green']

class Colors extends React.Component {
    state = {
        list: []
    }

    componentDidMount = () => {
        this.sortColors();
    }

    sortColors = () => {
        let newArray = [];
        newArray = allColors.sort(
            function () {
                return Math.random() - 0.5;
            }
        );
        console.log('Colors:: ', newArray);
        this.setState({
            list: newArray
        });
    }

    rotateColors = () => {
        const { list } = this.state;
        console.log('List: ', list);
        let first, rest;
        [first, ...rest] = list
        rest.push(first);
        this.setState({
            list: rest
        })
        console.log('Rotate: ', rest);
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <button className="text-center btn btn-dark btn-lg btn-block mt-2 mb-2" onClick={this.rotateColors}>
                    Rotate
                </button>
                <div>
                    <Mapper list={list} />
                </div>
            </div>
        )
    }
}

export default Colors;