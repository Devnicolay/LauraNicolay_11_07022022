import styled from "styled-components";

function Hero({ hero, title }) {
  const ContainerHero = styled.div`
    position: relative;
    margin-top: 2em;
    object-fit: cover;
    height: 180px;
    display: flex;
    justify-content: center;
    align-content: center;
    &:before {
      content: "";
      background-image: url(${hero});
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      border-radius: 25px;
      filter: brightness(70%);
    }
  `;

  return (
    <ContainerHero>
      <h1 className="title-hero">{title}</h1>
    </ContainerHero>
  );
}

export default Hero;
