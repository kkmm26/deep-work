import styled from "styled-components";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../constants";

function DescriptionIcon({description}) {
    return (
        <Wrapper>
            <InfoCircledIcon style={{ width: "75%", opacity: "0.5" }} />
            <PositionAbsoluteFiller>
                <Description>
                    {description}
                </Description>
            </PositionAbsoluteFiller>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    align-self: flex-start;
    z-index: 10;

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
    padding: 10px;
    top: 10px;
    left: 0;
    font-size: 0.8rem;
    color: ${COLORS.white};
    background-color: ${COLORS.black};
    border-radius: 4px;
    opacity: 0.85;
    visibility: hidden;
`;

export default DescriptionIcon;
