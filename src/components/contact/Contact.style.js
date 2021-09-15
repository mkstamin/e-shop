import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 5rem 0;
    text-align: center;
    h3 {
        text-transform: none;
    }
    p {
        line-height: 2;
        color: var(--clr-grey-5);
    }

    @media (min-width: 1280px) {
        padding: 5rem 15rem;
    }
`;

export default Wrapper;
