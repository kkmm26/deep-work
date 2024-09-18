import styled from "styled-components";
import { COLORS } from "../../constants";

function Slider({ titleRef, className, onTaskComplete }) {
    let isDragging = false;
    let slider = null;
    let initialOffsetX = 0;

    function handleMousedown(e) {
        isDragging = true;
        slider = e.target;
        initialOffsetX = e.clientX - slider.getBoundingClientRect().left;

        document.addEventListener("mousemove", handleMousemove);
        document.addEventListener("mouseup", handleMouseup);
    }

    function handleMousemove(e) {
        if (!isDragging) {
            return;
        }
        let rect = titleRef.current.getBoundingClientRect();
        let offsetX = e.clientX - rect.left - initialOffsetX;

        if (offsetX < 0) offsetX = 0;
        if (offsetX > rect.width - slider.offsetWidth)
            offsetX = rect.width - slider.offsetWidth;

        slider.style.left = `${offsetX}px`;
    }

    function handleMouseup(e) {
        isDragging = false;
        let rect = titleRef.current.getBoundingClientRect();
        let sliderLeft = parseInt(slider.style.left, 10);

        if (sliderLeft < rect.width - slider.offsetWidth / 0.8) {
            resetThumb();
        } else {
            completeTaskOnSliding(titleRef.current.textContent);
        }
        document.removeEventListener("mousemove", handleMousemove);
        document.removeEventListener("mouseup", handleMouseup);
    }

    function resetThumb() {
        slider.style.left = 0;
    }
    function completeTaskOnSliding() {
        slider.style.pointerEvents = "none";
        titleRef.current.style.backgroundColor = "#2196F3";
        onTaskComplete();
    }

    return (
        <Wrapper className={className} onMouseDown={handleMousedown}></Wrapper>
    );
}

const Wrapper = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 100%;
    background-color: ${COLORS.slider};
    z-index: 10;
    border-radius: 2px;
    visibility: hidden;
`;

export default Slider;
