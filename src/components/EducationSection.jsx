import React from 'react';
import styled from 'styled-components';
import FiapNext from '../assets/imgs/fiap-next.jpg';

//Educação e Tech
const Section = styled.section`
  width: 100%;
  height:110vh; 
  padding: 7%; 
  font-weight: 200;
  font-size: 20px;
  text-align: justify;
  background-color: #F5F5F5;
  color: #555555;

@media (max-width: 480px){
    width: 101%;
    font-size: 18px;
    height:170vh;
}
`;

//Título
const Title = styled.h1`
  font-size: 80px;
  font-weight: 500;
  padding-bottom: 90px;
  text-align: left;
  color: #000000;

@media (max-width: 480px){
    font-size: 40px;
    padding: 50px 0;
    max-width: 400px;
}
`;

//Quebra de conteúdo
const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;

@media (max-width: 480px){
    display: flex;
    flex-direction: column;
    gap: 70px;
}
`;

//Conteúdo da esquerda
const LeftContent = styled.div`
  flex: 1;
  max-width: 650px;
`;

//Conteúdo da Direita
const RightContent = styled.div`
  flex: 1;
  max-width: 600px;

  li {
    color: #ED145B;
    font-size: 18px;
    padding: 10px;
    padding-left: 20px;
    font-family: 'Roboto', sans-serif;
  }

  .category {
    margin: 30px 0;
  }
    
  .barra {
    color: #ED145B;
    font-weight: bold;
  }
`;

//Imagem
const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 700px;
  margin: 40px auto 10px;
`;

//Descrição da imagem
const Caption = styled.figcaption`
  text-align: left;
  font-size: 16px;
  padding-top: 15px;
  font-family: 'Roboto', sans-serif;
`;

export function EducacaoTech() {
  return (
    <Section>
      <Title>EDUCAÇÃO E TECH</Title>
      <ContentWrapper>
        <LeftContent>
            <p>
                A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender. 
            </p>

            <figure>
                <Image src={FiapNext} alt="FIAP NEXT" />
                <Caption>Figura 1 – Logotipo da FIAP NEXT</Caption>
            </figure>
        </LeftContent>

        <RightContent>
            <p>
                Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem diversas àreas, incluindo:
            </p>

            <div className="category">
                <span className="barra">/</span> Tecnologia e Desenvolvimento
            </div>
                <ul>
                    <li>- Desenvolvimento de Software</li>
                    <li>- Inteligência Artificial</li>
                    <li>- Data Science</li>
                    <li>- Cibersegurança</li>
                </ul>

            <div className="category">
                <span className="barra">/</span> UX/UI, Marketing Digital
            </div>

            <div className="category">
                <span className="barra">/</span> Metodologias e Gestão
            </div>

            <p>
                Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
            </p>
        </RightContent>
      </ContentWrapper>
      
    </Section>
  );
}

export default EducacaoTech;