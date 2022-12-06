import PropTypes from "prop-types";
import { SectionStyles, TitleTwo } from "./Section.styled";

export const Section = ({title, children}) => {
    return (
        <SectionStyles>
                <TitleTwo>{title}</TitleTwo>
                <div>{children}</div>
        </SectionStyles>
    );
};
          
Section.propTypes = {
    title: PropTypes.string.isRequired,
};