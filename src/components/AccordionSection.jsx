import React, { useState } from 'react';
import styled from 'styled-components';

//Container principal
const Section = styled.section`
  position: relative;
  width: 100%; 
  min-height: 800px;
  padding: 100px;
  background: #101010;
  color: #ACC1CC;
  display: flex;
  flex-direction: column;
  font-weight: 200;

  @media (max-width: 480px){
    width: 101%;
    padding: 50px;
    font-size: 16px;
}
`;

//Brilho lateral azulado
const SideGlow = styled.div`
  position: absolute;
  width: 100px;
  height: 500px;
  background: radial-gradient(circle, rgba(54,103,153,0.9) 0%, transparent 90%);
  filter: blur(90px);

  ${({ position }) =>
    position === 'left'
      ? 'left: 0;'
      : 'right: 0;'}
      
@media (max-width: 480px){
    display: none;
}   
`;

//Título
const Title = styled.h1`
  font-size: 80px;
  font-weight: 500;
  margin-bottom: 5rem;
  text-transform: uppercase;

@media (max-width: 480px){
    font-size: 40px;
    max-width: 200px;
    padding-top: 50px;
}
`;

//Item individual do Accordion
const AccordionItem = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  border-top: 1px solid #AFAFAF;
  padding: 1.5rem 0;

  &:last-of-type {
    border-bottom: 1px solid #AFAFAF;
  }
`;

//Título de cada item
const ItemTitle = styled.h3`
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;

@media (max-width: 480px){
    max-width: 200px;
    line-height: 2rem;
    font-size: 24px;
}
`;

//Paragrafo de cada item
const ItemParagraph = styled.p`
  font-size: 18px;
  text-align: justify;
  padding: 20px 0;
  color: #AFAFAF;  
`;

//Cabeçalho do item
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  padding-top: 10px;
`;

//Icone de abrir e fechar o accordion
const Icon = styled.span`
  font-size: 35px;
  color: #ED145B;
  width: 40px;
  height: 40px;
  border: solid 2px #ED145B;
  border-radius: 99999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Efeito do Accordion
const Content = styled.div`
  margin-top: 1rem;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

//Dados exibidos no Accordion
const items = [
  {
    title: 'Conexão o mercado de trabalho',
    content: 'A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho. A instituição tem parcerias com algumas das maiores empresas de tecnologia do mundo, permitindo que seus estudantes participem de desafios reais, hackathons e programas de mentoria. Dessa forma, além de adquirirem conhecimento teórico e prático, os alunos têm a chance de desenvolver networking e garantir oportunidades de estágio e emprego ainda durante o curso. A FIAP compreende que o aprendizado vai além da sala de aula, por isso incentiva projetos interdisciplinares que desafiam a criatividade e a capacidade de resolução de problemas dos futuros profissionais.'
  },
  {
    title: 'Aprendizado imersivo',
    content: 'Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica.  Os laboratórios contam com equipamentos de ponta e softwares atualizados, permitindo que os alunos experimentem na prática as tecnologias que usarão no mercado de trabalho. Além disso, os espaços colaborativos  são projetados para estimular o trabalho em equipe, um fator essencial para profissionais da área de tecnologia. O ambiente acadêmico da FIAP reflete a realidade das grandes empresas do setor, preparando os alunos para os desafios que enfrentarão ao longo da carreira.'
  },
  {
    title: 'Ensino personalizado',
    content: 'A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. Seja para quem deseja seguir carreira no desenvolvimento de software, na ciência de dados, na segurança cibernética ou até mesmo no empreendedorismo digital, a FIAP possui um programa que atende às necessidades do mercado e às aspirações dos estudantes. Além disso, os cursos são atualizados constantemente para acompanhar as inovações tecnológicas, garantindo que os alunos sempre tenham acesso ao que há de mais recente no setor.'
  },
  {
    title: 'Inovação e transformação',
    content: 'Por fim, a FIAP se destaca por seu compromisso com a inovação e a transformação digital. A faculdade não apenas ensina tecnologia, mas a utiliza para melhorar a experiência de aprendizado, com plataformas interativas, inteligência artificial aplicada ao ensino e metodologias ativas que engajam os alunos. Seu foco é formar profissionais completos, que não apenas dominam ferramentas e linguagens de programação, mas também sabem resolver problemas, inovar e liderar. Seja para quem busca uma primeira formação ou para profissionais que desejam se atualizar, a FIAP se consolidou como uma das melhores instituições do Brasil para quem quer construir uma carreira de sucesso na tecnologia.'
  }
];

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section>
        <SideGlow position="left" />
        <SideGlow position="right" />
      <Title>Nossa Estrutura</Title>
      {items.map((item, index) => (
        <AccordionItem key={index}>
            <Header onClick={() => toggle(index)}>
                <ItemTitle>{item.title}</ItemTitle>
                <Icon>{activeIndex === index ? '−' : '+'}</Icon>
            </Header>
            <Content isOpen={activeIndex === index}>
                <ItemParagraph>{item.content}</ItemParagraph>
            </Content>
        </AccordionItem>
      ))}
    </Section>
  );
};

export default AccordionSection;