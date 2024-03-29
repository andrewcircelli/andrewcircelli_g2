import styled from "styled-components";

export const Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: calc(80vh - 100px);
  ${(props) => props.theme.spacing.sectionBottom};

  .home__text {
    @media ${(props) => props.theme.media.tablet} {
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  h1 {
    margin: -4px 0;
    font-size: 2.5rem;
    font-weight: 900;
  }

  p {
    font-family: ${(props) => props.theme.fontFamily};
  }
  .adjust {
    font-size: 1.06rem;
  }

  .home__CTA {
    width: max-content;
  }
  .home__social {
    color: ${(props) => props.theme.primaryColor};
    display: flex;
    justify-content: space-between;
    font-size: 24px;
  }

  @media ${(props) => props.theme.media.tablet} {
    justify-content: space-between;
    flex-direction: column;
    /* height and m-b for fixing issue
    which was hiding the "thing i love" header */
    height: fit-content;
    margin-bottom: 140px;

    h1 {
      margin: 6px 0;
      line-height: 100%;
    }
  }
`;

export const HomeWrapper = styled.section`
  margin-bottom: 100px;
  margin-top: 125px;

  .svg-rect {
    width: 40%;
    position: absolute;
    top: 50px;
    right: 0;
    z-index: -1;
  }

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 80px;

    .svg-rect {
      top: 0px;
      opacity: 0.8;
    }
  }
`;
