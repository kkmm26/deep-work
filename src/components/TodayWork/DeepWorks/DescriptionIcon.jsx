import styled from "styled-components";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants";

function DescriptionIcon() {
    return (
        <Wrapper>
            <InfoCircledIcon />
            <PositionAbsoluteFiller>
                <Description>
                    Task Description Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Praesentium, totam. Laborum omnis, ipsam
                    quisquam at autem labore magnam nam, fuga minima provident
                    odio pariatur ut dolorem, iure ullam deleniti nisi.
                </Description>
            </PositionAbsoluteFiller>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    border: 1px solid red;

    &:hover p {
        visibility: visible;
    }
`;

// filler for max-width of Description
const PositionAbsoluteFiller = styled.div`
    position: absolute;
    width: 200px;
`

const Description = styled.p`
    max-width: 200px;
    position: absolute;
    padding: 15px;
    top: 10px;
    left: 0;
    font-size: 0.8rem;
    color: ${COLORS.white};
    background-color: ${COLORS.black};
    border-radius: 4px;
    opacity: 0.7;
    visibility: hidden;
`;

export default DescriptionIcon;
