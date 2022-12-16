import styled from "styled-components";

export const TodoStyled = styled.div`
&{

}
.todos-item{
    display: flex;
    
}
& input:checked + div{
    text-decoration:line-through
}
`;