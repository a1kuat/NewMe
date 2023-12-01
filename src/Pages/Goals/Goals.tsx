import React from 'react'
import styled from 'styled-components';

const GoalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 45px;    
`;
const TitleSection = styled.div`
    display: flex;
    justify-content: space-between;
`
const GoalsHeader = styled.div`
    text-transform: uppercase;
    letter-spacing: 8px;
    font-size: 30px;
`;
const AddGoalButton = styled.div`
    text-transform: uppercase;
    display: flex;
    align-items: center;
`;
const GoalRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
    :last-child{
        margin-bottom: 0;
    }
`;
const Name = styled.div`
    text-transform: uppercase;
`;
const Action = styled.div`
    display: flex;
    align-items: center;    
`;
const Goals = () => {
    const AllGoals = [
        {id:0 , name: "goal 1"},
        {id:0 , name: "goal 2"},
        {id:0 , name: "goal 3"},
        {id:0 , name: "goal 4"},
    ]
    return (
        <>
            <GoalsContainer>
                <GoalsHeader>
                    <TitleSection>goals</TitleSection>
                    <AddGoalButton>goals</AddGoalButton>
                    {AllGoals.map((goal, idx) => {
                        return(
                        <GoalRow key={`goal-number-` + idx}>
                            <Name>{goal.name}</Name>
                            <Action>edit or delete</Action>
                        </GoalRow>
                    )})}
                </GoalsHeader>
            </GoalsContainer>
        </>
    );
}

export default Goals;
