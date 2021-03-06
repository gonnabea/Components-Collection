// Your each content should be wrapped in tag ! that will be used as a seperator - Jiwon -

import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.section`
    width: ${props => props.width ? props.width : "100px"};
    height: ${props => props.height ? props.height : "100px"};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Contents = styled.main`
    width: ${props => props.width ? props.width : "100px"};
    height: ${props => props.height ? props.height : "100px"};
    overflow-x: hidden;
    display: flex;
    
`;

const Controller = styled.div`
    display: flex;
    justify-content: center;
`;

const Order = styled.button`
    font-size: 18px;
    border:none;
    color: rgb(27%, 91%, 71%);
    background-color: black;
    margin: 5px;
    cursor: pointer;
    :hover{
        color: white;
    }
    
`;

const InfoArea = styled.div`

`; // this is optional


class ListSelector extends Component {
    state = {
        controlArea: null,
        contents: null,
        info: null
    }
    async componentDidMount(){
        this.init();
        
    }

    init = () => {
        console.log(this.state.contents);
        const { info, contents } = this.props
        const contentsLength = contents.length;
        let orders = [];
        for( let i=0; i < contentsLength ; i++){
            orders.push(<Order onClick={(e) => this.sliding(i,e)}>{i+1}</Order>)
        }
        this.setState({ controlArea: orders, contents, info}); //
    }

    
    sliding = (index,e) => {
    console.log(e.target)
    const slider = e.target.parentNode.parentNode.childNodes[0]; // 다른 방법 찾아야함..
    const sliderLength = slider.childNodes.length;

    slider.scrollTo({
        left: (slider.scrollWidth / sliderLength) * index,
        behavior: "smooth"
    });
}

    render(){
        return  <Container width={this.props.width} height="100%">
            <Contents id="slider" width={this.props.width} height="90%">
                {this.props.contents}
            </Contents>
            <Controller key={this.state.contents} id="controlArea">
                {this.state.controlArea}
            </Controller>
            <InfoArea>
                {this.state.info}
            </InfoArea>
        </Container>
    }
}


ListSelector.propTypes = {
    info: PropTypes.string,
contents: PropTypes.element
}




export default ListSelector;
