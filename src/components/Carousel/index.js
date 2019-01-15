import React, { Component, Fragment } from 'react';
import CarouselButton from '../CarouselButton';
import { SlideDiv, SliderDiv, SliderWrapperDiv } from './style';
import { pageMove, pageWidth } from '../../constants/chartConstants';
import CarouselDots from '../CarouselDots'
export default class Carousel extends Component {

    slideElement = React.createRef();

    constructor(props) {
        super(props)
        this.state = {
            translateValue: 0,
            buttonVisiblity: 0,
            index: 0
        }
    }

    maxSlidesWidth = () => {
        return this.slideElement.current.clientWidth * this.props.children.length;
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.buttonVisiblity !== prevState.buttonVisiblity || prevState.buttonVisiblity === 0) {
            this.checkScreenVisibilities()
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        this.checkScreenVisibilities()
    }

    checkScreenVisibilities() {
        this.setState(prevState => ({
            buttonVisiblity: pageWidth() < this.maxSlidesWidth(),
            dotsVisiblity: pageWidth() < 640,
            translateValue: 0
        }));
    }

    goToPreviousSlide = () => {
        if (this.state.translateValue === 0) return

        this.setState(prevState => ({
            translateValue: prevState.translateValue + this.slideElement.current.clientWidth,
            buttonVisiblity: true,
            index: prevState.index - 1
        }));
    }

    goToNextSlide = () => {
        if (-this.state.translateValue + pageWidth() > this.maxSlidesWidth() - pageMove) return
        this.setState(prevState => ({
            translateValue: prevState.translateValue - this.slideElement.current.clientWidth,
            index: prevState.index + 1,
            buttonVisiblity: true
        }));
    }

    render() {
        return (
            <SliderDiv>

                <SliderWrapperDiv translateValue={this.state.translateValue}>
                    {React.Children.map(this.props.children, child => (
                        <SlideDiv ref={this.slideElement}>
                            {React.cloneElement(child)}
                        </SlideDiv>
                    ))}
                </SliderWrapperDiv>

                {this.state.buttonVisiblity === true && <Fragment>
                    <CarouselButton
                        type="left"
                        onClick={this.goToPreviousSlide} />
                    <CarouselButton
                        type="right"
                        onClick={this.goToNextSlide} />
                </Fragment>}

                {this.state.dotsVisiblity &&
                    <CarouselDots
                        activeDotIndex={this.state.index}
                        count={this.props.children.length} />
                }

            </SliderDiv>
        );
    }
}

