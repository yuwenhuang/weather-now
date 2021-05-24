import styled from 'styled-components'

const WeatherConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.middleBlueGreen};
  border-radius: 10px;
  min-width: 150px;
  margin: 20px;
  padding: 16px;
  box-shadow: 5px 5px 15px 5px; 
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const Value = styled.text`
  font-size: 1.5em;
  text-align: center;
`;

interface WeatherConditionProps {
  description: string
  value: string
  unit?: string
}

export const WeatherCondition = (props: WeatherConditionProps) => {
    const { description, value, unit } = props
    return(
        <WeatherConditionWrapper>
            <Description>{description}</Description>
            <Value>{value} {unit}</Value>
        </WeatherConditionWrapper>
    )
}